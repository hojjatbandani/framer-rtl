import type { SVGProps } from 'react';

export type IconName =
  | 'code'
  | 'target'
  | 'layers'
  | 'terminal'
  | 'chart'
  | 'wand'
  | 'grid'
  | 'gauge'
  | 'bug'
  | 'shield';

type Props = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 20, children, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

const paths: Record<IconName, JSX.Element> = {
  code: (
    <>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="M13 4 11 20" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  terminal: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="3" />
      <path d="m7 10 3 2.5L7 15" />
      <path d="M13 15h4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 21h18" />
      <rect x="4" y="12" width="4" height="6" rx="1.2" />
      <rect x="10" y="8" width="4" height="10" rx="1.2" />
      <rect x="16" y="4" width="4" height="14" rx="1.2" />
    </>
  ),
  wand: (
    <>
      <path d="m5 19 10-10" />
      <path d="m15.5 5.5 3 3" />
      <path d="M17 3v-.01M21 7v-.01M19 12v-.01M9 4v-.01" />
      <path d="m14 8 5 5-8 8-5-5 8-8Z" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.5 17a9 9 0 1 1 17 0" />
      <path d="m14.5 10.5-3.2 3.2" />
      <circle cx="12" cy="15" r="1.5" />
    </>
  ),
  bug: (
    <>
      <rect x="7" y="7" width="10" height="13" rx="5" />
      <path d="M9 5.5 10.5 7M15 5.5 13.5 7" />
      <path d="M3.5 11h3.5M17 11h3.5M3.5 16H7M17 16h3.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.5-3.2 7.9-8 9-4.8-1.1-8-4.5-8-9V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  )
};

export function Icon({ name, ...rest }: Props & { name: IconName }) {
  return <Base {...rest}>{paths[name]}</Base>;
}

export const ArrowRight = (props: Props) => (
  <Base {...props}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const ArrowUpRight = (props: Props) => (
  <Base {...props}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Base>
);

export const Search = (props: Props) => (
  <Base size={16} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </Base>
);

export const Plus = (props: Props) => (
  <Base size={16} {...props}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const Star = (props: Props) => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="m12 2.5 2.9 5.9 6.6.9-4.8 4.6 1.2 6.6L12 17.4l-5.9 3.1 1.2-6.6-4.8-4.6 6.6-.9L12 2.5Z" />
  </svg>
);

export const Globe = (props: Props) => (
  <Base size={16} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </Base>
);

export const Menu = (props: Props) => (
  <Base size={20} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (props: Props) => (
  <Base size={20} {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const Spark = (props: Props) => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2c.7 5 4.3 8.6 9.3 9.3-5 .7-8.6 4.3-9.3 9.3-.7-5-4.3-8.6-9.3-9.3C7.7 10.6 11.3 7 12 2Z" />
  </svg>
);
