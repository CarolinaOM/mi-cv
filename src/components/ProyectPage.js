import React from 'react';
import { FolderGit2, Globe, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import './ProyectPage.css';

// Importa todas las imágenes de los proyectos
import snakeGameImg from '../assets/images/snake-game.png';
import rpsGameImg from '../assets/images/piedra-papel-tijera-game.png';
import latableduchefImg from '../assets/images/La Table Du Chef.png';
import repuestosuruguayImg from '../assets/images/Repuestos Uruguay.png';
import femautoImg from '../assets/images/Femauto.png';
import disneyImg from '../assets/images/Disney.png';
import princessPeachImg from '../assets/images/Princess-Peach.png';
import lamiradadetualmaImg from '../assets/images/La-Mirada-De-Tu-Alma.png';

export default function ProyectPage({ language, onLanguageChange }) {
  const content = {
    es: {
      pageTitle: 'Mis Proyectos ',
      backButton: '← Volver al CV',
      personalProjectsTitle: 'Proyectos Personales',
      professionalProjectsTitle: 'Proyectos Profesionales',
      buttonView: 'Ver proyecto',
      buttonCode: 'Código Fuente',
      personalProjects: [
        {
          title: 'Snake Game',
          description: `Juego clásico de la serpiente desarrollado con React, JavaScript, HTML y CSS. Interactivo, rápido y perfecto para practicar lógica, eventos del teclado y manejo de estado.`,
          image: snakeGameImg,
          link: 'https://admirable-mousse-027031.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/Juego-Snake',
        },
        {
          title: 'Piedra, Papel o Tijera',
          description: `Juego interactivo donde compites contra el sistema. Elige una figura y descubre si ganas, pierdes o empatas. ¡Juega tantas veces como quieras!`,
          image: rpsGameImg,
          link: 'https://rock-paper-scissors-arena.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/Juego-piedra-papel-tijera',
        },
        {
          title: 'Princess Peach Showtime',
          description: `Página web informativa sobre el videojuego de Nintendo, Princess Peach Showtime. Creada con React, Vite y CSS, explora personajes, escenarios y la fecha de lanzamiento.`,
          image: princessPeachImg,
          link: 'https://peach-showtime-page.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/landing-react',
        },
        {
          title: 'Buscador Disney',
          description: `Un buscador interactivo donde al seleccionar una letra del abecedario, puedes descubrir si existen personajes de Disney que comiencen con esa letra. Si los hay, se muestra una foto y una breve descripción.`,
          image: disneyImg,
          link: 'https://genuine-biscochitos-a2635d.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/Api-Disney',
        },
        {
          title: 'La Mirada De Tu Alma',
          description: `Este es un componente de contacto en React, diseñado para la web de La Mirada de tu Alma. Combina una estética mística y moderna con ilustraciones y un formulario de contacto, creado con la potencia de React, Vite y la flexibilidad de Tailwind CSS.`,
          image: lamiradadetualmaImg,
          link: 'https://lamiradadetualma.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/la-mirada-de-tu-alma?tab=readme-ov-file',
        },
        
      ],
      professionalProjects: [
        {
          title: 'La Table Du Chef',
          description: `Desarrollo de una página web en WordPress para un centro de formación. Mi contribución fue la maquetación y publicación del sitio web.`,
          image: latableduchefImg,
          link: 'https://latableduchef.es/',
        },
        {
          title: 'Repuestos Uruguay',
          description: `Creación de la página web de la empresa utilizando HTML, CSS, JavaScript, Python y Bootstrap para mejorar la presencia digital y la interacción con los clientes.`,
          image: repuestosuruguayImg,
          link: 'https://repuestosuruguay.es/',
        },
        {
          title: `Taller Femauto`,
          description: `Realización de módulos y actualización de la web del taller utilizando HTML, CSS, Python y Bootstrap.`,
          image: femautoImg,
          link: 'https://www.tallerfemauto.es/',
        },
      ],
    },
    en: {
      pageTitle: 'My Projects',
      backButton: '← Back to CV',
      personalProjectsTitle: 'Personal Projects',
      professionalProjectsTitle: 'Professional Projects',
      buttonView: 'View Project',
      buttonCode: 'Source Code',
      personalProjects: [
        {
          title: 'Snake Game',
          description: `Classic snake game developed with React, JavaScript, HTML, and CSS. Interactive, fast, and perfect for practicing logic, keyboard events, and state management.`,
          image: snakeGameImg,
          link: 'https://admirable-mousse-027031.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/Juego-Snake',
        },
        {
          title: 'Rock, Paper, Scissors',
          description: `Interactive game where you compete against the system. Choose a shape and see if you win, lose, or draw. Play as many times as you like!`,
          image: rpsGameImg,
          link: 'https://rock-paper-scissors-arena.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/Juego-piedra-papel-tijera',
        },
        {
          title: 'Princess Peach Showtime',
          description: `An informative website about the Nintendo video game, Princess Peach Showtime. Created with React, Vite, and CSS, it explores characters, stages, and the release date.`,
          image: princessPeachImg,
          link: 'https://peach-showtime-page.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/landing-react',
        },
        {
          title: 'Disney Finder',
          description: `An interactive search tool where you can select a letter of the alphabet to discover if there are Disney characters whose names start with that letter. If so, a photo and a brief description are displayed.`,
          image: disneyImg,
          link: 'https://genuine-biscochitos-a2635d.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/Api-Disney',
        },
        {
          title: 'La Mirada De Tu Alma',
          description: `This is a contact component in React, designed for the "La Mirada de tu Alma" website. It combines a mystical and modern aesthetic with illustrations and a contact form, created with the power of React, Vite, and the flexibility of Tailwind CSS.`,
          image: lamiradadetualmaImg,
          link: 'https://lamiradadetualma.netlify.app/',
          codeLink: 'https://github.com/CarolinaOM/la-mirada-de-tu-alma?tab=readme-ov-file',
        },
      ],
      professionalProjects: [
        {
          title: 'La Table Du Chef',
          description: `WordPress website development for a training center. My contribution was the layout and publication of the page.`,
          image: latableduchefImg,
          link: 'https://latableduchef.es/',
        },
        {
          title: 'Repuestos Uruguay',
          description: `Creation of the company's website using HTML, CSS, JavaScript, Python, and Bootstrap to improve digital presence and customer interaction.`,
          image: repuestosuruguayImg,
          link: 'https://repuestosuruguay.es/',
        },
        {
          title: `Taller Femauto`,
          description: `Development of modules and updates for the workshop website using HTML, CSS, Python, and Bootstrap.`,
          image: femautoImg,
          link: 'https://www.tallerfemauto.es/',
        },
      ],
    },
  };

  const selected = content[language] || content['es'];

  const getButtonClass = (title) => {
    const blueProjects = ['Buscador Disney', 'Disney Finder', 'Snake Game', 'La Table Du Chef', 'Taller Femauto', 'La Mirada De Tu Alma'];
    const greenProjects = ['Piedra, Papel o Tijera', 'Rock, Paper, Scissors', 'Repuestos Uruguay', 'Princess Peach Showtime'];
    
    if (blueProjects.includes(title)) {
      return 'blue-gradient-button';
    }
    if (greenProjects.includes(title)) {
      return 'green-gradient-button';
    }
    return '';
  };

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3 className="project-title">{project.title}</h3>
        <img src={project.image} alt={project.title} className="project-image-small" />
        <p className="project-description">{project.description}</p>
        <div className="button-container">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-button ${getButtonClass(project.title)}`}
            >
              <Globe size={18} style={{ marginRight: '8px' }} />
              {selected.buttonView}
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-button ${getButtonClass(project.title)}`}
            >
              <Github size={18} style={{ marginRight: '8px' }} />
              {selected.buttonCode}
            </a>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="project-page-container">
      <div className="page-header">
        <h1 className="project-page-title">{selected.pageTitle}</h1>
        <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
      </div>

      {/* ✅ Botón de volver con el degradado verde */}
      <Link to="/" className="back-button green-gradient-button">
        {selected.backButton}
      </Link>

      <div className="projects-body">
        <h2 className="section-subtitle">{selected.personalProjectsTitle}</h2>
        <div className="projects-grid">
          {renderProjects(selected.personalProjects)}
        </div>

        <h2 className="section-subtitle">{selected.professionalProjectsTitle}</h2>
        <div className="projects-grid">
          {renderProjects(selected.professionalProjects)}
        </div>
      </div>
    </div>
  );
}