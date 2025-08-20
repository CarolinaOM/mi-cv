import { Briefcase, Globe } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">
        <Briefcase className="experience-icon" />
        Experiencia Profesional
      </h2>
      <div className="experience-body">

        <div className="experience-entry">
          <h3 className="experience-job-title">Programadora Frontend – INTRASOFT</h3>
          <p className="experience-job-dates">Marzo 2023 – Julio 2024</p>
          <ul className="experience-job-details">
            <li>Desarrollo de interfaces web dinámicas con Vue.js y JavaScript.</li>
            <li>Coordinación con equipos UX/UI para experiencias de usuario atractivas.</li>
            <li>Optimización del rendimiento de las aplicaciones en un 20%.</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-job-title">
            Programadora Web – REPUESTOS URUGUAY
            <a href="https://repuestosuruguay.es/" target="_blank" rel="noopener noreferrer" className="company-icon-link">
              <Globe className="company-icon" />
            </a>
          </h3>
          <p className="experience-job-dates">Febrero 2022 – Marzo 2023</p>
          <ul className="experience-job-details">
            <li>Diseño y desarrollo de una página web corporativa.</li>
            <li>Implementación de aplicaciones móviles para logística y reparto.</li>
            <li>Mejora de la presencia digital y atención al cliente.</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-job-title">
            Docente de Ingeniería Informática – TECH Universidad Tecnológica
            <a href="https://www.techtitute.com/" target="_blank" rel="noopener noreferrer" className="company-icon-link">
              <Globe className="company-icon" />
            </a>
          </h3>
          <p className="experience-job-dates">Abril 2020 – Octubre 2021</p>
          <ul className="experience-job-details">
            <li>Creación de material didáctico para asignaturas de grado.</li>
            <li>Desarrollo de recursos interactivos y actualización de contenidos técnicos.</li>
            <li>Mejora de la experiencia de aprendizaje online.</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-job-title">
            Grabadora de Datos – Servicios Estadísticos de Canarias
            <a href="https://serviciosestadisticos.es/" target="_blank" rel="noopener noreferrer" className="company-icon-link">
              <Globe className="company-icon" />
            </a>
          </h3>
          <p className="experience-job-dates">Junio 2018 – Julio 2018</p>
          <ul className="experience-job-details">
            <li>Digitalización de encuestas de alumnos y representantes.</li>
            <li>Garantía de precisión y organización de los datos recopilados.</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-job-title">Administrador de Aplicaciones de Escritorio – Alcaldía Municipio Los Salias</h3>
          <p className="experience-job-dates">Abril 2016 – Julio 2017</p>
          <ul className="experience-job-details">
            <li>Desarrollo y mantenimiento de aplicaciones administrativas internas.</li>
            <li>Asistencia técnica y resolución de incidencias informáticas.</li>
            <li>Mejoras en procesos de inventario y digitalización documental.</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-job-title">Soporte Técnico – Alcaldía Municipio Los Salias</h3>
          <p className="experience-job-dates">Febrero 2015 – Abril 2015</p>
          <ul className="experience-job-details">
            <li>Desarrollo de sistema de inventario con mejora del 30% en eficiencia.</li>
            <li>Soporte técnico y mantenimiento de sistemas informáticos.</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-job-title">
            Prácticas en Gestión de Riesgos – CITIBANK
            <a href="https://www.citi.com/" target="_blank" rel="noopener noreferrer" className="company-icon-link">
              <Globe className="company-icon" />
            </a>
          </h3>
          <p className="experience-job-dates">Octubre 2015 – Marzo 2016</p>
          <ul className="experience-job-details">
            <li>Verificación y consulta de bases de datos para control de riesgos.</li>
          </ul>
        </div>

        <div className="experience-entry">
          <h3 className="experience-job-title">Secretaria Administrativa – Proyecto Arquitectura</h3>
          <p className="experience-job-dates">Enero 2009 – Diciembre 2011</p>
          <ul className="experience-job-details">
            <li>Gestión de informes, correspondencias y atención telefónica.</li>
            <li>Organización documental y archivo.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}