import { useState } from "react";
import styles from "./Header.module.css";

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
            src="/img/logoRieradipe.svg"
            alt="Rieradipe Logo"
          />
        </a>

        {/* Menú siempre visible */}
        <nav className={styles.navDesktop} aria-label="Navegación principal">
          <a
            href="#servicios"
            onClick={() => handleNav("#servicios")}
            aria-current={active === "#servicios" ? "page" : undefined}
          >
            Servicios
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
