import React from "react";
import Seo from "../seo/Seo";
import styles from "./OptimizacionWeb.module.css";

export default function OptimizacionWeb() {
  return (
    <section className={styles.section}>
      <Seo
        title="Optimización Web | Rieradipe"
        description="Descubre técnicas de optimización web: rendimiento, SEO y accesibilidad aplicadas a proyectos reales con AlbaFactie."
        image="/img/AlbaFactieOptimizacion.png"
      />

      {/* FILA 1: Hero */}
      <header className={styles.hero}>
        <div className={styles.text}>
          <h2 className={styles.title}>Cosmos de la Optimización</h2>
          <p className={styles.desc}>
            Hacemos webs que{" "}
            <strong>posicionan, cargan rápido y convierten</strong>. Desde la
            arquitectura técnica hasta el diseño por componentes, optimizamos
            cada paso del flujo de usuario para que tu negocio crezca.
          </p>
          <p className={styles.desc}>
            Analizamos rendimiento, accesibilidad y experiencia de usuario con
            un enfoque integral entre frontend y backend.
          </p>
        </div>
        <div className={styles.imageWrap}>
          <img
            src="/img/AlbaFactie3.png"
            alt="AlbaFactie optimización web"
            className={styles.image}
          />
        </div>
      </header>

      {/* FILA 2: Grid de Cards */}
      <section className={styles.grid} aria-label="Servicios de Optimización">
        <article className={styles.card}>
          <span className={styles.badge}>SEO Técnico</span>
          <h3 className={styles.cardTitle}>Visibilidad desde la base</h3>
          <ul className={styles.list}>
            <li>Auditorías SEO y optimización de la estructura semántica.</li>
            <li>Mejora de Core Web Vitals y tiempos de carga</li>
            <li>Gestión de indexación, metadatos y arquitectura web.</li>
          </ul>
        </article>
        <article className={styles.card}>
          <span className={styles.badge}>UX & Flujo</span>
          <h3 className={styles.cardTitle}>Experiencia que guía</h3>
          <ul className={styles.list}>
            <li>Mapeamos el recorrido del usuario para facilitar su camino.</li>
            <li>Diseñamos interfaces intuitivas y accesibles.</li>
            <li>Optimizamos la conversión a través del diseño consciente.</li>
          </ul>
        </article>
        <article className={styles.card}>
          <span className={styles.badge}>Componentes</span>
          <h3 className={styles.cardTitle}>Diseño modular</h3>
          <ul className={styles.list}>
            <li>Maquetas basadas en componentes reutilizables.</li>
            <li>Previsualización real antes del desarrollo final.</li>
            <li>Integración ágil con el backend y sistemas CMS.</li>
          </ul>
        </article>
        <article className={styles.card}>
          <span className={styles.badge}>Rendimiento</span>
          <h3 className={styles.cardTitle}>Velocidad y estabilidad</h3>
          <ul className={styles.list}>
            <li>Optimización de recursos, imágenes y scripts.</li>
            <li>Lazy loading y renderizado eficiente.</li>
            <li>Monitorización y mejora continua de rendimiento.</li>
          </ul>
        </article>
      </section>

      {/* FILA 3: CTA */}
      <section className={styles.ctaBox}>
        <p className={styles.ctaText}>
          Tu web puede ser tan rápida y precisa como una órbita estable.
          ¿Optimizamos juntos su trayectoria?
        </p>
        <a href="mailto:rieradipe@gmail.com" className={styles.button}>
          Empezar la optimización
        </a>
      </section>
    </section>
  );
}
