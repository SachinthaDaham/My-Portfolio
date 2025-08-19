import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled, { keyframes } from 'styled-components';
import { IconLoader } from '@components/icons';

const starDrift = keyframes`
  0% { transform: translateY(0) }
  100% { transform: translateY(-40px) }
`;

const ringSpin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const pulse = keyframes`
  0%,100% { transform: scale(1); opacity: .8 }
  50% { transform: scale(1.08); opacity: 1 }
`;

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
  background-image: radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.35) 50%, transparent 51%),
    radial-gradient(1.5px 1.5px at 80% 60%, rgba(255,255,255,0.25) 50%, transparent 51%),
    radial-gradient(1.2px 1.2px at 50% 80%, rgba(255,255,255,0.2) 50%, transparent 51%);
  animation: ${starDrift} 6s linear infinite alternate;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }

  .rings {
    position: relative;
    width: 140px; height: 140px; margin: 26px auto 0;
  }
  .rings:before, .rings:after {
    content: '';
    position: absolute; inset: -10px; border-radius: 50%;
    border: 2px solid transparent; pointer-events: none;
    background: conic-gradient(from 0deg, var(--blue), var(--violet), var(--pink), var(--blue));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    padding: 6px;
    animation: ${ringSpin} 6s linear infinite;
    opacity: .55;
  }
  .rings:after { inset: -22px; animation-duration: 10s; opacity: .35; }

  .pulse-dot {
    width: 10px; height: 10px; border-radius: 50%; background: var(--green); margin: 16px auto 0;
    box-shadow: 0 0 12px rgba(84,255,212,.6);
    animation: ${pulse} 1.8s ease-in-out infinite;
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const tl = anime.timeline({ complete: () => finishLoading() });
    tl.add({
      targets: '.welcome',
      opacity: [0, 1],
      translateY: [10, 0],
      easing: 'easeOutQuad',
      duration: 600,
      delay: 200,
    })
      .add({
        targets: '.subtitle',
        opacity: [0, 1],
        translateY: [10, 0],
        easing: 'easeOutQuad',
        duration: 600,
      })
      .add({
        targets: '.logo-wrapper',
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: 500,
        easing: 'easeOutBack',
      })
      .add({
        targets: '.rings',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuad',
      })
      .add({
        targets: '.loader',
        opacity: [1, 0],
        duration: 350,
        easing: 'easeInOutQuad',
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div style={{textAlign:'center'}}>
        <div className="welcome" style={{opacity:0, color:'var(--lightest-slate)', fontSize:24, fontFamily:'var(--font-mono)'}}>
          Welcome to my portfolio
        </div>
        <div className="subtitle" style={{opacity:0, color:'var(--slate)', marginTop:8}}>
          Software Engineering • DevOps • Systems Design
        </div>
        <div className="logo-wrapper" style={{opacity:0, marginTop:24}}>
          <IconLoader />
        </div>
        <div className="rings" style={{opacity:0}} />
        <div className="pulse-dot" />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
