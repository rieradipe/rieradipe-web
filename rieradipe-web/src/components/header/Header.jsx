import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [active, setActive] = useState("/");

  const handleNav = (path) => {
    setActive(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img
            className={styles.logo}
            src="/img/logoRieradipe.svg"
            alt="Rieradipe Logo"
          />
        </Link>

        <nav className={styles.navDesktop}>
          <Link
            to="/servicios"
            onClick={() => handleNav("/servicios")}
            aria-current={active === "/servicios" ? "page" : undefined}
          >
            Servicios
          </Link>

          <Link
            to="/contacto"
            onClick={() => handleNav("/contacto")}
            className={styles.cta}
            aria-current={active === "/contacto" ? "page" : undefined}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
