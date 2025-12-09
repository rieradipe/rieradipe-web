import React from "react";
import styles from "./CodigoMundos.module.css";
import CodigoMundos from "./CodigoMundos";
import Seo from "../seo/Seo";

export default function CodigoMundosComp() {
  return (
    <section className={styles.worldSection} aria-labelledby="codigo-title">
      <Seo
        title="Código | Alba Factie"
        description="Explora los proyectos de código, programación y desarrollo web del mundo Código en AlbaFactie."
        keywords="código, programación, desarrollo web, Alba Factie"
        image="/img/AlbaFactieCodigo.png"
      />
      {/* HERO CON ALBAFACTIE */}
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <h1 id="codigo-title" className={styles.heroTitle}>
            Mis mundos en Código.
          </h1>
          <p className={styles.heroDesc}>
            En este mundo, <strong>AlbaFactie</strong> te enseña el arte de la
            programación: cómo cada línea de código crea algo nuevo, desde
            interfaces encantadoras hasta potentes motores que hacen funcionar
            la web.
          </p>
        </div>
        <figure className={styles.heroImgWrap}>
          <img
            src="/img/AlbaFactieCodigo.png"
            alt="AlbaFactie enseñando programación"
            className={styles.heroImg}
          />
          <figcaption className="sr-only">
            AlbaFactie enseñando programación
          </figcaption>
        </figure>
      </header>
      {/* TARJETAS DE LOS MUNDOS */}
      <CodigoMundos />
    </section>
  );
}
