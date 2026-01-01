// src/services/api.js

export const API_URL = import.meta.env.VITE_API_URL || "";

/* =========================
   CONTACTO PÚBLICO
========================= */
export const sendContact = async (data) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

/* =========================
   MENSAJES
========================= */
export const getMessages = async () => {
  const response = await fetch(`${API_URL}/api/messages`);
  return response.json();
};

/* =========================
   NOTAS
========================= */
// Obtener todas las notas
export const getAllNotes = async () => {
  const response = await fetch(`${API_URL}/api/notes`);
  return response.json();
};

// Obtener notas por thread
export const getNotesByThread = async (threadId) => {
  const response = await fetch(`${API_URL}/api/notes/${threadId}`);
  return response.json();
};

// Crear nota en un thread
export const createNote = async (threadId, body) => {
  const response = await fetch(`${API_URL}/api/notes/${threadId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
  return response.json();
};

// Eliminar nota
export const deleteNote = async (noteId) => {
  const response = await fetch(`${API_URL}/api/notes/${noteId}`, {
    method: "DELETE",
  });
  return response.json();
};

/* =========================
   CONTACTOS ADMIN
========================= */
// Obtener todos los contactos
export const getAllContacts = async (token) => {
  const response = await fetch(
    `${API_URL}/panel-secreto-7f4d2a1b/api/admin/contacts`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) throw new Error("No se pudieron cargar los contactos");
  return await response.json();
};

// Obtener contacto por ID
export const getContactById = async (id) => {
  const response = await fetch(
    `${API_URL}/panel-secreto-7f4d2a1b/api/admin/contacts/${id}`
  );
  return response.json();
};

// Actualizar contacto
export const updateContact = async (id, data) => {
  const response = await fetch(
    `${API_URL}/panel-secreto-7f4d2a1b/api/admin/contacts/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

// Eliminar contacto
export const deleteContact = async (id) => {
  const response = await fetch(
    `${API_URL}/panel-secreto-7f4d2a1b/api/admin/contacts/${id}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};

// Obtener contacto completo: contacto + hilos + notas
export const getFullContact = async (id) => {
  const response = await fetch(
    `${API_URL}/panel-secreto-7f4d2a1b/api/admin/contacts/${id}/full`
  );
  return response.json();
};
