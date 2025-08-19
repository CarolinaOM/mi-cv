import { User } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="cv-section about-section" id="about">
      <h2 className="section-title about-title">
        <User className="icon-gray" />
        Acerca de mí
      </h2>
      <p className="section-body about-body">
        Soy una profesional del desarrollo con una sólida base en ingeniería y experiencia en entornos digitales. 
        Me apasiona crear soluciones que no solo funcionen bien, sino que generen una experiencia positiva para las personas que las usan. 
        Me caracterizo por la curiosidad constante, el trabajo colaborativo, y una mentalidad de mejora continua. 
        Busco aportar en equipos que valoren el diseño con propósito, la eficiencia, y el impacto real en los proyectos.
      </p>
    </section>
  );
}