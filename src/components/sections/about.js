import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { keyframes } from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper { display:block; position:relative; width:100%; }
  .wrapper .img { border-radius: 50%; filter:none; mix-blend-mode: normal; }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'System Design',
    'Algorithms & Data Structures',
    'Object‑Oriented Design',
    'Software Architecture',
    'React & Next.js',
    'TypeScript & Tailwind CSS',
    'Java & Python & Node.js',
    'PostgreSQL',
    'Docker & Kubernetes',
    'CI/CD (GitHub Actions)',
    'AWS',
    'Git & Linux',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I’m Sachintha Daham Sankalpa, a final‑year Software Engineering undergraduate
              at SLIIT. I believe in the power of technology to solve real‑world problems and create
              meaningful impact. My journey began with self‑study in 2019, grew through structured
              learning and projects, and is now focused on building reliable, well‑architected
              systems.
            </p>

            <p>
              I value clarity, craftsmanship, and continuous learning—and I’m actively seeking an
              internship to learn, contribute, and grow.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper" style={{background:'transparent', padding:0}}>
            <img className="img" src="/profile.jpg" alt="Daham headshot" style={{filter:'none', mixBlendMode:'normal', borderRadius:'50%'}} />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
