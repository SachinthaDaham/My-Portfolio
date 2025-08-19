import { css } from 'styled-components';

const variables = css`
  :root {
    /* Dark theme: space cadet base with blush + blue/purple accents */
    --dark-navy: #0b0f1e;
    --navy: #151a2f; /* space cadet inspired */
    --light-navy: #1f2750;
    --lightest-navy: #2b356e;
    --navy-shadow: rgba(11, 15, 30, 0.75);
    --dark-slate: #6976a6;
    --slate: #a9b3ea;
    --light-slate: #cdd3fb;
    --lightest-slate: #f2f4ff;
    --white: #fbfcff;
    --green: #54ffd4; /* neon cyan */
    --green-tint: rgba(84, 255, 212, 0.12);
    --pink: #e56b6f; /* blush */
    --blue: #6bd1ff; /* electric blue */
    --violet: #a986ff; /* neon violet */
    /* shared accents for effects */
    --accent-gradient: linear-gradient(90deg, var(--blue), var(--violet), var(--pink));
    --scan-accent: rgba(107, 209, 255, 0.20);
    --cosmic-bg: radial-gradient(1400px 900px at 80% 10%, rgba(169,134,255,0.28), transparent),
      radial-gradient(1100px 700px at 10% 90%, rgba(84,255,212,0.18), transparent),
      radial-gradient(900px 600px at 30% 50%, rgba(107,209,255,0.14), transparent),
      radial-gradient(1200px 800px at 90% 80%, rgba(229,107,111,0.10), transparent),
      linear-gradient(180deg, #151a2f 0%, #12162a 45%, #0b0f1e 100%);

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-heading: 'SF Mono', 'Calibre', -apple-system, system-ui, sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    /* Sci-fi utilities */
    --glass-bg: rgba(255, 255, 255, 0.04);
    --glass-border: rgba(255, 255, 255, 0.06);
    --scanlines: repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04) 0px,
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px,
      transparent 3px
    );

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
