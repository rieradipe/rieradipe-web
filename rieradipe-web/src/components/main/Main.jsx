import React from "react";
import styles from "./Main.module.css";

export default function Main({
  bannerSrc = "/img/AlbaFactieBanner.png",
  onWorldClick,
}) {
  const mundos = [
    { key: "ciber", label: "Ciberseguridad", href: "/ciber" },
    { key: "codigo", label: "Código", href: "/codigo" },

    { key: "optimizacion", label: "Optimización Web", href: "/optimizacion" },
  ];

  const handleWorld = (m) => {
    if (onWorldClick) onWorldClick(m.key);
  };

  return (
    <section className="section">
      <div className="container">
        {/* Imagen banner */}
        <div className={styles.imageWrap}>
          <img
            src={bannerSrc}
            alt="AlbaFactie presentando su universo en el ordenador"
            className={styles.bannerImg}
            loading="eager"
          />
        </div>

        {/* Texto sobre mí */}
        {/* Texto sobre mí */}
        <div className={styles.about}>
          <h1 className={styles.title}>Sobre mí</h1>

          <p>
            Soy <strong>Alba</strong>, desarrolladora web con pasión por la
            tecnología que mejora la vida de las personas. En esta web me
            acompaña <strong>AlbaFactie</strong>, mi alter ego digital y guía
            curiosa, que te presentará los distintos mundos de mi universo
            profesional.
          </p>

          <p>
            Creo en un <strong>código con propósito</strong>: accesible,
            inclusivo y con impacto real. Para mí, programar no consiste solo en
            escribir líneas de código, sino en crear soluciones que comuniquen,
            conecten y abran caminos a todas las personas.
          </p>

          <p>
            Mi recorrido incluye certificados de profesionalidad en desarrollo
            web, un bootcamp fullstack y formación en ciberseguridad. Cada paso
            ha reforzado mi compromiso con un desarrollo ético, colaborativo y
            en constante evolución.
          </p>

          <p>
            Esta web refleja esa mezcla de técnica y valores:
            <strong> desarrollo centrado en las personas</strong>, con la
            convicción de que la tecnología puede{" "}
            <strong>transformar, inspirar y cuidar</strong>.
          </p>
        </div>

        {/* Mundos */}
        <nav className={styles.worlds} aria-label="Mundos de AlbaFactie">
          {mundos.map((m) => (
            <a
              key={m.key}
              href={m.href}
              onClick={() => handleWorld(m)}
              className={`btn btn--outline ${styles.worldBtn}`}
              aria-label={`Ir a ${m.label}`}
            >
              <span className={styles.label}>{m.label}</span>
            </a>
          ))}
        </nav>

        <div style={{ height: "24px" }} />
      </div>
    </section>
  );
}
