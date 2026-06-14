import { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);


export function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll depth for transparency toggling
      setIsScrolled(window.scrollY > 50);

      // Section tracker for active indicator
      const sections = ['home', 'experience', 'skills', 'projects', 'certs', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active if top of section is near top of screen
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certs', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand */}
        <div className="brand" onClick={() => handleLinkClick('home')}>
          <span className="brand-accent">&lt;</span>
          <span className="brand-name">Rishipal</span>
          <span className="brand-accent">.</span>
          <span className="brand-role">Sec</span>
          <span className="brand-accent"> /&gt;</span>
          <span className="cursor-blink">_</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/Razer255" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/rishipal-ghosh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:rishipal123ghosh@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <div className="mobile-socials">
            <a href="https://github.com/Razer255" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={22} />
            </a>
            <a href="https://linkedin.com/in/rishipal-ghosh" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={22} />
            </a>
            <a href="mailto:rishipal123ghosh@gmail.com">
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}

      {/* Styled JSX Elements since we use vanilla CSS for main styling, we keep inline CSS classes or styles minimal */}
      <style>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.3s ease;
          background: rgba(7, 8, 12, 0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-bottom: 1px solid transparent;
        }
        .header-container.scrolled {
          background: rgba(7, 8, 12, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        .brand {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.25rem;
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
        }
        .brand-name {
          color: var(--text-primary);
        }
        .brand-role {
          color: var(--accent-cyan);
        }
        .brand-accent {
          color: var(--text-muted);
        }
        .desktop-nav {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          padding: 0.25rem 0;
          transition: color 0.3s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-cyan);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
          transition: width 0.3s ease;
        }
        .nav-link.active::after, .nav-link:hover::after {
          width: 100%;
        }
        .social-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .social-links a {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          color: var(--accent-cyan);
          transform: translateY(-2px);
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .mobile-menu {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          height: calc(100vh - 70px);
          background: rgba(7, 8, 12, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          z-index: 99;
          animation: slideInDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--accent-cyan);
          text-shadow: 0 0 10px var(--accent-cyan-glow);
        }
        .mobile-socials {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        .mobile-socials a {
          color: var(--text-secondary);
        }
        .mobile-socials a:hover {
          color: var(--accent-cyan);
        }
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav, .social-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
export default Header;
