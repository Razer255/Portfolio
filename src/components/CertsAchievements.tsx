import { Trophy, Award, ShieldAlert, CheckCircle } from 'lucide-react';

export function CertsAchievements() {
  const certifications = [
    { name: 'Mastercard Cybersecurity Job Simulation', issuer: 'Mastercard via Forage' },
    { name: 'REST API Development with FastAPI', issuer: 'freeCodeCamp' },
    { name: 'Python Essentials 1 & 2', issuer: 'Cisco Networking Academy' },
    { name: 'Machine Learning with Python', issuer: 'IBM SkillsBuild' },
    { name: 'Cisco Ethical Hacker', issuer: 'Cisco Networking Academy' },
    { name: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy' }
  ];

  return (
    <section id="certs">
      <h2 className="section-title">Certifications & Achievements</h2>
      
      {/* Achievements Spotlight Banner */}
      <div className="achievements-spotlight-container">
        <div className="cyber-card ctf-spotlight-card">
          <div className="card-glitch-layer"></div>
          <div className="spotlight-content">
            <div className="trophy-container">
              <Trophy className="trophy-icon" size={48} />
              <div className="trophy-ring"></div>
            </div>
            <div className="spotlight-text">
              <div className="spotlight-badge">
                <ShieldAlert size={12} />
                <span>NATIONWIDE COMPETITION</span>
              </div>
              <h3 className="spotlight-title">Hicathon Capture The Flag (CTF)</h3>
              <p className="spotlight-rank">Rank: <span className="gradient-text glowing-text">7th Nationwide</span></p>
              <p className="spotlight-desc">
                Demonstrated strong analytical, problem-solving, and technical debugging skills under competitive, time-critical security scenarios—directly applicable to backend security audits and secure API operations.
              </p>
            </div>
          </div>
        </div>

        <div className="cyber-card internships-summary-card">
          <div className="internships-header">
            <Award className="award-icon" size={36} />
            <h3 className="internships-title">Internship Credentials</h3>
          </div>
          <div className="internships-count">
            <span className="count-num gradient-text">4</span>
            <span className="count-text">Completed<br />Programs</span>
          </div>
          <p className="internships-desc">
            Successfully completed internships spanning Cybersecurity, Python development, Web services, and Software Engineering. Proved adaptive learning and rapid execution.
          </p>
        </div>
      </div>

      <div className="glow-divider" style={{ margin: '3rem 0' }}></div>

      {/* Certifications Grid */}
      <h3 className="certs-section-subtitle">Verified Credentials</h3>
      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cyber-card cert-card">
            <CheckCircle className="cert-check-icon" size={20} />
            <div className="cert-info">
              <h4 className="cert-name">{cert.name}</h4>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
            <div className="cert-border-glow"></div>
          </div>
        ))}
      </div>

      <style>{`
        .certs-section-subtitle {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: left;
          color: var(--text-primary);
        }
        .achievements-spotlight-container {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 2rem;
          text-align: left;
        }
        .ctf-spotlight-card {
          border-color: rgba(57, 255, 20, 0.25) !important;
          box-shadow: 0 10px 30px rgba(57, 255, 20, 0.05) !important;
        }
        .ctf-spotlight-card:hover {
          border-color: var(--accent-green) !important;
          box-shadow: 0 15px 35px rgba(57, 255, 20, 0.15), 0 0 10px rgba(57, 255, 20, 0.1) !important;
        }
        .spotlight-content {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .trophy-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 90px;
          height: 90px;
        }
        .trophy-icon {
          color: var(--accent-green);
          filter: drop-shadow(0 0 12px rgba(57, 255, 20, 0.6));
          z-index: 2;
        }
        .trophy-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(57, 255, 20, 0.4);
          border-radius: 50%;
          animation: spin 10s linear infinite;
        }
        .spotlight-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(57, 255, 20, 0.05);
          border: 1px solid rgba(57, 255, 20, 0.2);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--accent-green);
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }
        .spotlight-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .spotlight-rank {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .spotlight-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .internships-summary-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-color: rgba(189, 0, 255, 0.2) !important;
        }
        .internships-summary-card:hover {
          border-color: var(--accent-purple) !important;
          box-shadow: 0 15px 35px rgba(189, 0, 255, 0.15) !important;
        }
        .internships-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .award-icon {
          color: var(--accent-purple);
          filter: drop-shadow(0 0 5px rgba(189, 0, 255, 0.4));
        }
        .internships-title {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .internships-count {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 1rem 0;
        }
        .count-num {
          font-size: 3rem;
          font-family: var(--font-heading);
          font-weight: 800;
          line-height: 1;
        }
        .count-text {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.3;
          text-transform: uppercase;
        }
        .internships-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        /* Certifications grid */
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          text-align: left;
        }
        .cert-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          height: 100%;
        }
        .cert-check-icon {
          color: var(--accent-cyan);
          margin-top: 0.15rem;
          flex-shrink: 0;
          filter: drop-shadow(0 0 3px rgba(0, 240, 255, 0.4));
        }
        .cert-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .cert-name {
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.3;
          color: var(--text-primary);
        }
        .cert-issuer {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 850px) {
          .achievements-spotlight-container {
            grid-template-columns: 1fr;
          }
          .spotlight-content {
            flex-direction: column;
            text-align: center;
          }
          .spotlight-badge {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
export default CertsAchievements;
