import { FolderGit2 } from 'lucide-react';
import snakeGameImg from '../assets/images/snake-game.png';
import rpsGameImg from '../assets/images/piedra-papel-tijera-game.png';
import latableduchefImg from '../assets/images/La Table Du Chef.png';
import repuestosuruguayImg from '../assets/images/Repuestos Uruguay.png';
import femautoImg from '../assets/images/Femauto.png';
import disneyImg from '../assets/images/Disney.png';
import './Proyect.css';

export default function Proyect({ language }) {
  const content = {
    es: {
      title: 'Mis proyectos realizados',
      intro: `Aquí te muestro algunos de los proyectos que he realizado durante mi formación y experiencia como desarrolladora. Cada uno refleja mi evolución, creatividad y compromiso con el aprendizaje constante.`,
      personalProjectsTitle: 'Proyectos Personales',
      professionalProjectsTitle: 'Proyectos Profesionales',
      personalProjects: [
        {
          title: 'Snake Game',
          description: `Juego clásico de la serpiente desarrollado con React, JavaScript, HTML y CSS. Interactivo, rápido y perfecto para practicar lógica, eventos del teclado y manejo de estado.`,
          image: snakeGameImg,
          link: 'https://admirable-mousse-027031.netlify.app/',
        },
        {
          title: 'Piedra, Papel o Tijera',
          description: `Juego interactivo donde compites contra el sistema. Elige una figura y descubre si ganas, pierdes o empatas. ¡Juega tantas veces como quieras!`,
          image: rpsGameImg,
          link: 'https://rock-paper-scissors-arena.netlify.app/',
        },
        {
          title: 'Buscador Disney',
          description: `Un buscador interactivo donde al seleccionar una letra del abecedario, puedes descubrir si existen personajes de Disney que comiencen con esa letra. Si los hay, se muestra una foto y una breve descripción.`,
          image: disneyImg,
          link: 'https://genuine-biscochitos-a2635d.netlify.app/', // ⬅️ ¡Dirección actualizada!
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
          title: 'Taller Femauto',
          description: `Realización de módulos y actualización de la web del taller utilizando HTML, CSS, Python y Bootstrap.`,
          image: femautoImg,
          link: 'https://www.tallerfemauto.es/',
        },
      ],
    },
    en: {
      title: 'My Completed Projects',
      intro: `Here are some of the projects I’ve completed during my training and experience as a developer. Each one reflects my growth, creativity, and commitment to continuous learning.`,
      personalProjectsTitle: 'Personal Projects',
      professionalProjectsTitle: 'Professional Projects',
      personalProjects: [
        {
          title: 'Snake Game',
          description: `Classic snake game developed with React, JavaScript, HTML, and CSS. Interactive, fast, and perfect for practicing logic, keyboard events, and state management.`,
          image: snakeGameImg,
          link: 'https://admirable-mousse-027031.netlify.app/',
        },
        {
          title: 'Rock, Paper, Scissors',
          description: `Interactive game where you compete against the system. Choose a shape and see if you win, lose, or draw. Play as many times as you like!`,
          image: rpsGameImg,
          link: 'https://rock-paper-scissors-arena.netlify.app/',
        },
        {
          title: 'Disney Finder',
          description: `An interactive search tool where you can select a letter of the alphabet to discover if there are Disney characters whose names start with that letter. If so, a photo and a brief description are displayed.`,
          image: disneyImg,
          link: 'https://genuine-biscochitos-a2635d.netlify.app/', // ⬅️ ¡Dirección actualizada!
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
    const blueProjects = ['Buscador Disney', 'Disney Finder', 'Snake Game', 'La Table Du Chef', 'Taller Femauto'];
    const greenProjects = ['Piedra, Papel o Tijera', 'Rock, Paper, Scissors', 'Repuestos Uruguay'];
    
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
        <p className="section-body about-body">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-button ${getButtonClass(project.title)}`}
        >
          Ver proyecto
        </a>
      </div>
    ));
  };

  return (
    <section className="cv-section about-section" id="projects">
      <h2 className="section-title about-title">
        <FolderGit2 className="icon-gray" />
        {selected.title}
      </h2>

      <p className="section-body about-body">
        {selected.intro}
      </p>

      <h3>{selected.personalProjectsTitle}</h3>
      <div className="projects-grid">
        {renderProjects(selected.personalProjects)}
      </div>

      <br />
      <h3>{selected.professionalProjectsTitle}</h3>
      <div className="projects-grid">
        {renderProjects(selected.professionalProjects)}
      </div>
    </section>
  );
}