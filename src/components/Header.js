import './Header.css';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <h1>Carolina Ordoñez</h1>
        <h2>Desarrolladora Frontend</h2>
      </div>

      <div className="header-right">
        <p>
          <Mail className="icon email" />
          carolinaisabelom@gmail.com
        </p>
        <p>
          <MapPin className="icon location" />
          Tenerife, España
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
      </div>
    </header>
  );
}

export default Header;