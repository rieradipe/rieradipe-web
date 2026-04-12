import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        return "🔐 Aquí analizo problemas reales de autenticación: logins inseguros, bloqueo de cuentas, MFA mal implementado e IDOR. El objetivo es entender cómo proteger correctamente el acceso a una aplicación.";

      case "sqlinjection":
        return "💉 En estos laboratorios se explora cómo una inyección SQL puede comprometer datos y lógica de negocio, y qué técnicas aplicar para evitarlo en backend.";

      case "fileinclusion":
        return "📂 Aquí se estudian vulnerabilidades de inclusión de archivos, como path traversal o uso inseguro de rutas. Se analiza tanto la explotación como su prevención.";

      case "fileupload":
        return "⬆️ Estos casos muestran cómo una subida mal validada puede convertirse en una puerta de entrada al sistema. Se trabajan estrategias de validación y aislamiento.";

      case "xss":
      case "crosssitescripting":
        return "🐞 En este bloque se analiza cómo el XSS permite ejecutar scripts en el navegador de la víctima y qué medidas aplicar para evitarlo: escape de salida, sanitización y CSP.";

      default:
        return "🧠 Este apartado recoge reflexiones, problemas encontrados y mejoras aplicadas durante el proceso de aprendizaje.";
    }
  };

  return (
    <main className={`container section ${styles.pageCiber}`}>
      <Seo
        title="Ciberseguridad | Rieradipe"
        description="Explora laboratorios prácticos de ciberseguridad y aprende cómo se detectan, explotan y previenen vulnerabilidades web."
        image="/img/AlbaFactieCiber.png"
      />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img
            src="/img/AlbaFactieCiber.png"
            alt="AlbaFactie en el mundo de ciberseguridad"
            className={styles.heroImg}
          />
        </div>

        <div className={styles.heroText}>
          <h1>
            👋 ¡Hola, soy <strong>AlbaFactie</strong>!
          </h1>

          <p>
            Aquí analizo{" "}
            <strong>vulnerabilidades reales en aplicaciones web</strong>: desde
            fallos de autenticación hasta inyecciones o ejecución de código.
          </p>

          <p>
            No se trata solo de atacar, sino de entender cómo proteger un
            proyecto antes de que esos fallos se conviertan en un problema real.
          </p>

          <Link
            to="/contacto"
            state={{
              subject: "Revisión de seguridad web",
              message:
                "Hola, quiero revisar la seguridad de una aplicación web y me gustaría hablar contigo.",
            }}
            className={styles.ctaButton}
          >
            Revisemos tu proyecto
          </Link>
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
          >
            {t.mundo}
          </button>
        ))}
      </nav>

      <section className={styles.introBox}>
        <p className={styles.albaIntro}>{getAlbaMessage(current.carpeta)}</p>
      </section>

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

      <section className={styles.finalCta}>
        <p className={styles.finalCtaText}>
          La seguridad no empieza cuando algo falla, sino cuando se revisa a
          tiempo. Si quieres analizar tu proyecto o reforzar una aplicación web,
          podemos verlo juntas.
        </p>

        <Link
          to="/contacto"
          state={{
            subject: "Ciberseguridad web",
            message:
              "Hola, quiero analizar la seguridad de una aplicación web y me gustaría hablar contigo.",
          }}
          className={styles.finalCtaButton}
        >
          Hablar sobre seguridad
        </Link>
      </section>
    </main>
  );
}
