import { useState } from "react";
import styles from "./Header.module.css";
import logoRieradipe from "../../img/logoRieradipe.svg";

export default function Header() {
  const [active, setActive] = useState("#proyectos");

  const handleNav = (hash) => {
    setActive(hash);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="Inicio">
          <img
            className={styles.logo}
            src={logoRieradipe}
            alt="Rieradipe Logo"
          />
        </a>

        {/* Menú siempre visible */}
        <nav className={styles.navDesktop} aria-label="Navegación principal">
          <a
            href="#proyectos"
            onClick={() => handleNav("#proyectos")}
            aria-current={active === "#proyectos" ? "page" : undefined}
          >
            Proyectos
          </a>
          <a
            href="#qa"
            onClick={() => handleNav("#qa")}
            aria-current={active === "#qa" ? "page" : undefined}
          >
            QA
          </a>
          <a
            href="#ciber"
            onClick={() => handleNav("#ciber")}
            aria-current={active === "#ciber" ? "page" : undefined}
          >
            Ciberseguridad
          </a>
          <a
            href="#contacto"
            onClick={() => handleNav("#contacto")}
            className={styles.cta}
            aria-current={active === "#contacto" ? "page" : undefined}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
