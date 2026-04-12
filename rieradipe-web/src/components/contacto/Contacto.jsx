import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Contacto.module.css";
import Seo from "../seo/Seo";
import { sendContact } from "../../services/api";

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
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (location.state) {
      setFormData((prev) => ({
        ...prev,
        subject: location.state.subject || prev.subject,
        message: location.state.message || prev.message,
      }));
    }
  }, [location.state]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendContact(formData); // fetch al backend
      // Comprobamos que la respuesta indique éxito
      if (res.success || res.status === 201) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
          source: "web",
        });
        setStatus("");
        setModalOpen(true);
      } else {
        setStatus("Error al enviar el formulario. Intenta de nuevo.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error de conexión. Intenta de nuevo pasados unos minutos.");
    }
  };

  const closeModal = () => setModalOpen(false);

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

      {/* Modal de éxito */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <img
                src="/img/AlbaFactieQA.png"
                alt="AlbaFactie"
                className={styles.modalImage}
              />
              <h3>¡Gracias por tu mensaje!</h3>
            </div>
            <p>
              Hemos recibido tu mensaje correctamente. En breve nos pondré en
              contacto contigo.
            </p>
            <button
              className={styles.modalButton}
              onClick={closeModal}
              autoFocus
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacto;
