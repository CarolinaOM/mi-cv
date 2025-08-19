import {
  Code,
  Boxes,
  Database,
  Wrench,
  Monitor
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        <Wrench className="skills-icon" />
        Habilidades
      </h2>
      <div className="skills-box">
        <div className="skills-category">
          <Code className="icon-skill" />
          <span><strong>Lenguajes:</strong> JavaScript, HTML, CSS, PHP, Java, Flutter</span>
        </div>
        <div className="skills-category">
          <Boxes className="icon-skill" />
          <span><strong>Frameworks:</strong> Vue.js, Node.js, WordPress</span>
        </div>
        <div className="skills-category">
          <Database className="icon-skill" />
          <span><strong>Bases de datos:</strong> SQL, Access</span>
        </div>
        <div className="skills-category">
          <Wrench className="icon-skill" />
          <span><strong>Herramientas:</strong> Git, Canva</span>
        </div>
        <div className="skills-category">
          <Monitor className="icon-skill" />
          <span><strong>Sistemas operativos:</strong> Windows, Linux</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
