import React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
  max-width: 1000px;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
    margin-top: 24px;
  }

  .card {
    padding: 18px 16px;
    border-radius: 16px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px) saturate(110%);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: var(--lightest-slate);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  li {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--lightest-slate);
    padding: 6px 10px;
    border-radius: 999px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
  }
`;

const Skills = () => {
  const languages = [
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'C',
    'C#',
    'Go (basics)',
    'SQL',
  ];
  const tools = [
    'Git',
    'Linux',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS',
    'Nginx',
    'GitHub Actions',
    'Jest',
  ];
  const software = [
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'ASP.NET (basics)',
    'Tailwind CSS',
    'Prisma/ORMs',
    'Microservices',
    'CI/CD',
    'System Design',
  ];

  return (
    <Wrap id="skills">
      <h2 className="numbered-heading">Skills</h2>
      <div className="grid">
        <div className="card">
          <h3>Languages</h3>
          <ul>
            {languages.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Tools & Platforms</h3>
          <ul>
            {tools.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Frameworks & Focus</h3>
          <ul>
            {software.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </Wrap>
  );
};

export default Skills;


