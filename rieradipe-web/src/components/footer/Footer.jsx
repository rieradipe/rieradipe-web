import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} rieradipe - Todos los derechos reservados
        </p>
        <nav className={styles.links} aria-label="Enlaces de pie de página">
          <a
            href="https://github.com/rieradipe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github de rieradipe (se abre en una pestaña nueva"
            className={styles.link}
          >
            Github
          </a>
          <span className={styles.dot} aria-hidden="true">
            •
          </span>
          <a
            href="https://www.linkedin.com/in/rieradipe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de rieradipe"
            className={styles.link}
          >
            LinkedIn
          </a>
          <span className={styles.dot} aria-hidden="true">
            •
          </span>
          <a
            href="mailto:rieradipe@gmail.com"
            className={styles.link}
            aria-label="Enviar correo a rieradipe@gmail.com"
          >
            rieradipe@gmail.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
