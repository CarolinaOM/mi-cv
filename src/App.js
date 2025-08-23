import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import ResumeLayout from './components/ResumeLayout';
import Proyect from './components/Proyect';
import Education from './components/Education'; // ← ¡Importante!

function App() {
  const [language, setLanguage] = useState('es'); // Estado del idioma

  return (
    <div>
      <Header language={language} onLanguageChange={setLanguage} />
      <About language={language} />
      <ResumeLayout language={language} />
      <Experience language={language} />
      <Proyect language={language} />
    </div>
  );
}

export default App;