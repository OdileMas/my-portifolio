import { Link } from 'react-router-dom';

export function ArrowIcon({ direction = 'right' }) {
  const rotate = { right: 0, 'up-right': -45, down: 90 }[direction] ?? 0;
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M2 8h11.5M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Clover() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 6.2C8 3.6 6.9 1.5 5 1.5S2 3 2 4.6c0 1.9 2.4 3 6 3.4Zm0 0c0-2.6 1.1-4.7 3-4.7s3 1.5 3 3.1c0 1.9-2.4 3-6 3.4Zm0 3.6c0 2.6 1.1 4.7 3 4.7s3-1.5 3-3.1c0-1.9-2.4-3-6-3.4Zm0 0c0 2.6-1.1 4.7-3 4.7s-3-1.5-3-3.1c0-1.9 2.4-3 6-3.4Z"
      />
    </svg>
  );
}

export function Label({ children, className = '' }) {
  return (
    <p className={`label ${className}`}>
      <Clover />
      {children}
    </p>
  );
}

const isExternal = (to) => /^(https?:|mailto:|tel:)/.test(to) || to.endsWith('.pdf');

// Pill button with a circular arrow; renders a router Link or a plain anchor.
export function Pill({ to, children, variant = '', icon = 'right', className = '', ...rest }) {
  const cls = `pill ${variant ? `pill--${variant}` : ''} ${className}`;
  const inner = (
    <>
      {children}
      <span className="pill__icon">
        <ArrowIcon direction={icon} />
      </span>
    </>
  );
  if (isExternal(to) || rest.download !== undefined) {
    const external = /^https?:/.test(to);
    return (
      <a href={to} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

export function TextLink({ to, children, external = false }) {
  const inner = (
    <>
      {children}
      <ArrowIcon direction={external ? 'up-right' : 'right'} />
    </>
  );
  return external ? (
    <a href={to} className="text-link" target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link to={to} className="text-link">
      {inner}
    </Link>
  );
}

// Section header row used across pages
export function SectionHead({ label, title, action }) {
  return (
    <div className="section-head">
      <div>
        <Label className="reveal">{label}</Label>
        <h2 className="title reveal" style={{ '--d': '.08s' }}>
          {title}
        </h2>
      </div>
      {action && <div className="reveal" style={{ '--d': '.16s' }}>{action}</div>}
    </div>
  );
}
