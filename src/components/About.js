import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './About.css';

export default function About() {
  return (
    <section className="cv-section" id="about">
      <h2 className="cv-section__title">
       <FontAwesomeIcon icon={faUser} className="icon-gray" />
        Acerca de mí
      </h2>
      <p className="cv-section__body">
        Soy una profesional del desarrollo con una sólida base en ingeniería y experiencia en entornos digitales. 
        Me apasiona crear soluciones que no solo funcionen bien, sino que generen una experiencia positiva para las personas que las usan. 
        Me caracterizo por la curiosidad constante, el trabajo colaborativo, y una mentalidad de mejora continua. 
        Busco aportar en equipos que valoren el diseño con propósito, la eficiencia, y el impacto real en los proyectos.
      </p>
    </section>
  );
}
