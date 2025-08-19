import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledContactSection = styled.footer`
  max-width: 760px;
  margin: 0 auto 120px;
  text-align: center;
  padding: 50px 30px 60px;
  background: var(--glass-bg);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 18px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  backdrop-filter: blur(10px) saturate(110%);

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(36px, 4.5vw, 54px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    border-radius: 14px;
    border: none;
    color: #ffffff;
    background: linear-gradient(135deg, var(--blue), var(--violet));
    box-shadow: 0 12px 26px -16px rgba(0,0,0,0.6);
    text-shadow: none;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 28px -14px rgba(0,0,0,0.66);
      filter: saturate(115%);
    }
  }
`;

const StyledIconGrid = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: center;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 22px 26px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li { display: flex; flex-direction: column; align-items: center; gap: 8px; }

  .icon-btn {
    display: inline-flex; align-items:center; justify-content:center;
    width: 66px; height: 66px; border-radius: 16px; color:#fff; position:relative; overflow:hidden;
    background: linear-gradient(145deg, var(--blue), var(--violet));
    box-shadow: 0 12px 28px -16px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06) inset;
    transition: transform 230ms var(--easing), box-shadow 230ms var(--easing), filter 230ms var(--easing);
  }
  .icon-btn:before { content:''; position:absolute; inset:0; pointer-events:none; background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.25) 20%, transparent 40%); transform: translateX(-150%); transition: transform 500ms var(--easing); }
  .icon-btn:hover { transform: translateY(-4px); filter: saturate(118%); box-shadow: 0 18px 32px -18px rgba(0,0,0,.68), 0 0 0 1px rgba(255,255,255,.08) inset; }
  .icon-btn:hover:before { transform: translateX(150%); }

  /* brand accents */
  .icon-btn[aria-label="WhatsApp"] { background: linear-gradient(145deg,#25D366,#128C7E); }
  .icon-btn[aria-label="GitHub"] { background: linear-gradient(145deg,#6bd1ff,#a986ff); }
  .icon-btn[aria-label="LinkedIn"] { background: linear-gradient(145deg,#0A66C2,#4b7bd9); }
  .icon-btn[aria-label="Email"] { background: linear-gradient(145deg,#ea4335,#34a853); }
  .icon-btn[aria-label="Call"] { background: linear-gradient(145deg,#ff77cf,#6bd1ff); }

  .label { color: var(--light-slate); font-family: var(--font-mono); font-size: var(--fz-xs); }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">Let’s Connect</h2>

      <h2 className="title">Let’s Build Something Amazing Together</h2>

      <p>
        I’m actively seeking internship opportunities and collaborations in software engineering and
        DevOps. Whether you have an opportunity, want to discuss technology, or just want to connect,
        I’d love to hear from you!
      </p>

      <StyledIconGrid>
        <ul>
          <li>
            <a className="icon-btn" href={`mailto:${email}`} aria-label="Email">
              <Icon name="Mail" />
            </a>
            <span className="label">Email</span>
          </li>
          <li>
            <a className="icon-btn" href="tel:+94764220899" aria-label="Call">
              <Icon name="Phone" />
            </a>
            <span className="label">Call</span>
          </li>
          <li>
            <a className="icon-btn" href="https://wa.me/94764220899" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icon name="Whatsapp" />
            </a>
            <span className="label">WhatsApp</span>
          </li>
          <li>
            <a className="icon-btn" href="https://github.com/SachinthaDaham" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="GitHub" />
            </a>
            <span className="label">GitHub</span>
          </li>
          <li>
            <a className="icon-btn" href="https://www.linkedin.com/in/daham-sachintha" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="Linkedin" />
            </a>
            <span className="label">LinkedIn</span>
          </li>
        </ul>
      </StyledIconGrid>
    </StyledContactSection>
  );
};

export default Contact;
