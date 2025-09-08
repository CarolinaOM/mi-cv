import { GraduationCap } from 'lucide-react';
import './Education.css';

export default function Education({ language }) {
  const content = {
    es: {
      title: 'Educación',
      degree: 'Ingeniería de Sistemas',
      university: 'Universidad Bicentenaria de Aragua\u00A0—\u00A02016', // ✅ Espacios no separables aquí
      homologation: 'Homologado a Grado en Tecnologías de la Información y la Comunicación',
    },
    en: {
      title: 'Education',
      degree: 'Systems Engineering',
      university: 'Bicentennial University of Aragua\u00A0—\u00A02016', // ✅ Espacios no separables aquí
      homologation: 'Validated as a Bachelor’s Degree in Information and Communication Technologies',
    },
  };

  const selected = content[language] || content['es'];

  return (
    <section className="education-section" id="education">
      <h2 className="education-title">
        <GraduationCap className="education-icon" stroke="white" />
        {selected.title}
      </h2>
      <div className="education-entry">
        <strong>{selected.degree}</strong><br />
        {selected.university}<br />
        {selected.homologation}
      </div>
    </section>
  );
}