import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'BrainUpKids',
      period: '2026 – Present',
      location: 'Pune, India',
      highlights: [
        'Developing and maintaining backend applications and APIs for an EdTech platform serving young learners.',
        'Working on database management, query optimization, and performance tuning to ensure reliable and fast application responses.',
        'Collaborating with frontend developers and cross-functional teams for smooth API integration and feature delivery.',
        'Writing clean, scalable, and well-documented code following established coding standards and best practices.'
      ],
      tags: ['FastAPI', 'Python', 'EdTech', 'SQL Optimization', 'API Integration']
    },
    {
      role: 'Web Development Intern',
      company: 'SpareXpert',
      period: 'June 2025 – August 2025',
      location: 'Bhopal, India',
      highlights: [
        'Developed and tested secure REST APIs and backend services with authentication and role-based access control (RBAC).',
        'Managed database design, query optimization, and performance improvements using MySQL and MongoDB to enhance application reliability.',
        'Applied secure coding standards to mitigate SQL injection and XSS vulnerabilities, ensuring application security and reliability.',
        'Assisted in deployment workflows and CI/CD integration, participating in code reviews and maintaining well-documented codebases.'
      ],
      tags: ['Flask', 'MySQL', 'MongoDB', 'App Security', 'RBAC', 'REST APIs']
    },
    {
      role: 'Python Programming Intern',
      company: 'YBI Foundation',
      period: 'June 2024 – August 2024',
      location: 'Remote',
      highlights: [
        'Built Python automation tools and backend scripts for data processing, workflow optimization, and task automation.',
        'Gained practical exposure to AI, Machine Learning, and cybersecurity tools under professional mentorship.',
        'Followed clean-code principles and structured documentation standards, producing maintainable and reusable code modules.'
      ],
      tags: ['Python', 'Automation Scripts', 'AI/ML Basic', 'Clean Code']
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline-container">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            {/* Timeline Marker */}
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              {idx !== experiences.length - 1 && <div className="timeline-line"></div>}
            </div>

            {/* Experience Card */}
            <div className="timeline-content cyber-card">
              <div className="timeline-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <h4 className="experience-company gradient-text">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <Briefcase size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="glow-divider"></div>

              <ul className="highlights-list">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="highlight-bullet">
                    <ChevronRight size={14} className="bullet-arrow" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="experience-tags">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`cyber-badge ${idx === 0 ? '' : idx === 1 ? 'cyber-badge-purple' : 'cyber-badge-green'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          text-align: left;
        }
        .timeline-item {
          display: flex;
          gap: 2rem;
        }
        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20px;
          flex-shrink: 0;
          padding-top: 0.75rem;
        }
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan), 0 0 20px var(--accent-cyan);
          z-index: 2;
        }
        .timeline-line {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple));
          margin: 0.5rem 0;
          opacity: 0.3;
        }
        .timeline-content {
          flex-grow: 1;
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .experience-role {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .experience-company {
          font-size: 1.1rem;
          font-family: var(--font-mono);
          font-weight: 600;
          margin-top: 0.25rem;
        }
        .experience-meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .highlight-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.5;
          font-size: 0.925rem;
        }
        .bullet-arrow {
          color: var(--accent-cyan);
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        .experience-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        @media (max-width: 768px) {
          .timeline-header {
            flex-direction: column;
          }
          .experience-meta {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
export default Experience;
