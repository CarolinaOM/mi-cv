// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="cv-section">
      <h2 className="cv-section__title">🛠️ Habilidades</h2>
      <div className="cv-section__body">
        <div className="skills-category">
          <strong>💻 Lenguajes:</strong> JavaScript, HTML, CSS, PHP, Java, Flutter
        </div>
        <div className="skills-category">
          <strong>🧩 Frameworks:</strong> Vue.js, Node.js, WordPress
        </div>
        <div className="skills-category">
          <strong>🗃️ Bases de datos:</strong> SQL, Access
        </div>
        <div className="skills-category">
          <strong>🛠 Herramientas:</strong> Git, Canva
        </div>
        <div className="skills-category">
          <strong>🖥️ Sistemas operativos:</strong> Windows, Linux
        </div>
      </div>
    </div>
  );
};

export default Skills;



