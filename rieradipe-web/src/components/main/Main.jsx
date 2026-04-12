import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";

export default function Main({
  bannerSrc = "/img/AlbaFactieBanner.png",
  onWorldClick,
}) {
  const mundos = [
    { key: "ciber", label: "Ciberseguridad", to: "/ciber" },
    { key: "codigo", label: "Código", to: "/codigomundo" },
    { key: "optimizacion", label: "Optimización Web", to: "/optimizacion" },
  ];

  const handleWorld = (m) => {
    if (onWorldClick) onWorldClick(m.key);
  };

  return (
    <section className={styles.section}>
      <Seo
        title="Inicio | Rieradipe"
        description="Desarrollo web, optimización y soluciones digitales pensadas para personas. Explora proyectos reales con AlbaFactie."
        image="/img/AlbaFactieBanner.png"
      />

      <header className={styles.hero}>
        <div className={styles.imageWrap}>
          <img
            src={bannerSrc}
            alt="AlbaFactie presentando su universo en el ordenador"
            className={styles.bannerImg}
            loading="eager"
          />
        </div>

        <article className={styles.about}>
          <h1 className={styles.title}>
            Desarrollo web claro, funcional y pensado para personas
          </h1>

          <p>
            Soy <strong>Alba</strong>, desarrolladora web, y en esta web me
            acompaña <strong>AlbaFactie</strong>, mi guía digital.
          </p>

          <p>
            Aquí te muestro cómo trabajo para transformar ideas en proyectos
            reales: webs más claras, experiencias mejor pensadas y soluciones
            digitales con intención.
          </p>

          <p>
            Si buscas una web que comunique mejor, una mejora técnica o una base
            sólida para crecer online, estás en el lugar adecuado.
          </p>

          <p className={styles.invite}>
            Elige un mundo y descubre cómo puedo ayudarte.
          </p>
        </article>
      </header>

      <nav className={styles.worlds} aria-label="Mundos de AlbaFactie">
        {mundos.map((m) => (
          <Link
            key={m.key}
            to={m.to}
            onClick={() => handleWorld(m)}
            className={`btn btn--outline ${styles.worldBtn}`}
            aria-label={`Ir a ${m.label}`}
          >
            <span className={styles.label}>{m.label}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
