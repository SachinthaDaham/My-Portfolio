import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 24px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.glassCard};
    position: relative;
    height: 100%;
    padding: 1.5rem 1.5rem;
    border-radius: 18px;
    background-image: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
    &:before {
      content: '';
      position: absolute; inset: 0; pointer-events: none;
      background: linear-gradient(90deg, var(--scan-accent), transparent 20%, transparent 80%, var(--scan-accent));
      opacity: 0; transition: opacity 260ms var(--easing);
    }
    &:hover:before { opacity: .7; }
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

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
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

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

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/SachinthaDaham/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then(json => {
        const data = Array.isArray(json) ? json : [];
        const filtered = data.filter(r => !r.fork && !r.archived);
        setRepos(filtered);
      })
      .catch(() => setRepos([]));
  }, []);
  const firstSix = repos.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? repos : firstSix;

  const projectInner = repo => {
    const github = repo.html_url;
    const external = repo.homepage;
    const title = repo.name;
    const tech = [repo.language].filter(Boolean);

    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>
            <div className="project-links">
              {github && (
                <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a href={external} aria-label="External Link" className="external" target="_blank" rel="noreferrer">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <span>{title}</span>
          </h3>

          <div className="project-description">
            <p>{repo.description || 'No description provided.'}</p>
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>My Projects</h2>

      

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((repo, i) => (
                <StyledProject key={repo.id || i}>{projectInner(repo)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map((repo, i) => (
                <CSSTransition
                  key={repo.id || i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={repo.id || i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {projectInner(repo)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
