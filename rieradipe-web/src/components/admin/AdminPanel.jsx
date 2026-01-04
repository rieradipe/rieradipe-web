import React, { useState } from "react";

const API_URL = "https://rieradipe-api-kis2.onrender.com";

export default function AdminPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(""); // token solo en memoria
  const [error, setError] = useState("");
  const [contacts, setContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // ---- LOGIN ----
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${API_URL}/panel-secreto-7f4d2a1b/api/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      if (!res.ok) throw new Error("Usuario o contraseña incorrectos");

      const data = await res.json();
      setToken(data.token);

      // cargar contactos
      fetchContacts(data.token);
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  // ---- LOGOUT ----
  const handleLogout = () => {
    setToken("");
    setContacts([]);
    setSelectedContact(null);
    setMessages([]);
  };

  // ---- FETCH CONTACTS ----
  const fetchContacts = async (authToken) => {
    setLoadingContacts(true);
    try {
      const res = await fetch(
        `${API_URL}/panel-secreto-7f4d2a1b/api/admin/contacts`,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      if (!res.ok) throw new Error("Error al obtener contactos");
      const data = await res.json();
      data.sort((a, b) => a.name.localeCompare(b.name));
      setContacts(data);
    } catch (err) {
      console.error(err);
      setContacts([]);
    } finally {
      setLoadingContacts(false);
    }
  };

  // ---- DELETE CONTACT ----
  const handleDeleteContact = async (id) => {
    if (
      !window.confirm("¿Eliminar contacto? Esta acción no se puede deshacer.")
    )
      return;

    try {
      const res = await fetch(
        `${API_URL}/panel-secreto-7f4d2a1b/api/admin/contacts/${id}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
      );
      if (!res.ok) throw new Error("No se pudo eliminar el contacto");

      setContacts(contacts.filter((c) => c.id !== id));
      if (selectedContact?.id === id) {
        setModalOpen(false);
        setSelectedContact(null);
        setMessages([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ---- FETCH MESSAGES ----
  const handleOpenModal = async (contact) => {
    setSelectedContact(contact);
    setModalOpen(true);
    setLoadingMessages(true);

    try {
      const res = await fetch(
        `${API_URL}/panel-secreto-7f4d2a1b/api/admin/messages/${contact.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!res.ok) throw new Error("No se pudieron cargar los mensajes");

      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
      setMessages([]);
    } finally {
      setLoadingMessages(false);
    }
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---- RENDER LOGIN ----
  if (!token) {
    return (
      <div className="admin-login container">
        <h2>Admin Panel - Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Ingresar
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    );
  }

  // ---- RENDER PANEL ----
  return (
    <div className="admin-panel container">
      <h2>Bienvenido al Panel Admin</h2>
      <button
        onClick={handleLogout}
        className="btn btn--ghost"
        style={{ marginBottom: "16px" }}
      >
        Cerrar sesión
      </button>

      <h3>Contactos</h3>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "12px",
          border: "1px solid var(--line)",
          marginBottom: "16px",
          width: "100%",
          maxWidth: "400px",
        }}
      />

      {loadingContacts ? (
        <p>Cargando contactos...</p>
      ) : (
        <div
          className="contacts-grid"
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          {filteredContacts.length > 0 ? (
            filteredContacts.map((c) => (
              <div
                key={c.id}
                className="card contact-card"
                style={{
                  padding: "16px",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: "var(--shadow-2)",
                }}
              >
                <h4>{c.name}</h4>
                <p style={{ fontSize: "0.9em", color: "var(--muted)" }}>
                  {c.email}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    color: "var(--fg-darkblue)",
                    marginTop: "8px",
                  }}
                >
                  {c.lastMessage || "Sin conversaciones aún"}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "12px",
                  }}
                >
                  <button
                    className="btn"
                    style={{ backgroundColor: "var(--accent)" }}
                    onClick={() => handleOpenModal(c)}
                  >
                    Ver conversación
                  </button>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#ff4d4f" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteContact(c.id);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron contactos</p>
          )}
        </div>
      )}

      {/* MODAL */}
      {modalOpen && selectedContact && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => {
            setModalOpen(false);
            setSelectedContact(null);
            setMessages([]);
          }}
        >
          <div
            className="modal-content card"
            style={{
              width: "90%",
              maxWidth: "600px",
              maxHeight: "80%",
              overflowY: "auto",
              padding: "24px",
              background: "rgba(0, 0, 0, 0.9)",
              color: "#fff",
              fontWeight: 600,
              boxShadow: "var(--shadow-3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedContact.name}</h3>
            <p style={{ fontSize: "0.9em", color: "var(--muted)" }}>
              {selectedContact.email}
            </p>

            <div style={{ marginTop: "16px" }}>
              {loadingMessages ? (
                <p>Cargando mensajes...</p>
              ) : messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "12px",
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      paddingBottom: "8px",
                      fontWeight: 500,
                      color: "#f0f0f0",
                    }}
                  >
                    <p>{msg.content}</p>
                    <p style={{ fontSize: "0.8em", color: "var(--muted)" }}>
                      {new Date(msg.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))
              ) : (
                <p>Sin mensajes aún</p>
              )}
            </div>
            <button
              className="btn btn--ghost"
              onClick={() => setModalOpen(false)}
              style={{ marginTop: "16px" }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
