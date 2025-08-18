// src/components/ResumeLayout.js
import React from 'react';
import Education from './Education';
import Skills from './Skills';
import './ResumeLayout.css';

const ResumeLayout = () => {
  return (
    <div className="resume-container">
      <div className="left-column">
        <Education />
      </div>
      <div className="right-column">
        <Skills />
      </div>
    </div>
  );
};

export default ResumeLayout;
