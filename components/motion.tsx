'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionProps,
  type Variants
} from 'framer-motion';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode
} from 'react';

/* --------------------------------------------------------------------------
   Shared easing — matches the CSS --ease-out curve so JS and CSS motion agree.
   -------------------------------------------------------------------------- */
export const EASE = [0.16, 1, 0.3, 1] as const;

/* --------------------------------------------------------------------------
   Reveal — the workhorse scroll-in animation.
   -------------------------------------------------------------------------- */
const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  h2: motion.h2,
  p: motion.p
} as const;

type RevealProps = {
  children: ReactNode;
  as?: keyof typeof motionTags;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

export function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  blur = true,
  className,
  style,
  id
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motionTags[as];

  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduced ? 0.2 : 0.75, delay: reduced ? 0 : delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}

/* --------------------------------------------------------------------------
   Stagger group — parent orchestrates, children ride the variants.
   -------------------------------------------------------------------------- */
const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
};

export function Stagger({
  children,
  className,
  amount = 0.15
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & MotionProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} variants={reduced ? undefined : itemVariants} {...rest}>
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   WordReveal — headline words rise into place one after another.
   Direction-agnostic (y + opacity only), so it reads correctly in RTL.
   -------------------------------------------------------------------------- */
export function WordReveal({
  text,
  className,
  delay = 0,
  as: As = 'span'
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const reduced = useReducedMotion();
  const words = text.split(' ');

  if (reduced) return <As className={className}>{text}</As>;

  return (
    <As className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            // room for descenders inside the clip box, without moving the baseline
            paddingBlockEnd: '0.16em',
            marginBlockEnd: '-0.16em'
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, delay: delay + i * 0.055, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </As>
  );
}

/* --------------------------------------------------------------------------
   TextRotator — cycles a set of words inside the hero headline.
   -------------------------------------------------------------------------- */
export function TextRotator({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [interval, reduced, words.length]);

  // Longest word reserves the width so the headline never reflows mid-cycle.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), words[0] ?? '');

  return (
    <span className="hero-rotator">
      <span className="ghost" aria-hidden="true">
        {longest}
      </span>
      {words.map((word, i) => (
        <motion.span
          key={word}
          aria-hidden={i === index ? undefined : true}
          initial={false}
          animate={i === index ? { y: '0%', opacity: 1 } : { y: i < index ? '-110%' : '110%', opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.6, ease: EASE }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* --------------------------------------------------------------------------
   Magnetic — button subtly leans toward the cursor.
   -------------------------------------------------------------------------- */
export function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
      y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [reduced, strength, x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y, display: 'inline-flex' }}
    >
      {children}
    </motion.span>
  );
}

/* --------------------------------------------------------------------------
   Spotlight — a soft light follows the cursor across a card.
   -------------------------------------------------------------------------- */
export function Spotlight({
  children,
  className = '',
  ...rest
}: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  const onMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div className={`spotlight ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Tilt — gentle 3D parallax on the hero panel.
   -------------------------------------------------------------------------- */
export function Tilt({
  children,
  className,
  max = 7
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 140, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const transform = useMotionTemplate`perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduced ? undefined : { transform }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Marquee — seamless infinite scroll, mirrored for RTL.
   -------------------------------------------------------------------------- */
export function Marquee({
  children,
  speed = 34,
  reverse = false
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
}) {
  const reduced = useReducedMotion();
  const from = reverse ? '-50%' : '0%';
  const to = reverse ? '0%' : '-50%';

  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={reduced ? undefined : { x: [from, to] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {children}
        <span aria-hidden="true" style={{ display: 'contents' }}>
          {children}
        </span>
      </motion.div>
    </div>
  );
}
