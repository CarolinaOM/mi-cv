import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Experience.css';

export default function Experience({ language }) {
  const content = {
    es: {
      title: 'Experiencia Profesional',
      intro: `Explora mi trayectoria laboral, proyectos clave y logros. Haz clic en el botón para ver todos los detalles.`,
      buttonText: 'Ver Experiencia Completa',
    },
    en: {
      title: 'Professional Experience',
      intro: `Explore my work history, key projects, and achievements. Click the button to see all the details.`,
      buttonText: 'View Complete Experience',
    },
  };

  const selected = content[language] || content['es'];

  return (
    <section className="cv-section" id="experience">
      {/* ✅ Cambiado el className para que use solo section-title */}
      <h2 className="section-title">
        <Briefcase className="icon-gray" />
        {selected.title}
      </h2>
      <p className="section-body">{selected.intro}</p>
      <Link 
        to="/experience-full" 
        className="unified-button purple-gradient"
        style={{ margin: '0 auto 20px', display: 'block', width: 'fit-content' }}
      >
        {selected.buttonText}
      </Link>
    </section>
  );
}