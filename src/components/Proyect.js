import { FolderGit2 } from 'lucide-react';
import snakeGameImg from '../assets/images/snake-game.png';
import './Proyect.css';

export default function Proyect({ language }) {
  const content = {
    es: {
      title: 'Mis proyectos realizados',
      intro: `Aquí te muestro algunos de los proyectos que he realizado durante mi formación y experiencia como desarrolladora.  
      Cada uno refleja mi evolución, creatividad y compromiso con el aprendizaje constante.  
      Desde páginas web personales hasta aplicaciones interactivas, cada proyecto ha sido una oportunidad para crecer y aplicar lo aprendido.`,
      projectTitle: 'Snake Game',
      projectDescription: `Juego clásico de la serpiente desarrollado con React, JavaScript, HTML y CSS.  
      Interactivo, rápido y perfecto para practicar lógica, eventos del teclado y manejo de estado.`,
      buttonText: 'Ver proyecto',
    },
    en: {
      title: 'My Completed Projects',
      intro: `Here are some of the projects I’ve completed during my training and experience as a developer.  
      Each one reflects my growth, creativity, and commitment to continuous learning.  
      From personal websites to interactive applications, every project has been an opportunity to grow and apply what I’ve learned.`,
      projectTitle: 'Snake Game',
      projectDescription: `Classic snake game developed with React, JavaScript, HTML, and CSS.  
      Interactive, fast, and perfect for practicing logic, keyboard events, and state management.`,
      buttonText: 'View Project',
    },
  };

  const selected = content[language] || content['es'];

  return (
    <section className="cv-section about-section" id="projects">
      <h2 className="section-title about-title">
        <FolderGit2 className="icon-gray" />
        {selected.title}
      </h2>

      <p className="section-body about-body">
        {selected.intro}
      </p>

      <div className="project-card">
        <h3 className="project-title">{selected.projectTitle}</h3>
        <img src={snakeGameImg} alt="Snake Game" className="project-image-small" />
        <p className="section-body about-body">
          {selected.projectDescription}
        </p>
        <a
          href="https://admirable-mousse-027031.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          {selected.buttonText}
        </a>
      </div>
    </section>
  );
}