import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

export default function Experience() {
  return (
    <section className="cv-section" id="experience">
      <h2 className="cv-section__title">
        <FontAwesomeIcon icon={faBriefcase} className="icon-experience" />
        Experiencia Profesional
      </h2>
      <div className="cv-section__body">

        <div className="job-entry">
          <h3 className="job-title">Programadora Frontend – INTRASOFT</h3>
          <p className="job-dates">Marzo 2023 – Julio 2024</p>
          <ul className="job-details">
            <li>Desarrollo de interfaces web dinámicas con Vue.js y JavaScript.</li>
            <li>Coordinación con equipos UX/UI para experiencias de usuario atractivas.</li>
            <li>Optimización del rendimiento de las aplicaciones en un 20%.</li>
          </ul>
        </div>

        <div className="job-entry">
          <h3 className="job-title">Programadora Web – REPUESTOS URUGUAY</h3>
          <p className="job-dates">Febrero 2022 – Marzo 2023</p>
          <ul className="job-details">
            <li>Diseño y desarrollo de una página web corporativa.</li>
            <li>Implementación de aplicaciones móviles para logística y reparto.</li>
            <li>Mejora de la presencia digital y atención al cliente.</li>
          </ul>
        </div>

        <div className="job-entry">
          <h3 className="job-title">Docente de Ingeniería Informática – TECH Universidad Tecnológica</h3>
          <p className="job-dates">Abril 2020 – Octubre 2021</p>
          <ul className="job-details">
            <li>Creación de material didáctico para asignaturas de grado.</li>
            <li>Desarrollo de recursos interactivos y actualización de contenidos técnicos.</li>
            <li>Mejora de la experiencia de aprendizaje online.</li>
          </ul>
        </div>

        <div className="job-entry">
          <h3 className="job-title">Grabadora de Datos – Servicios Estadísticos de Canarias</h3>
          <p className="job-dates">Junio 2018 – Julio 2018</p>
          <ul className="job-details">
            <li>Digitalización de encuestas de alumnos y representantes.</li>
            <li>Garantía de precisión y organización de los datos recopilados.</li>
          </ul>
        </div>

        <div className="job-entry">
          <h3 className="job-title">Administrador de Aplicaciones de Escritorio – Alcaldía Municipio Los Salias</h3>
          <p className="job-dates">Abril 2016 – Julio 2017</p>
          <ul className="job-details">
            <li>Desarrollo y mantenimiento de aplicaciones administrativas internas.</li>
            <li>Asistencia técnica y resolución de incidencias informáticas.</li>
            <li>Mejoras en procesos de inventario y digitalización documental.</li>
          </ul>
        </div>

        <div className="job-entry">
          <h3 className="job-title">Soporte Técnico – Alcaldía Municipio Los Salias</h3>
          <p className="job-dates">Febrero 2015 – Abril 2015</p>
          <ul className="job-details">
            <li>Desarrollo de sistema de inventario con mejora del 30% en eficiencia.</li>
            <li>Soporte técnico y mantenimiento de sistemas informáticos.</li>
          </ul>
        </div>

        <div className="job-entry">
          <h3 className="job-title">Prácticas en Gestión de Riesgos – CITIBANK</h3>
          <p className="job-dates">Octubre 2015 – Marzo 2016</p>
          <ul className="job-details">
            <li>Verificación y consulta de bases de datos para control de riesgos.</li>
          </ul>
        </div>

        <div className="job-entry">
          <h3 className="job-title">Secretaria Administrativa – Proyecto Arquitectura</h3>
          <p className="job-dates">Enero 2009 – Diciembre 2011</p>
          <ul className="job-details">
            <li>Gestión de informes, correspondencias y atención telefónica.</li>
            <li>Organización documental y archivo.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

