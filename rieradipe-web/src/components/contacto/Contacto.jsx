import { useState } from "react";
import styles from "./Contacto.module.css";
import Seo from "../seo/Seo";
import { API_URL } from "../../services/api";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    source: "web",
  });
  const [status, setStatus] = useState("");
  const [albaPosition, setAlbaPosition] = useState(0);
  const [albaScale, setAlbaScale] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setAlbaPosition((prev) => (prev + 5) % 50);
    setAlbaScale(1.1);
    setTimeout(() => setAlbaScale(1), 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("¡Gracias! Tu mensaje se ha enviado correctamente.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
          source: "web",
        });
      } else {
        setStatus("Error al enviar el formulario. Intenta de nuevo.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error de conexión. Intenta de nuevo pasados unos minutos.");
    }
  };

  return (
    <section className={styles.formContainer} aria-labelledby="contact-title">
      <Seo
        title="Contacto | Rieradipe"
        description="Ponte en contacto con Rieradipe para consultas, proyectos o colaboraciones en desarrollo web y ciberseguridad."
        image="/img/AlbaFactieContacto.png"
      />

      <h2 id="contact-title" className="sr-only">
        Formulario de contacto
      </h2>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.row}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.row}>
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.buttonForm}>
          Enviar
        </button>
      </form>

      {status && (
        <p role="status" className={styles.statusMessage}>
          {status}
        </p>
      )}
    </section>
  );
};

export default Contacto;
