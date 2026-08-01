import type { CSSProperties, ReactNode } from 'react';
import type { TemplateKind } from '@/lib/templates';

/**
 * An abstract, pure-CSS mock of the site each template produces — browser
 * chrome plus a wireframe of the actual layout. No screenshots to ship, no
 * network requests, and it stays razor sharp at any size because every
 * dimension is em-based off a container-query font size (see `.tp-canvas`).
 */

const Line = ({ w, strong }: { w: number; strong?: boolean }) => (
  <span className={strong ? 'tp-h' : 'tp-t'} style={{ width: `${w}%` }} />
);

const Nav = ({ items = 3, cta = true }: { items?: number; cta?: boolean }) => (
  <div className="tp-nav">
    <span className="tp-logo" />
    <div className="tp-nav-links">
      {Array.from({ length: items }).map((_, i) => (
        <i key={i} />
      ))}
    </div>
    {cta && <span className="tp-pill solid" />}
  </div>
);

const Card = ({ children, className = '' }: { children?: ReactNode; className?: string }) => (
  <div className={`tp-card ${className}`}>{children}</div>
);

const CHART = [42, 61, 48, 78, 66, 92, 71];

const layouts: Record<TemplateKind, ReactNode> = {
  saas: (
    <>
      <Nav />
      <div className="tp-stage tp-center">
        <Line w={72} strong />
        <Line w={48} strong />
        <Line w={58} />
        <div className="tp-btns">
          <span className="tp-pill solid" />
          <span className="tp-pill ghost" />
        </div>
      </div>
      <div className="tp-grid-3">
        {[0, 1, 2].map((i) => (
          <Card key={i}>
            <span className="tp-dot" />
            <Line w={72} />
            <Line w={50} />
          </Card>
        ))}
      </div>
    </>
  ),

  agency: (
    <>
      <Nav items={4} cta={false} />
      <div className="tp-split">
        <div className="tp-stage">
          <Line w={92} strong />
          <Line w={70} strong />
          <Line w={80} />
          <span className="tp-pill ghost" style={{ marginBlockStart: '0.5em' }} />
        </div>
        <div className="tp-block tp-tall" />
      </div>
      <div className="tp-grid-2">
        <div className="tp-block tp-short" />
        <div className="tp-block tp-short tp-muted" />
      </div>
    </>
  ),

  restaurant: (
    <>
      <div className="tp-cover">
        <span className="tp-logo tp-logo-round" />
        <Line w={54} strong />
        <Line w={34} />
        <span className="tp-pill solid" />
      </div>
      <div className="tp-grid-3">
        {[0, 1, 2].map((i) => (
          <Card key={i} className="tp-dish">
            <span className="tp-block tp-thumb" />
            <Line w={78} />
            <Line w={40} />
          </Card>
        ))}
      </div>
    </>
  ),

  business: (
    <>
      <Nav items={4} />
      <div className="tp-split tp-split-even">
        <div className="tp-stage">
          <Line w={88} strong />
          <Line w={62} strong />
          <Line w={76} />
          <div className="tp-btns">
            <span className="tp-pill solid" />
            <span className="tp-pill ghost" />
          </div>
        </div>
        <div className="tp-block tp-tall" />
      </div>
      <div className="tp-stats">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="tp-stat">
            <span className="tp-num" />
            <Line w={80} />
          </div>
        ))}
      </div>
    </>
  ),

  portfolio: (
    <>
      <div className="tp-folio-head">
        <span className="tp-logo tp-logo-round" />
        <Line w={30} strong />
        <div className="tp-nav-links tp-push">
          <i />
          <i />
        </div>
      </div>
      <div className="tp-folio">
        <div className="tp-block tp-folio-lead" />
        <div className="tp-block tp-muted" />
        <div className="tp-block" />
        <div className="tp-block tp-muted" />
        <div className="tp-block" />
      </div>
    </>
  ),

  dashboard: (
    <div className="tp-app">
      <aside className="tp-side">
        <span className="tp-logo" />
        {[0, 1, 2, 3, 4].map((i) => (
          <i key={i} className={i === 1 ? 'tp-side-active' : undefined} />
        ))}
      </aside>
      <div className="tp-app-main">
        <div className="tp-topbar">
          <Line w={26} strong />
          <span className="tp-pill solid tp-push" />
        </div>
        <div className="tp-kpis">
          {[0, 1, 2].map((i) => (
            <Card key={i}>
              <Line w={44} />
              <span className="tp-num" />
            </Card>
          ))}
        </div>
        <Card className="tp-chart-card">
          <div className="tp-chart">
            {CHART.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  ),

  store: (
    <>
      <div className="tp-nav">
        <span className="tp-logo" />
        <div className="tp-nav-links">
          <i />
          <i />
          <i />
        </div>
        <span className="tp-bag" />
      </div>
      <div className="tp-band">
        <Line w={40} strong />
        <span className="tp-pill ghost" />
      </div>
      <div className="tp-products">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="tp-product">
            <span className={`tp-block tp-thumb ${i % 3 === 1 ? 'tp-muted' : ''}`} />
            <Line w={82} />
            <span className="tp-price" />
          </div>
        ))}
      </div>
    </>
  ),

  blog: (
    <>
      <div className="tp-folio-head">
        <Line w={26} strong />
        <div className="tp-nav-links tp-push">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="tp-stage tp-lead">
        <Line w={84} strong />
        <Line w={56} />
      </div>
      <div className="tp-posts">
        {[0, 1, 2].map((i) => (
          <div key={i} className="tp-post">
            <span className={`tp-block tp-post-thumb ${i === 1 ? 'tp-muted' : ''}`} />
            <div className="tp-post-body">
              <Line w={70} strong />
              <Line w={92} />
              <Line w={44} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export function TemplatePreview({
  kind,
  accent,
  className = ''
}: {
  kind: TemplateKind;
  accent: [string, string];
  className?: string;
}) {
  return (
    <div
      className={`tp ${className}`}
      data-kind={kind}
      style={{ '--tp-a': accent[0], '--tp-b': accent[1] } as CSSProperties}
      aria-hidden="true"
    >
      <div className="tp-chrome">
        <span className="tp-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="tp-url" />
      </div>
      <div className="tp-canvas">{layouts[kind]}</div>
      <span className="tp-sheen" />
    </div>
  );
}
