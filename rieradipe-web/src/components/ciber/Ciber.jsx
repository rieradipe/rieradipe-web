import React, { useEffect, useState } from "react";
import styles from "./Ciber.module.css";
import Seo from "../seo/Seo";

export default function Ciber() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "minimal");

    fetch("/ciber/index.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar /ciber/index.json");
        }
        return res.json();
      })
      .then((data) => {
        setTabs(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Error cargando los laboratorios");
      });
  }, []);

  if (error) {
    return <div className={styles.empty}>{error}</div>;
  }

  if (!tabs.length) {
    return <div className={styles.empty}>Cargando laboratorios…</div>;
  }

  const current = tabs[activeTab];

  const getAlbaMessage = (folder) => {
    const f = (folder || "").toLowerCase().trim();

    switch (f) {
      case "autenticacion":
        return "🔐 En este mundo aprenderás cómo se explotan los fallos de login, bloqueo de cuentas y autenticaciones inseguras.";

      case "sqlinjection":
        return "💉 Las inyecciones SQL son muy comunes. Descubre cómo prevenirlas con consultas preparadas y validación.";

      case "fileinclusion":
        return "📂 La inclusión insegura de archivos puede filtrar código o datos sensibles. Aprende a blindar rutas y loaders.";

      case "fileupload":
        return "⬆️ Validar bien las subidas es clave. Evita que ejecuten código y aísla la carpeta de uploads.";

      case "xss":
      case "crosssitescripting":
        return "🐞 El XSS permite ejecutar scripts en el navegador de la víctima. Escapa, sanitiza y usa CSP.";

      default:
        return "🧠 Material extra: reflexiones, Docker y mejoras de laboratorio.";
    }
  };

  return (
    <main className={`container section ${styles.pageCiber}`}>
      <Seo
        title="Ciberseguridad | Alba Factie"
        description="Explora laboratorios prácticos de ciberseguridad"
        image="/img/AlbaFactieCiber.png"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img
            src="/img/AlbaFactieCiber.png"
            alt="AlbaFactie"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroText}>
          <h1>
            👋 ¡Hola, soy <strong>AlbaFactie</strong>!
          </h1>
          <p>
            Bienvenido al universo de los{" "}
            <strong>mundos de ciberseguridad</strong>.
          </p>
          <p>
            Cada laboratorio es una misión real para aprender ataque y defensa.
          </p>
        </div>
      </section>

      {/* TABS */}
      <nav className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            key={t.mundo}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`${styles.tab} ${
              i === activeTab ? styles.tabActive : ""
            }`}
          >
            {t.mundo}
          </button>
        ))}
      </nav>

      <p className={styles.albaIntro}>{getAlbaMessage(current.carpeta)}</p>

      {/* LABS */}
      <section>
        <h2 className={styles.worldTitle}>{current.mundo}</h2>

        <div className={styles.grid}>
          {current.labs.map((lab) => {
            const pdfPath = current.carpeta
              ? `/ciber/${current.carpeta}/${lab.archivo}`
              : `/ciber/reflexiones/${lab.archivo}`;

            return (
              <article key={lab.id} className={`${styles.labCard} card`}>
                <h3>{lab.titulo}</h3>
                <p className={styles.tags}>Tags: {lab.tags.join(", ")}</p>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.pdfBtn}
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
