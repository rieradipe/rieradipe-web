import React from "react";
import styles from "./Main.module.css";

export default function Main({
  bannerSrc = "/img/AlbaFactieBanner.png",
  onWorldClick,
}) {
  const mundos = [
    { key: "ciber", label: "Ciberseguridad", href: "/ciber" },
    { key: "codigo", label: "Código", href: "/codigo" },
    { key: "qa", label: "QA", href: "/qa" },
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
        <div className={styles.about}>
          <h1 className={styles.title}>Sobre mí</h1>
          <p>
            Soy <strong>Alba</strong>, apasionada por la tecnología con
            propósito. En esta web me acompaña <strong>AlbaFactie</strong>, mi
            alter ego digital y presentadora, que te guiará por los distintos
            mundos de mi universo profesional.
          </p>
          <p>
            Creo en un <strong>código con visión y con valores</strong>:
            accesible, inclusivo y feminista. Para mí, programar no es solo
            escribir líneas de código, es crear impacto positivo y abrir caminos
            a todas las personas.
          </p>
          <p>
            He recorrido un camino de aprendizaje intenso: certificados de
            profesionalidad en desarrollo web, un bootcamp fullstack &
            ciberseguridad, y una fuerte motivación por seguir creciendo día a
            día.
          </p>
          <p>
            Esta web es el reflejo de esa mezcla de valores y técnica:{" "}
            <strong>desarrollo pensado para las personas</strong>, con la
            convicción de que la tecnología puede{" "}
            <strong>transformar y cuidar</strong>.
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
              <span className={styles.emoji} aria-hidden>
                🌌
              </span>
              <span className={styles.label}>{m.label}</span>
              <span className={styles.arrow} aria-hidden>
                →
              </span>
            </a>
          ))}
        </nav>

        <div style={{ height: "24px" }} />
      </div>
    </section>
  );
}
