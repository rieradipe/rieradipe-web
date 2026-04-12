import React from "react";
import { Link } from "react-router-dom";
import styles from "./CodigoMundos.module.css";
import CodigoMundos from "./CodigoMundos";
import Seo from "../seo/Seo";

export default function CodigoMundosComp() {
  return (
    <section className={styles.worldSection} aria-labelledby="codigo-title">
      <Seo
        title="Código | RieraDiPe"
        description="Explora proyectos reales de desarrollo web, frontend y backend creados para transformar ideas en soluciones funcionales."
        keywords="desarrollo web, frontend, backend, proyectos reales, portfolio, Rieradipe"
        image="/img/AlbaFactieCodigo.png"
      />

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <h1 id="codigo-title" className={styles.heroTitle}>
            Desarrollamos webs reales: de la idea al código funcional
          </h1>
          <p className={styles.heroDesc}>
            En este mundo, <strong>AlbaFactie</strong> te muestra cómo convertir
            ideas en proyectos web reales: desde interfaces claras y atractivas
            hasta lógica backend capaz de sostener aplicaciones funcionales.
          </p>
          <p className={styles.heroDesc}>
            Aquí encontrarás ejemplos de desarrollo con intención: código que no
            solo funciona, sino que también mejora la experiencia de usuario,
            organiza procesos y da forma a soluciones útiles.
          </p>
          <p className={styles.heroLead}>
            Explora algunos proyectos y descubre cómo trabajo.
          </p>
        </div>

        <figure className={styles.heroImgWrap}>
          <img
            src="/img/AlbaFactieCodigo.png"
            alt="AlbaFactie enseñando programación"
            className={styles.heroImg}
          />
        </figure>
      </header>
      {/* TARJETAS DE LOS MUNDOS */}
      <CodigoMundos />
      <section
        className={styles.ctaBox}
        aria-label="Llamada a la acción desarrollo web"
      >
        <p className={styles.ctaText}>
          ¿Tienes una idea o necesitas mejorar una aplicación web existente?
          Puedo ayudarte a convertirla en un proyecto funcional.
        </p>

        <Link
          to="/contacto"
          state={{
            subject: "Desarrollo web",
            message:
              "Hola, quiero crear o mejorar una aplicación web y me gustaría hablar contigo.",
          }}
          className={styles.ctaButton}
        >
          Hablemos de tu proyecto
        </Link>
      </section>
    </section>
  );
}
