import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // para Educación
import './Education.css';

export default function Education() {
  return (
    <section className="cv-section" id="education">
      <h2 className="cv-section__title">
        <FontAwesomeIcon icon={faGraduationCap} className="icon-blue" />
        Educación
      </h2>
      <p className="cv-section__body">
        Ingeniería de Sistemas (2016) — Homologado a Grado en Tecnologías de la Información y la Comunicación
      </p>
    </section>
  );
}

