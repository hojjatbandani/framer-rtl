'use client';

import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Reveal } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function Process({ t }: { t: Dictionary['process'] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 65%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setReached(Math.min(t.steps.length - 1, Math.floor(value * t.steps.length + 0.35)));
  });

  return (
    <section id="process" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lede">{t.subtitle}</p>
        </Reveal>

        <div className="process" ref={ref}>
          <div className="process-rail">
            <motion.i style={{ scaleY }} />
          </div>

          {t.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="step-row">
              <span className="step-dot" data-reached={i <= reached} aria-hidden="true" />
              <div className="surface step">
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
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
