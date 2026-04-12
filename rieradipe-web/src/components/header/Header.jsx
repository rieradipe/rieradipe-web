import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [active, setActive] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (path) => {
    setActive(path);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const isHome = location.pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftArea}>
          {!isHome && (
            <button
              onClick={handleBack}
              className={styles.backButton}
              aria-label="Volver"
              type="button"
            >
              <span className={styles.backArrow}>←</span>
              <span>Volver</span>
            </button>
          )}
        </div>

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
