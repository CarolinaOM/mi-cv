import { Briefcase, Globe } from 'lucide-react';
import './Experience.css';

export default function Experience({ language }) {
  const content = {
    es: {
      title: 'Experiencia Profesional',
      entries: [
        {
          title: 'Programadora Frontend – INTRASOFT',
          dates: 'Marzo 2023 – Julio 2024',
          details: [
            'Desarrollo de interfaces web dinámicas con Vue.js y JavaScript.',
            'Coordinación con equipos UX/UI para experiencias de usuario atractivas.',
            'Optimización del rendimiento de las aplicaciones en un 20%.',
          ],
        },
        {
          title: 'Programadora Web – REPUESTOS URUGUAY',
          link: 'https://repuestosuruguay.es/',
          dates: 'Febrero 2022 – Marzo 2023',
          details: [
            'Diseño y desarrollo de una página web corporativa.',
            'Implementación de aplicaciones móviles para logística y reparto.',
            'Mejora de la presencia digital y atención al cliente.',
          ],
        },
        {
          title: 'Docente de Ingeniería Informática – TECH Universidad Tecnológica',
          link: 'https://www.techtitute.com/',
          dates: 'Abril 2020 – Octubre 2021',
          details: [
            'Creación de material didáctico para asignaturas de grado.',
            'Desarrollo de recursos interactivos y actualización de contenidos técnicos.',
            'Mejora de la experiencia de aprendizaje online.',
          ],
        },
        {
          title: 'Grabadora de Datos – Servicios Estadísticos de Canarias',
          link: 'https://serviciosestadisticos.es/',
          dates: 'Junio 2018 – Julio 2018',
          details: [
            'Digitalización de encuestas de alumnos y representantes.',
            'Garantía de precisión y organización de los datos recopilados.',
          ],
        },
        {
          title: 'Administrador de Aplicaciones de Escritorio – Alcaldía Municipio Los Salias',
          dates: 'Abril 2016 – Julio 2017',
          details: [
            'Desarrollo y mantenimiento de aplicaciones administrativas internas.',
            'Asistencia técnica y resolución de incidencias informáticas.',
            'Mejoras en procesos de inventario y digitalización documental.',
          ],
        },
        {
          title: 'Soporte Técnico – Alcaldía Municipio Los Salias',
          dates: 'Febrero 2015 – Abril 2015',
          details: [
            'Desarrollo de sistema de inventario con mejora del 30% en eficiencia.',
            'Soporte técnico y mantenimiento de sistemas informáticos.',
          ],
        },
        {
          title: 'Prácticas en Gestión de Riesgos – CITIBANK',
          link: 'https://www.citi.com/',
          dates: 'Octubre 2015 – Marzo 2016',
          details: [
            'Verificación y consulta de bases de datos para control de riesgos.',
          ],
        },
        {
          title: 'Secretaria Administrativa – Proyecto Arquitectura',
          dates: 'Enero 2009 – Diciembre 2011',
          details: [
            'Gestión de informes, correspondencias y atención telefónica.',
            'Organización documental y archivo.',
          ],
        },
      ],
    },
    en: {
      title: 'Professional Experience',
      entries: [
        {
          title: 'Frontend Developer – INTRASOFT',
          dates: 'March 2023 – July 2024',
          details: [
            'Development of dynamic web interfaces using Vue.js and JavaScript.',
            'Coordination with UX/UI teams for engaging user experiences.',
            'Optimized application performance by 20%.',
          ],
        },
        {
          title: 'Web Developer – REPUESTOS URUGUAY',
          link: 'https://repuestosuruguay.es/',
          dates: 'February 2022 – March 2023',
          details: [
            'Designed and developed a corporate website.',
            'Implemented mobile apps for logistics and delivery.',
            'Improved digital presence and customer service.',
          ],
        },
        {
          title: 'Computer Science Lecturer – TECH Technological University',
          link: 'https://www.techtitute.com/',
          dates: 'April 2020 – October 2021',
          details: [
            'Created educational materials for undergraduate courses.',
            'Developed interactive resources and updated technical content.',
            'Enhanced online learning experience.',
          ],
        },
        {
          title: 'Data Entry Clerk – Statistical Services of Canarias',
          link: 'https://serviciosestadisticos.es/',
          dates: 'June 2018 – July 2018',
          details: [
            'Digitized surveys from students and representatives.',
            'Ensured accuracy and organization of collected data.',
          ],
        },
        {
          title: 'Desktop Application Administrator – Los Salias Municipality',
          dates: 'April 2016 – July 2017',
          details: [
            'Developed and maintained internal administrative applications.',
            'Provided technical support and resolved IT issues.',
            'Improved inventory processes and document digitization.',
          ],
        },
        {
          title: 'Technical Support – Los Salias Municipality',
          dates: 'February 2015 – April 2015',
          details: [
            'Developed inventory system with 30% efficiency improvement.',
            'Provided technical support and system maintenance.',
          ],
        },
        {
          title: 'Risk Management Intern – CITIBANK',
          link: 'https://www.citi.com/',
          dates: 'October 2015 – March 2016',
          details: [
            'Verified and consulted databases for risk control.',
          ],
        },
        {
          title: 'Administrative Secretary – Architecture Project',
          dates: 'January 2009 – December 2011',
          details: [
            'Managed reports, correspondence, and phone calls.',
            'Document organization and archiving.',
          ],
        },
      ],
    },
  };

  const selected = content[language] || content['es'];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">
        <Briefcase className="experience-icon" />
        {selected.title}
      </h2>
      <div className="experience-body">
        {selected.entries.map((entry, index) => (
          <div className="experience-entry" key={index}>
            <h3 className="experience-job-title">
              {entry.title}
              {entry.link && (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-icon-link"
                >
                  <Globe className="company-icon" />
                </a>
              )}
            </h3>
            <p className="experience-job-dates">{entry.dates}</p>
            <ul className="experience-job-details">
              {entry.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}