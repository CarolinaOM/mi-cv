import { FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Proyect.css';

export default function Proyect({ language }) {
  const content = {
    es: {
      title: 'Proyectos',
      intro: `Aquí te muestro algunos de los proyectos que he realizado durante mi formación y experiencia como desarrolladora. Cada uno refleja mi evolución, creatividad y compromiso con el aprendizaje constante.`,
      buttonText: 'Ver todos los proyectos',
    },
    en: {
      title: 'Projects',
      intro: `Here are some of the projects I’ve completed during my training and experience as a developer. Each one reflects my growth, creativity, and commitment to continuous learning.`,
      buttonText: 'View all projects',
    },
  };

  const selected = content[language] || content['es'];

  return (
    <section className="cv-section" id="projects">
      {/* ✅ Cambiado el className para que use solo section-title */}
      <h2 className="section-title">
        <FolderGit2 className="icon-gray" />
        {selected.title}
      </h2>

      <p className="section-body about-body">
        {selected.intro}
      </p>

      <Link 
        to="/projects-full" 
        className="unified-button green-gradient"
        style={{ margin: '0 auto 20px', display: 'block', width: 'fit-content' }}
      >
        {selected.buttonText}
      </Link>
    </section>
  );
}