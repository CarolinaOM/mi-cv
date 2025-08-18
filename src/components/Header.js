import './Header.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <h1>Carolina Ordoñez</h1>
        <h2>Desarrolladora Frontend</h2>
      </div>

      <div className="header-right">
        <p>
          <FaEnvelope className="icon email" />
          carolinaisabelom@gmail.com
        </p>
        <p>
          <FaMapMarkerAlt className="icon location" />
          Tenerife, España
        </p>
        <p>
          <FaLinkedin className="icon linkedin" />
          <a
            href="https://www.linkedin.com/in/carolina-ordo%C3%B1ez-morales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <FaGithub className="icon github" />
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
