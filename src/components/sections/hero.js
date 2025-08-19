import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const drift = keyframes`
  0% { transform: translate3d(0,0,0) rotate(0deg); }
  50% { transform: translate3d(2%, -2%, 0) rotate(3deg); }
  100% { transform: translate3d(0,0,0) rotate(0deg); }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const typeIn = keyframes`
  from { width: 0; opacity: .6; }
  to { width: 100%; opacity: 1; }
`;

/* removed pop quotes animation */

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100vh - var(--nav-height));
  height: auto;
  padding: calc(var(--nav-height) + 40px) 0 0 0;
  position: relative;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 16px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 16px;
    color: var(--slate);
    line-height: 1.15;
  }

  p {
    margin: 24px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
  .email-link:hover { filter: saturate(115%); }

  /* slightly smaller hero typography */
  .big-heading { font-size: clamp(36px, 7vw, 68px); line-height: 1.08; margin: 0 0 6px; }
  .medium-heading { font-size: clamp(24px, 5vw, 38px); line-height: 1.15; }

  /* aurora backdrop */
  .aurora {
    position: absolute;
    right: 6%;
    top: 20%;
    width: clamp(260px, 36vw, 640px);
    height: clamp(260px, 36vw, 640px);
    border-radius: 50%;
    filter: blur(28px) saturate(120%);
    opacity: 0.9;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(40% 40% at 30% 30%, rgba(107,220,255,.38), transparent 60%),
      radial-gradient(45% 45% at 70% 70%, rgba(180,138,255,.32), transparent 55%),
      radial-gradient(35% 35% at 50% 50%, rgba(255,119,207,.22), transparent 60%);
    animation: ${drift} 16s ease-in-out infinite;
  }

  /* subtle grid */
  .neon-grid {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(800px 520px at 70% 30%, black, transparent 70%);
    opacity: .25;
    z-index: 0;
    animation: ${drift} 20s ease-in-out infinite;
  }

  .heading-gradient {
    background: var(--accent-gradient);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${shimmer} 10s ease infinite;
    text-shadow: none;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation-name: ${shimmer};
  }

  .type-line { display:inline-block; overflow:hidden; white-space:nowrap; border-right: 2px solid rgba(255,255,255,.35); animation: ${typeIn} 2.6s steps(26,end) 0.2s both; }

  .cta-row {
    display: flex; gap: 12px; flex-wrap: wrap; margin-top: 34px;
    a { ${({ theme }) => theme.mixins.bigButton}; }
  }

  /* removed pop quotes */
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1 className="overline">Hello, I’m</h1>;
  const two = (
    <h2 className="big-heading heading-gradient type-line">Sachintha Daham Sankalpa</h2>
  );
  const three = (
    <h3 className="medium-heading">I build fast, resilient software with thoughtful design.</h3>
  );
  const four = (
    <>
      <p>
        Final‑year SE undergrad at SLIIT. I care about clarity, performance, and crafting smooth
        developer experiences. DevOps when it elevates the product.
      </p>
    </>
  );

  const five = (
    <div className="cta-row">
      <a href="#projects" className="email-link">View Work</a>
      <a href="#contact" className="email-link">Get in Touch</a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <div className="aurora" aria-hidden />
      <div className="neon-grid" aria-hidden />
      {null}
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
