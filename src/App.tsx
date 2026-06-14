import { Header } from './components/Header';
import { TerminalIntro } from './components/TerminalIntro';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CertsAchievements } from './components/CertsAchievements';
import { Contact } from './components/Contact';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Heart } from 'lucide-react';

function App() {
  return (
    <>
      {/* 3D Background Canvas Layer */}
      <ThreeCanvas />

      {/* Navigation Header */}
      <Header />

      {/* Main Layout Layer */}
      <main className="layout-content">
        {/* Intro Hero Section */}
        <TerminalIntro />
        
        <div className="glow-divider"></div>

        {/* Experience Section */}
        <Experience />
        
        <div className="glow-divider"></div>

        {/* Skills Section */}
        <Skills />
        
        <div className="glow-divider"></div>

        {/* Projects Section */}
        <Projects />
        
        <div className="glow-divider"></div>

        {/* Certifications and Achievements Section */}
        <CertsAchievements />
        
        <div className="glow-divider"></div>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="portfolio-footer">
          <div className="glow-divider" style={{ margin: '2rem 0 1rem' }}></div>
          <div className="footer-content">
            <p className="footer-text">
              Designed & Developed by <span className="gradient-text font-bold">Rishipal Ghosh</span>
            </p>
            <p className="footer-credits">
              Powered by React, Three.js &amp; Vite. Secured by Code Standards. 
              <Heart size={10} className="heart-icon" /> 2026
            </p>
          </div>
        </footer>
      </main>

      <style>{`
        .font-bold {
          font-weight: 700;
        }
        .portfolio-footer {
          padding-bottom: 2rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }
        .footer-text {
          color: var(--text-secondary);
        }
        .heart-icon {
          display: inline-block;
          color: #ff3366;
          margin: 0 2px;
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </>
  );
}

export default App;
