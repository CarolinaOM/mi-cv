import './Header.css';
import { Mail, MapPin, Linkedin, Github, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

function Header({ language, onLanguageChange }) {
  return (
    <header className="header-container">
      <div className="header-left">
        <h1>Carolina Ordoñez</h1>
        <h2>{language === 'es' ? 'Desarrolladora Frontend' : 'Frontend Developer'}</h2>
      </div>

      <div className="header-right">
        <div className="language-wrapper">
          <LanguageToggle onLanguageChange={onLanguageChange} language={language} />
        </div>
        <p>
          <Mail className="icon email" />
          carolinaisabelom@gmail.com
        </p>
        <p>
          <MapPin className="icon location" />
          {language === 'es' ? 'Tenerife, España' : 'Tenerife, Spain'}
        </p>
        <p>
          <Linkedin className="icon linkedin" />
          <a
            href="https://www.linkedin.com/in/carolina-ordo%C3%B1ez-morales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <Github className="icon github" />
          <a
            href="https://github.com/CarolinaOM"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <X className="icon x-icon" />
          <a
            href="https://x.com/CarolinaIsa13"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;