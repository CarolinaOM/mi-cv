import { User } from 'lucide-react';
import './About.css';

export default function About({ language }) {
  const content = {
    es: {
      title: 'Acerca de mí',
      description: `Soy una profesional del desarrollo con una sólida base en ingeniería y experiencia en entornos digitales. 
      Me apasiona crear soluciones que no solo funcionen bien, sino que generen una experiencia positiva para las personas que las usan. 
      Me caracterizo por la curiosidad constante, el trabajo colaborativo, y una mentalidad de mejora continua. 
      Busco aportar en equipos que valoren el diseño con propósito, la eficiencia, y el impacto real en los proyectos.`,
    },
    en: {
      title: 'About Me',
      description: `I’m a development professional with a strong engineering background and experience in digital environments. 
      I’m passionate about creating solutions that not only work well but also deliver a positive experience for the people who use them. 
      I’m known for constant curiosity, collaborative work, and a mindset of continuous improvement. 
      I aim to contribute to teams that value purposeful design, efficiency, and real impact in their projects.`,
    },
  };

  return (
    <section className="cv-section" id="about"> 
      {/* ✅ Cambiado el className para que use solo section-title */}
      <h2 className="section-title">
        <User className="icon-gray" />
        {content[language].title}
      </h2>
      <p className="section-body about-body">
        {content[language].description}
      </p>
    </section>
  );
}