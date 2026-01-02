import React, { useEffect, useState } from "react";
import styles from "./Ciber.module.css";
import worlds from "/ciber/index.json"; // index.json en public/ciber
import Seo from "../seo/Seo";

export default function Ciber() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = worlds || [];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "minimal");
  }, []);

  if (!tabs.length) {
    return <div className={styles.empty}>No hay laboratorios disponibles.</div>;
  }

  const current = tabs[activeTab];

  const getAlbaMessage = (folder) => {
    switch (folder) {
      case "autenticacion":
        return "🔐 En este mundo aprenderás cómo se explotan los fallos de login, bloqueo de cuentas y autenticaciones inseguras.";
      case "sqlInjection":
        return "💉 Las inyecciones SQL son muy comunes. Descubre cómo prevenirlas con consultas preparadas y validación.";
      case "fileInclusion":
        return "📂 La inclusión insegura de archivos puede filtrar código o datos sensibles. Aprende a blindar rutas y loaders.";
      case "fileUpload":
        return "⬆️ Validar bien las subidas es clave. Evita que ejecuten código y aísla la carpeta de uploads.";
      case "xss":
        return "🐞 El XSS permite ejecutar scripts en el navegador de la víctima. Escapa, sanitiza y usa CSP.";
      default:
        return "🧠 Material extra: reflexiones, Docker y mejoras de laboratorio.";
    }
  };

  return (
    <main className={`container section ${styles.pageCiber}`}>
      <Seo
        title="Ciberseguridad | Alba Factie"
        description="Explora laboratorios prácticos de SQL Injection, Autenticación, File Upload y más."
        keywords="ciberseguridad, hacking ético, SQL injection, Alba Factie"
        image="/img/AlbaFactieCiber.png"
      />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img
            src="/img/AlbaFactieCiber.png"
            alt="AlbaFactie, guía de los mundos de ciberseguridad"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroText}>
          <h1>
            👋 ¡Hola, soy <strong>AlbaFactie</strong>!
          </h1>
          <p>
            Bienvenido al universo de los{" "}
            <strong>mundos de ciberseguridad</strong>. Cada laboratorio es una
            misión real para entender cómo se vulneran y protegen las
            aplicaciones web.
          </p>
          <p>
            Explora cada mundo y descubre técnicas de ataque y defensa
            explicadas paso a paso. 🌍
          </p>
        </div>
      </section>

      <nav className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            key={t.mundo}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`${styles.tab} ${
              i === activeTab ? styles.tabActive : ""
            }`}
            aria-pressed={i === activeTab}
          >
            {t.mundo}
          </button>
        ))}
      </nav>

      <p className={styles.albaIntro}>{getAlbaMessage(current.carpeta)}</p>

      <section>
        <h2 className={styles.worldTitle}>{current.mundo}</h2>
        <div className={styles.grid}>
          {current.labs.map((lab) => {
            const pdfPath = lab.archivo.startsWith("/")
              ? lab.archivo
              : `/ciber/${current.carpeta ? current.carpeta + "/" : ""}${
                  lab.archivo
                }`;

            return (
              <article key={lab.id} className={`${styles.labCard} card`}>
                <h3>{lab.titulo}</h3>
                <p className={styles.tags}>Tags: {lab.tags.join(", ")}</p>
                <a
                  className={styles.pdfBtn}
                  href={pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Descargar PDF: ${lab.titulo}`}
                >
                  Descargar PDF
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
