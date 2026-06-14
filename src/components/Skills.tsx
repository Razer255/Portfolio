import React from 'react';
import { Database, Shield, Server, Terminal, Code2 } from 'lucide-react';

// Custom inline SVGs for all technical skills, styled uniformly
const SKILL_ICONS: Record<string, React.ReactNode> = {
  'Python': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M14.25.18c.9 0 1.66.76 1.66 1.66v1.67h-3.34c-1.8 0-3.27 1.46-3.27 3.26v.84H7.58c-.9 0-1.66.76-1.66 1.66v5.82c0 .9.76 1.66 1.66 1.66h1.67v-3.34c0-1.8 1.46-3.27 3.27-3.27h3.33v-.83c0-.9-.76-1.66-1.66-1.66H8.42c-.9 0-1.67-.76-1.67-1.66V1.84c0-.9.76-1.66 1.67-1.66h5.83zm-1.67 2.5a.83.83 0 1 1 0 1.67.83.83 0 0 1 0-1.67zM9.75 23.82c-.9 0-1.66-.76-1.66-1.66v-1.67h3.34c1.8 0 3.27-1.46 3.27-3.26v-.84h1.72c.9 0 1.66-.76 1.66-1.66v-5.82c0-.9-.76-1.66-1.66-1.66h-1.67v3.34c0 1.8-1.46 3.27-3.27 3.27H8.15v.83c0 .9.76 1.66 1.66 1.66h5.83c.9 0 1.66.76 1.66 1.66v4.18c0 .9-.76 1.66-1.66 1.66H9.75zm1.67-2.5a.83.83 0 1 1 0-1.67.83.83 0 0 1 0 1.67z"/>
    </svg>
  ),
  'FastAPI': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0L2.4 13.2h8.4L8.4 24 18 10.8h-8.4L12 0z"/>
    </svg>
  ),
  'Flask': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2h4M12 2v6M9 8h6M19 17.5a6.5 6.5 0 0 1-5 6h-4a6.5 6.5 0 0 1-5-6V8h14v9.5z"/>
    </svg>
  ),
  'REST API Design': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="3" width="6" height="6" rx="1" />
      <rect x="16" y="15" width="6" height="6" rx="1" />
      <rect x="2" y="9" width="6" height="6" rx="1" />
      <path d="M8 12h8M16 6h-4v6M16 18h-4v-6" />
    </svg>
  ),
  'API Testing': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  'MySQL': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
    </svg>
  ),
  'MongoDB': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M5 12a7 7 0 0 0 14 0" />
      <path d="M12 2C8 6 6 10 6 12s2 6 6 10c4-4 6-8 6-10s-2-6-6-10z" />
    </svg>
  ),
  'Query Optimization': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="m16 10-4 4-2-2"/>
      <path d="M12 6V2M12 22v-4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  'Database Design': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="6" rx="1"/>
      <rect x="3" y="15" width="18" height="6" rx="1"/>
      <path d="M12 9v6M7 9v6M17 9v6"/>
    </svg>
  ),
  'Performance Tuning': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  'Secure Coding': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  'Input Validation': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="M7 12h10M7 9h4M7 15h6" />
    </svg>
  ),
  'OWASP Top 10': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M12 8v4M12 16h.01"/>
    </svg>
  ),
  'Role-Based Access (RBAC)': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 11h-4M20 9v4"/>
    </svg>
  ),
  'Wazuh SIEM / EDR': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M12 8v4M8 12h8"/>
    </svg>
  ),
  'VAPT (Pen Testing)': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  'Threat Monitoring': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  'Network Auditing': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <path d="m9 10.5 6-3.5M9 13.5l6 3.5"/>
    </svg>
  ),
  'Docker': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10" width="4" height="4" rx="1"/>
      <rect x="8" y="10" width="4" height="4" rx="1"/>
      <rect x="14" y="10" width="4" height="4" rx="1"/>
      <rect x="8" y="4" width="4" height="4" rx="1"/>
      <path d="M22 15a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1h20v1z"/>
    </svg>
  ),
  'CI/CD Concepts': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8c0 4.4-3.6 8-8 8a8 8 0 0 1-8-8z"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
    </svg>
  ),
  'Git & GitHub': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3"/>
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <path d="M6 9v6M9 9l9 6"/>
    </svg>
  ),
  'Linux System Admin': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6M3 10h18"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.268c-.156-.818-.834-1.48-2.03-1.885-.75-.256-1.57-.428-1.57-.96 0-.294.27-.518.73-.518.518 0 .894.228 1.138.694.086.166.244.272.43.272h1.616c.196 0 .344-.194.282-.382a4.428 4.428 0 0 0-3.51-3.086v-1.636c0-.204-.166-.37-.37-.37h-1.12c-.204 0-.37.166-.37.37v1.66c-1.84.282-3.13 1.488-3.13 3.336 0 2.222 1.95 2.87 3.596 3.29 1.096.282 1.906.502 1.906 1.128 0 .43-.4.63-.974.63-.804 0-1.284-.402-1.514-.984a.365.365 0 0 0-.342-.234h-1.674a.375.375 0 0 0-.368.46c.556 1.764 2.112 2.862 4.372 2.862 2.378 0 3.864-1.18 3.864-3.328v-.002z"/>
    </svg>
  ),
  'SQL': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  'Bash Scripting': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17l5-5-5-5M12 19h7"/>
    </svg>
  )
};

const DEFAULT_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v8M8 12h8"/>
  </svg>
);

export function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server className="skill-icon-style cyan" size={24} />,
      colorClass: 'cyan-theme',
      skills: [
        { name: 'Python' },
        { name: 'FastAPI' },
        { name: 'Flask' },
        { name: 'REST API Design' },
        { name: 'API Testing' }
      ]
    },
    {
      title: 'Database Management',
      icon: <Database className="skill-icon-style purple" size={24} />,
      colorClass: 'purple-theme',
      skills: [
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'Query Optimization' },
        { name: 'Database Design' },
        { name: 'Performance Tuning' }
      ]
    },
    {
      title: 'Cybersecurity & VAPT',
      icon: <Shield className="skill-icon-style green" size={24} />,
      colorClass: 'green-theme',
      skills: [
        { name: 'Secure Coding' },
        { name: 'Input Validation' },
        { name: 'Wazuh SIEM / EDR' },
        { name: 'VAPT (Pen Testing)' },
        { name: 'Threat Monitoring' },
        { name: 'Network Auditing' },
        { name: 'OWASP Top 10' },
        { name: 'Role-Based Access (RBAC)' }
      ]
    },
    {
      title: 'DevOps & Tooling',
      icon: <Terminal className="skill-icon-style cyan" size={24} />,
      colorClass: 'cyan-theme',
      skills: [
        { name: 'Docker' },
        { name: 'CI/CD Concepts' },
        { name: 'Git & GitHub' },
        { name: 'Linux System Admin' }
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: <Code2 className="skill-icon-style purple" size={24} />,
      colorClass: 'purple-theme',
      skills: [
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'SQL' },
        { name: 'Bash Scripting' }
      ]
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className={`cyber-card skill-category-card ${category.colorClass}`}>
            <div className="category-header">
              {category.icon}
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="glow-divider" style={{ margin: '1rem 0' }}></div>

            <div className="skills-tag-container">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-tag-chip">
                  <span className="skill-tag-icon">
                    {SKILL_ICONS[skill.name] || DEFAULT_ICON}
                  </span>
                  <span className="skill-tag-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
          text-align: left;
        }
        .skill-category-card {
          display: flex;
          flex-direction: column;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .skill-icon-style {
          filter: drop-shadow(0 0 5px currentColor);
        }
        .skill-icon-style.cyan { color: var(--accent-cyan); }
        .skill-icon-style.purple { color: #bc34fa; }
        .skill-icon-style.green { color: var(--accent-green); }
        .category-title {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .skills-tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .skill-tag-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.85rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          font-family: var(--font-mono);
          font-size: 0.825rem;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }
        
        /* Interactive dynamic hover effects matching category theme colors */
        .cyan-theme .skill-tag-chip:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: var(--accent-cyan-glow);
          box-shadow: 0 0 10px var(--accent-cyan-glow);
          transform: translateY(-2px);
        }
        .purple-theme .skill-tag-chip:hover {
          color: #bc34fa;
          border-color: #bc34fa;
          background: var(--accent-purple-glow);
          box-shadow: 0 0 10px var(--accent-purple-glow);
          transform: translateY(-2px);
        }
        .green-theme .skill-tag-chip:hover {
          color: var(--accent-green);
          border-color: var(--accent-green);
          background: var(--accent-green-glow);
          box-shadow: 0 0 10px var(--accent-green-glow);
          transform: translateY(-2px);
        }

        .skill-tag-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: inherit;
        }
        .skill-tag-name {
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
export default Skills;
