import {
  Code,
  Boxes,
  Database,
  Wrench,
  Monitor
} from 'lucide-react';
import './Skills.css';

export default function Skills({ language }) {
  const content = {
    es: {
      title: 'Habilidades',
      categories: [
        { icon: <Code className="icon-skill" />, label: 'Lenguajes', value: 'JavaScript, HTML, CSS, PHP, Java, Flutter' },
        { icon: <Boxes className="icon-skill" />, label: 'Frameworks', value: 'Vue.js, Node.js, WordPress, React' },
        { icon: <Database className="icon-skill" />, label: 'Bases de datos', value: 'SQL, Access' },
        { icon: <Wrench className="icon-skill" />, label: 'Herramientas', value: 'Git, Canva' },
        { icon: <Monitor className="icon-skill" />, label: 'Sistemas operativos', value: 'Windows, Linux' },
      ],
    },
    en: {
      title: 'Skills',
      categories: [
        { icon: <Code className="icon-skill" />, label: 'Languages', value: 'JavaScript, HTML, CSS, PHP, Java, Flutter' },
        { icon: <Boxes className="icon-skill" />, label: 'Frameworks', value: 'Vue.js, Node.js, WordPress, React' },
        { icon: <Database className="icon-skill" />, label: 'Databases', value: 'SQL, Access' },
        { icon: <Wrench className="icon-skill" />, label: 'Tools', value: 'Git, Canva' },
        { icon: <Monitor className="icon-skill" />, label: 'Operating Systems', value: 'Windows, Linux' },
      ],
    },
  };

  const selected = content[language] || content['es'];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        <Wrench className="skills-icon" />
        {selected.title}
      </h2>
      <div className="skills-box">
        {selected.categories.map((cat, index) => (
          <div className="skills-category" key={index}>
            {cat.icon}
            <span><strong>{cat.label}:</strong> {cat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
