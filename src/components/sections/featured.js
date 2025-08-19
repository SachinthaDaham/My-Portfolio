import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 24px;

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: block;
  padding: 24px;
  border-radius: 18px;
  ${({ theme }) => theme.mixins.glassCard};
  ${({ theme }) => theme.mixins.hoverLift};

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 18px;
    ${({ theme }) => theme.mixins.glassCard};
    color: var(--light-slate);
    font-size: var(--fz-lg);
    &:before { content:''; position:absolute; inset:0; pointer-events:none; background: linear-gradient(90deg, var(--scan-accent), transparent 20%, transparent 80%, var(--scan-accent)); opacity:0; transition: opacity 260ms var(--easing);} 
    &:hover:before { opacity:.7; }

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;
      border-radius: 10px;
      transition: transform 200ms var(--easing), box-shadow 200ms var(--easing);
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 0 0 2px rgba(103,255,216,0.2), 0 12px 22px -12px rgba(0,0,0,0.6);
        color: var(--green);
      }

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

const Featured = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/SachinthaDaham/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then(json => {
        const data = Array.isArray(json) ? json : [];
        const wanted = ['prana', 'edu-hub', 'pethub'];
        let selected = data.filter(
          r => wanted.includes((r.name || '').toLowerCase()) && !r.fork && !r.archived,
        );
        if (selected.length === 0) {
          selected = data.filter(r => !r.fork && !r.archived).slice(0, 3);
        }
        setRepos(selected);
      })
      .catch(() => setRepos([]));
  }, []);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Featured Work
      </h2>

      <StyledProjectsGrid>
        {repos &&
          repos.map((repo, i) => (
            <StyledProject key={repo.id} ref={el => (revealProjects.current[i] = el)}>
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">
                    <span>{repo.name}</span>
                  </h3>
                  <div className="project-description">
                    <p>{repo.description || 'No description provided.'}</p>
                  </div>
                  <ul className="project-tech-list">
                    {repo.language && <li>{repo.language}</li>}
                    <li>Updated: {new Date(repo.updated_at).toLocaleDateString()}</li>
                  </ul>
                  <div className="project-links">
                    <a href={repo.html_url} aria-label="GitHub Link" className="external" target="_blank" rel="noreferrer">
                      <Icon name="GitHub" />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} aria-label="Live Demo" className="external" target="_blank" rel="noreferrer">
                        <Icon name="External" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </StyledProject>
          ))}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
