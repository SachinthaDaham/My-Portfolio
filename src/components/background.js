import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0) translateX(0) scale(1); }
  50% { transform: translateY(-18px) translateX(8px) scale(1.03); }
  100% { transform: translateY(0) translateX(0) scale(1); }
`;

const drift = keyframes`
  0% { transform: translateY(0); opacity: .3; }
  100% { transform: translateY(-60px); opacity: .6; }
`;

const parallax = keyframes`
  0% { transform: translate3d(0,0,0) }
  50% { transform: translate3d(-1%, 1%, 0) }
  100% { transform: translate3d(0,0,0) }
`;

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Orb = styled.div`
  position: absolute;
  width: ${p => p.size || 220}px;
  height: ${p => p.size || 220}px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(105,169,255,.35), transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(103,255,216,.25), transparent 55%),
    rgba(255,255,255,.03);
  filter: blur(${p => p.blur || 0}px);
  animation: ${float} ${p => p.dur || 12}s ease-in-out infinite;
  left: ${p => p.left || '10%'};
  top: ${p => p.top || '20%'};
`;

const Stars = styled.div`
  position: absolute; inset: 0; background-repeat: repeat;
  background-image:
    radial-gradient(2px 2px at 25% 30%, rgba(255,255,255,.35) 50%, transparent 51%),
    radial-gradient(1.5px 1.5px at 70% 60%, rgba(255,255,255,.25) 50%, transparent 51%),
    radial-gradient(1.2px 1.2px at 45% 80%, rgba(255,255,255,.2) 50%, transparent 51%);
  animation: ${drift} 18s linear infinite alternate;
  mix-blend-mode: screen;
`;

const BackgroundFX = () => (
  <Wrap aria-hidden>
    <Stars />
    <Orb size={340} blur={8} dur={16} left="75%" top="10%" style={{animationTimingFunction:'ease-in-out'}} />
    <Orb size={260} blur={10} dur={20} left="5%" top="65%" style={{animationTimingFunction:'ease-in-out'}} />
    <Orb size={180} blur={6} dur={14} left="35%" top="30%" style={{animationTimingFunction:'ease-in-out'}} />
  </Wrap>
);

export default BackgroundFX;



