// src/components/ResumeLayout.js
import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import './ResumeLayout.css';
import About from './About';

const ResumeLayout = ({ language }) => {
  return (
    <div className="resume-container">
      <div className="full-column">
        <Education language={language} /> {/* ← ¡Aquí se pasa correctamente! */}
        <Skills language={language} />
      </div>
    </div>
  );
};

export default ResumeLayout;