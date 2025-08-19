import { GraduationCap } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">
        <GraduationCap className="education-icon" stroke="white" />
        Educación
      </h2>
      <div className="education-entry">
        <strong>Ingeniería de Sistemas</strong><br />
        Universidad Nacional — 2016<br />
        Homologado a Grado en Tecnologías de la Información y la Comunicación
      </div>
    </section>
  );
}