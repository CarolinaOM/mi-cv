import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faLaptopCode,
  faDatabase,
  faTools,
  faPalette,
  faTerminal,
  faServer,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

export default function Skills() {
  return (
    <section className="cv-section" id="skills">
      <h2 className="cv-section__title">
        <FontAwesomeIcon icon={faTools} className="icon-skills" />
        Habilidades
      </h2>
      <div className="cv-section__body">
        <ul className="skills-list">
          <li><FontAwesomeIcon icon={faCode} /> <strong>Lenguajes:</strong> JavaScript, HTML, CSS, PHP, Java, Flutter</li>
          <li><FontAwesomeIcon icon={faLaptopCode} /> <strong>Frameworks:</strong> Vue.js, Node.js, WordPress, React</li>
          <li><FontAwesomeIcon icon={faDatabase} /> <strong>Bases de datos:</strong> SQL, Access</li>
          <li><FontAwesomeIcon icon={faPalette} /> <strong>Herramientas:</strong> Git, Canva</li>
          <li><FontAwesomeIcon icon={faDesktop} /> <strong>Sistemas operativos:</strong> Windows, Linux</li>
        </ul>
      </div>
    </section>
  );
}

