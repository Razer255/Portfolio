import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, FileText, CheckCircle2 } from 'lucide-react';

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


export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [consoleLog, setConsoleLog] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setConsoleLog(['Verifying contact payload...', 'Applying TLS encryption... [OK]']);

    // Simulate submission progress
    setTimeout(() => {
      setConsoleLog((prev) => [...prev, 'Routing package to rishipal123ghosh@gmail.com... [CONNECTED]']);
    }, 800);

    setTimeout(() => {
      setConsoleLog((prev) => [...prev, 'Transmission successful. Connection closed.']);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = './Rishipal_Ghosh_Resume.pdf';
    link.download = 'Rishipal_Ghosh_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" style={{ minHeight: 'calc(100vh - 100px)' }}>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info-col">
          <h3 className="info-title">Let's Connect</h3>
          <p className="info-desc">
            Whether you want to discuss a junior backend developer opening, security assessment collaboration, or just talk tech, feel free to reach out.
          </p>

          <div className="info-details">
            <div className="info-detail-item">
              <Mail className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Email</span>
                <a href="mailto:rishipal123ghosh@gmail.com" className="detail-value">
                  rishipal123ghosh@gmail.com
                </a>
              </div>
            </div>

            <div className="info-detail-item">
              <Phone className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Phone</span>
                <a href="tel:+916001180775" className="detail-value">
                  +91-6001180775
                </a>
              </div>
            </div>

            <div className="info-detail-item">
              <MapPin className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div className="glow-divider"></div>

          <div className="resume-section">
            <p className="resume-prompt">Need a physical copy of my credentials?</p>
            <button onClick={handleDownloadResume} className="btn-secondary resume-download-btn">
              <FileText size={18} />
              <span>Download Resume PDF</span>
            </button>
          </div>

          <div className="contact-social-bar">
            <a href="https://github.com/Razer255" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/rishipal-ghosh" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="cyber-card contact-form-card">
          {isSuccess ? (
            <div className="success-container">
              <CheckCircle2 size={64} className="success-icon" />
              <h3 className="success-title">Message Transmitted</h3>
              <p className="success-desc">
                Your message has been encrypted and sent to my inbox. I will get back to you as soon as possible.
              </p>
              <button onClick={() => setIsSuccess(false)} className="btn-secondary" style={{ marginTop: '1rem' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">IDENTIFIER / NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">SECURE ROUTE / EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">PAYLOAD / MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  placeholder="Enter your message..."
                  rows={5}
                  required
                ></textarea>
              </div>

              {isSubmitting && (
                <div className="form-console-logs">
                  {consoleLog.map((log, lIdx) => (
                    <div key={lIdx} className="console-line">
                      <span>&gt; {log}</span>
                    </div>
                  ))}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-primary form-submit-btn" 
                disabled={isSubmitting}
              >
                <span>TRANSMIT MESSAGE</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          text-align: left;
          margin-top: 1.5rem;
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
        }
        .info-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .info-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .info-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .detail-icon {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 4px rgba(0, 240, 255, 0.4));
          flex-shrink: 0;
        }
        .detail-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .detail-value {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-primary);
        }
        .resume-section {
          margin-bottom: 2rem;
        }
        .resume-prompt {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .resume-download-btn {
          width: 100%;
          justify-content: center;
        }
        .contact-social-bar {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }
        .social-icon-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem;
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }
        .social-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: var(--accent-cyan-glow);
          transform: translateY(-2px);
        }

        /* Form styling */
        .contact-form-card {
          padding: 2.5rem !important;
          background: rgba(10, 11, 16, 0.8) !important;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .form-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan-glow);
          background: rgba(0, 240, 255, 0.01);
        }
        .form-textarea {
          resize: vertical;
          font-family: var(--font-sans);
        }
        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 1rem;
        }
        .form-console-logs {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-radius: 6px;
          padding: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .console-line {
          animation: blink 1s infinite alternate;
        }

        /* Success screen */
        .success-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          gap: 1.25rem;
          padding: 2rem 0;
        }
        .success-icon {
          color: var(--accent-green);
          filter: drop-shadow(0 0 10px rgba(57, 255, 20, 0.4));
        }
        .success-title {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .success-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 350px;
          line-height: 1.6;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
export default Contact;
