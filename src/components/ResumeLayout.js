// src/components/ResumeLayout.js
import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import './ResumeLayout.css';

const ResumeLayout = () => {
  return (
    <div className="resume-container">
      <div className="full-column">
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default ResumeLayout;
