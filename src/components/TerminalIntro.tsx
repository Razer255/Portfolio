import { useEffect, useState } from 'react';
import { Terminal, Shield, Cpu, ChevronRight } from 'lucide-react';

export function TerminalIntro() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);

  const logs = [
    'Initializing secure handshake protocol...',
    'Establishing encrypted bridge to rishipal.sec... [SUCCESS]',
    'Fetching credentials from local db...',
    '>> NAME: Rishipal Ghosh',
    '>> MAJOR: B.Tech in Cyber Security (CGPA: 8.34/10.0)',
    '>> FOCUS: Secure REST APIs, Cyber Reconnaissance, AI Automation',
    '>> TARGET: Junior Backend Developer / AppSec Role',
    '>> STATUS: Seeking opportunities for 2026 graduation',
    'Decrypting contact channels... found (rishipal123ghosh@gmail.com)',
    'System ready. Access granted.'
  ];

  useEffect(() => {
    if (currentLineIdx < logs.length) {
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [...prev, logs[currentLineIdx]]);
        setCurrentLineIdx((prev) => prev + 1);
      }, 700 + Math.random() * 600); // realistic variance in typing speeds
      return () => clearTimeout(timeout);
    }
  }, [currentLineIdx]);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = './Rishipal_Ghosh_Resume.pdf';
    link.download = 'Rishipal_Ghosh_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-text-container">
          <div className="terminal-header-accent">
            <Shield size={16} className="shield-icon" />
            <span>SECURE HOST CONNECTED</span>
          </div>
          <h1 className="hero-title">
            Securing the Backend,<br />
            <span className="gradient-text">Architecting the Core</span>
          </h1>
          <p className="hero-subtitle">
            I'm a Cybersecurity undergraduate and Backend Engineer specializing in building secure, high-performance REST APIs, Python automations, and scalable databases.
          </p>
          <div className="hero-ctas">
            <button onClick={handleScrollToProjects} className="btn-primary">
              Explore Projects <Cpu size={18} />
            </button>
            <button onClick={handleDownloadResume} className="btn-secondary">
              Get Resume <Terminal size={18} />
            </button>
          </div>
        </div>

        {/* Cyber Terminal UI */}
        <div className="terminal-window cyber-card">
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="terminal-title">guest@rishipal.sec:~</span>
          </div>
          <div className="terminal-body">
            {terminalLines.map((line, idx) => (
              <div key={idx} className={`terminal-line ${line.startsWith('>>') ? 'highlight-line' : ''}`}>
                <ChevronRight size={14} className="terminal-arrow" />
                <span>{line}</span>
              </div>
            ))}
            {currentLineIdx < logs.length && (
              <div className="terminal-line typing">
                <ChevronRight size={14} className="terminal-arrow" />
                <span className="cursor-blink">▋</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-ctas {
            justify-content: center;
          }
          .terminal-window {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }
        .terminal-header-accent {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 20px;
          padding: 0.35rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 5px rgba(0, 240, 255, 0.2);
        }
        .shield-icon {
          color: var(--accent-cyan);
          animation: pulse 2s infinite;
        }
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }
        .gradient-text {
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
        }
        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        .hero-ctas {
          display: flex;
          gap: 1.25rem;
        }
        /* Terminal Styling */
        .terminal-window {
          font-family: var(--font-mono);
          padding: 0 !important;
          border-radius: 12px;
          background: rgba(10, 11, 16, 0.8) !important;
          border-color: rgba(255, 255, 255, 0.07) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6) !important;
          height: 380px;
          display: flex;
          flex-direction: column;
        }
        .terminal-bar {
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          position: relative;
        }
        .terminal-dots {
          display: flex;
          gap: 0.5rem;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }
        .terminal-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .terminal-body {
          padding: 1.25rem;
          font-size: 0.8rem;
          line-height: 1.6;
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }
        .terminal-line {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: var(--text-secondary);
        }
        .terminal-arrow {
          color: var(--accent-cyan);
          margin-top: 0.15rem;
          flex-shrink: 0;
        }
        .highlight-line {
          color: var(--accent-cyan);
          text-shadow: 0 0 5px rgba(0, 240, 255, 0.3);
        }
        .typing {
          color: var(--accent-cyan);
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
export default TerminalIntro;
