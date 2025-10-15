import React from "react";
import styles from "./CodigoMundos.module.css";
import CodigoMundos from "./CodigoMundos";

export default function CodigoMundoComp() {
  return (
    <section className={styles.worldSection}>
      {/* === HERO CON ALBAFACTIE === */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Mis mundos en Código.</h1>
          <p className={styles.heroDesc}>
            En este mundo, <strong>AlbaFactie</strong> te enseña el arte de la
            programación: cómo cada línea de código crea algo nuevo, desde
            interfaces encantadoras hasta potentes motores que hacen funcionar
            la web.
          </p>
        </div>

        {/* Imagen desde /public/img */}
        <img
          src="/img/AlbaFactieCodigo.png"
          alt="AlbaFactie enseñando programación"
          className={styles.heroImg}
        />
      </div>

      {/* === TARJETAS DE LOS MUNDOS === */}
      <CodigoMundos />
    </section>
  );
}
