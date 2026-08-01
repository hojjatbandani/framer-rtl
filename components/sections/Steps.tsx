'use client';

import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Reveal } from '@/components/motion';

type Step = { title: string; desc: string };

/**
 * The scroll-tracked rail. Shared by the home page's buying flow and the
 * services page's engagement process — same shape, same behaviour.
 */
export function Steps({
  id,
  badge,
  title,
  subtitle,
  steps
}: {
  id?: string;
  badge: string;
  title: string;
  subtitle: string;
  steps: Step[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setReached(Math.min(steps.length - 1, Math.floor(value * steps.length + 0.35)));
  });

  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {badge}
          </span>
          <h2 className="h-section">{title}</h2>
          <p className="lede">{subtitle}</p>
        </Reveal>

        <div className="process" ref={ref}>
          <div className="process-rail" aria-hidden="true">
            <motion.i style={{ scaleY }} />
          </div>

          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="step-row">
              <span className="step-dot" data-reached={i <= reached} aria-hidden="true" />
              <div className="surface step">
                <span className="step-num" dir="ltr">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
