import { FolderGit2, ExternalLink, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Fake Review Detection API',
      category: 'Backend & Machine Learning',
      status: 'OPERATIONAL',
      icon: <Cpu className="proj-icon cyan" size={24} />,
      desc: 'A robust REST API backend using FastAPI that integrates a machine learning model to verify review authenticity, supporting JWT authentication, structured logging, and audited records.',
      bullets: [
        'Designed scalable database schema in MongoDB with optimized query sets.',
        'Implemented clean, modular code architecture with unified error handling.',
        'Integrated ML inference pipeline as a backend microservice.'
      ],
      tech: ['FastAPI', 'Python', 'ML Integration', 'MongoDB', 'JWT Auth'],
      link: 'https://github.com/Razer255'
    },
    {
      title: 'Cybersecurity Reconnaissance Tool',
      category: 'Cyber Security & Automation',
      status: 'VERIFIED',
      icon: <ShieldCheck className="proj-icon green" size={24} />,
      desc: 'A modular, extensible command-line and scripting reconnaissance tool built in Python. Designed for automated intelligence gathering, vulnerability audits, and asset listing.',
      bullets: [
        'Developed automated multi-threaded collection and API scraping systems.',
        'Structured logging and auditing to ensure forensic reproducibility.',
        'High-performance data formatting with detailed scan reports.'
      ],
      tech: ['Python', 'Automation', 'Net Security', 'Regex Scrapers', 'JSON Audits'],
      link: 'https://github.com/Razer255'
    },
    {
      title: 'J.A.R.V.I.S – AI Automation System',
      category: 'AI & Backend Automation',
      status: 'ACTIVE',
      icon: <Terminal className="proj-icon purple" size={24} />,
      desc: 'A multi-API integrated automation layer designed for system orchestrations, automated email handling, task scheduling, and real-time execution flows.',
      bullets: [
        'Designed decoupled handler design patterns supporting multiple third-party API integrations.',
        'Robust operational reliability with automatic retries and logs.',
        'Custom command routing parsing user input into script operations.'
      ],
      tech: ['Python', 'API Integration', 'Task Schedulers', 'System Scripting'],
      link: 'https://github.com/Razer255'
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="cyber-card project-card">
            {/* Card Header decoration */}
            <div className="project-card-header">
              <span className="project-category">{proj.category}</span>
              <div className="project-status">
                <span className="status-dot"></span>
                <span className="status-text">{proj.status}</span>
              </div>
            </div>

            <div className="project-title-row">
              {proj.icon}
              <h3 className="project-title">{proj.title}</h3>
            </div>

            <p className="project-desc">{proj.desc}</p>

            <div className="glow-divider" style={{ margin: '1rem 0' }}></div>

            <ul className="project-bullets">
              {proj.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="project-bullet-item">
                  <span className="bullet-indicator">&gt;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="project-footer">
              <div className="tech-tags-list">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="project-tech-badge">{t}</span>
                ))}
              </div>

              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
                aria-label={`View ${proj.title} source on GitHub`}
              >
                <FolderGit2 size={16} />
                <span>CODE</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
          text-align: left;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }
        .project-category {
          color: var(--text-muted);
        }
        .project-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          box-shadow: 0 0 8px var(--accent-green);
        }
        .status-text {
          color: var(--accent-green);
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
        }
        .project-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .proj-icon {
          filter: drop-shadow(0 0 5px currentColor);
        }
        .proj-icon.cyan { color: var(--accent-cyan); }
        .proj-icon.green { color: var(--accent-green); }
        .proj-icon.purple { color: #bc34fa; }
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.2;
        }
        .project-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .project-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .project-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .bullet-indicator {
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-weight: 700;
        }
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1rem;
          margin-top: auto;
        }
        .tech-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .project-tech-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 240, 255, 0.2);
          background: rgba(0, 240, 255, 0.02);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .project-link-btn:hover {
          color: var(--bg-primary);
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
          transform: translateY(-2px);
        }
        @media (max-width: 480px) {
          .project-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .project-link-btn {
            align-self: flex-end;
          }
        }
      `}</style>
    </section>
  );
}
export default Projects;
