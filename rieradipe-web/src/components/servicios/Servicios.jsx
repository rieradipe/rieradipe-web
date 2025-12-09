import styles from "./Servicios.module.css";
import Seo from "../seo/Seo";

const servicios = [
  {
    nombre: "Diseño web",
    descripcion: "Landing, web corporativa, responsive, UI/UX profesional",
    tiempo: "1–3 semanas",
  },
  {
    nombre: "Desarrollo web fullstack",
    descripcion: "Front + Back, bases de datos, APIs",
    tiempo: "2–6 semanas",
  },
  {
    nombre: "Optimización y seguridad",
    descripcion: "Auditoría, mitigación de vulnerabilidades",
    tiempo: "1–2 semanas",
  },
  {
    nombre: "Consultoría / laboratorios",
    descripcion: "Talleres, mentoría, OWASP top 10",
    tiempo: "1–4 sesiones",
  },
  {
    nombre: "Mantenimiento y soporte",
    descripcion: "Backups, updates, monitorización",
    tiempo: "Mensual",
  },
  {
    nombre: "SEO básico",
    descripcion:
      "Optimización de título, meta description, etiquetas y estructura semántica",
    tiempo: "1–2 semanas",
  },
];

export default function ServiciosTable() {
  return (
    <section className={styles.tableContainer} aria-labelledby="serviciosTitle">
      <Seo
        title="Servicios | Rieradipe"
        description="Conoce los servicios que ofrece Rieradipe: desarrollo web, ciberseguridad, optimización y proyectos FullStack con AlbaFactie."
        image="/img/AlbaFactieServicios.png"
      />

      <h2 id="serviciosTitle">Servicios ofrecidos por Rieradipe</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Qué incluye</th>
            <th>Tiempo aproximado</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((servicio, index) => (
            <tr key={index}>
              <td className={styles.servicio}>{servicio.nombre}</td>
              <td>{servicio.descripcion}</td>
              <td>{servicio.tiempo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
