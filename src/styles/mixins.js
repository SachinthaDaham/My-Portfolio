import { css } from 'styled-components';

const button = css`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--green);
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  neonBorder: css`
    box-shadow: 0 0 0 1px rgba(103, 255, 216, 0.25), 0 0 18px rgba(103, 255, 216, 0.08),
      inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  `,

  ripplePulse: css`
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: radial-gradient(120px 120px at var(--mx,50%) var(--my,50%), rgba(103,255,216,.18), transparent 60%);
      opacity: 0;
      transition: opacity 250ms var(--easing);
    }
    &:hover:after { opacity: 1; }
  `,
  glassCard: css`
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px) saturate(110%);
    box-shadow: 0 10px 30px -15px var(--navy-shadow), inset 0 0 0 1px rgba(255,255,255,0.04);
    transition: transform 260ms var(--easing), box-shadow 260ms var(--easing);
    &:hover { transform: translateY(-4px); box-shadow: 0 16px 38px -18px var(--navy-shadow), inset 0 0 0 1px rgba(255,255,255,0.06); }
  `,

  neonOutline: css`
    box-shadow: 0 0 0 2px rgba(103,255,216,0.18);
    &:hover { box-shadow: 0 0 0 3px rgba(103,255,216,0.24); }
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    color: var(--green);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button,

  smallButton: css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    ${/* effects */ ''}
    ${({ theme }) => theme.mixins.neonBorder};
    ${({ theme }) => theme.mixins.ripplePulse};
    position: relative; overflow: hidden;
    &:before {
      content: '';
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
      background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.25) 20%, transparent 40%);
      transform: translateX(-150%);
      transition: transform 500ms var(--easing);
    }
    &:hover:before { transform: translateX(150%); }

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--green);
      transform: translate(-4px, -4px);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    ${({ theme }) => theme.mixins.neonBorder};
    ${({ theme }) => theme.mixins.ripplePulse};
    position: relative; overflow: hidden;
    &:before {
      content: '';
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
      background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.25) 20%, transparent 40%);
      transform: translateX(-150%);
      transition: transform 500ms var(--easing);
    }
    &:hover:before { transform: translateX(150%); }

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--green);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,

  hoverLift: css`
    transition: transform 300ms ease, box-shadow 300ms ease;
    &:hover,
    &:focus-within {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
