import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Menu({ open, onToggle, className = "", ...rest }) {
  return (
    <button
      type="button"
      className={className}
      onClick={onToggle}
      aria-expanded={open}
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      {...rest}
    >
      <FontAwesomeIcon icon={open ? faXmark : faBars} />
    </button>
  );
}
