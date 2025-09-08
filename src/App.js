import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Proyect from './components/Proyect';
import Education from './components/Education';
import Skills from './components/Skills';
import ExperiencePage from './components/ExperiencePage';
import ProyectPage from './components/ProyectPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [language, setLanguage] = useState('es');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <main>
            <Header language={language} onLanguageChange={setLanguage} />
            <About language={language} />
            <Education language={language} />
            <Skills language={language} />
            <Experience language={language} />
            <Proyect language={language} />
          </main>
        } />
        <Route path="/experience-full" element={<ExperiencePage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/projects-full" element={<ProyectPage language={language} onLanguageChange={setLanguage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;