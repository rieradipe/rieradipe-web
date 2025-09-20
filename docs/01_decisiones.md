# Proyecto Rieradipe — Documento de decisiones

## Introducción

Este documento recoge las decisiones iniciales de arquitectura, repos y ramas.

## 1. Objetivo del documento

Explicar qué es este archivo, por qué existe y cómo servirá para guiar el desarrollo.

## 2. Contexto inicial

-Proyecto personal/porfolio
-Uso profesional
-Web principal + API

## 3. Decisiones estratégicas

### 3.1 Nombre y alcance

-El proyecto es **Rieradipe**
-Objetivo principal: mostrar mis capacidades técnicas a través de un porfolio web y una Api, con la finalidad
de dedicarme profesionalmente al desarrollo y la ciberseguridad.

### 3.2 Público objetivo

-Profesionales de RRHH y recluters que buscan perfiles junior con potencial.
-Equipos técnicos (developers, QA, ciberseguridad) que quieran evaluar mis capacidades reales.
-Profesores y mentores, como referencia de mi evolución y forma de trabajar.
-Contactos profesionales de Linkedin o Github que lleguen al porfolio y quieran una visión completa de mis proyectos.

### 3.3 Idioma

-El idioma principal del proyecto será **español** tanto en el código como en la documentación y en la interfaz de la aplicación.
-Justificación: refuerza mi identidad profesional y facilita que el porfolio sea accesible para el mercado laboral al que me dirijo actualmente.
-Futuro: se prevé añadir **i18n** (internalización) para disponer también de versión en catalan, y mas adelante, inglés.

### 3.4 Repositorios

-**`rieradipe-web`**
Contiene el frontend y la documentación oficial del proyecto.
Incluye: -`docs/`--> Decisiones, diseño visual, etc. -`content/`--> Planetas en MDX -`src/` --> Código React

-**`rieradipe-api`**
Contiene el backend y las migraciones de base de datos.
Incluye:
-Código en Spring Boot --> controladores, servicios, repositorios.
-Migraciones con Flyway en `src/main/resources/db/migracion/`.
-README técnico con instrucciones de arranque.
-Repo privado hasta que supere el checklist de seguridad.
**Justificación**: separar frontend y backend permite despliegue independientes; Vercel para Web/ Railway para la API, y mantiene el código organizado.

### 3.5 Visibilad

**`rieradipe-web`** --> **Público**
Justificación: es la parte del porfolioque quiero mostrar al mundo(proyectos, planetas, sobre mí, carta de precios, contacto).
Será accesible en GitHub y desplegado en Vercel.

**`rieradipe-api`** --> **Privado**
Justificación: contiene lógica sensible( seguridad, base de datos, autenticación) y no es necesario exponerlo públicamente.
Se utilizará solo para consumo interno desde la web.

> Esta decisión busca equilibro: máxima visibilidad en la parte de presentación (frontend), máxima seguridad en la parte de datos (backend).

## Gestión de ramas

### 4.1 Rama principal

-**`main`** será la rama estable y protegida.

- No se trabajará directamente sobre ella: todos los cambios llegarán mediante **Pull Request (PR)**
- Protecciones activas:
  - Requiere PR antes de hacer merge.
  - Bloqueo de `force push` y de elimación.
  - (aprobación NO OBLIGATORIA mientras trabajo sola).

### 4.2 Ramas iniciales

Se han definido las siguientes ramas base para organizar el trabajo:

- `docs/decisiones`-> documentación inicial del proyecto.
- `frontend/...`-> desarrollo del frontend.
- `backend/...`-> desarrollo del backend y API.

### 4.3 Flujo de trabajo

1. **Crear rama** desde `main`para un tema concreto.
2. **Commits pequeños y frecuentes** Conventional Commits: `docs:`, `feat:`, `fix:`, `refactor:`.
3. **Abrir PR** hacia la rama base, o directamente a `main`si es una tarea cerrada.
4. **Revisión propia** Trabajo en solitario y **merge**.
5. **Borrar la rama** cuando el PR se fusione.
6. Repetir con la siguiente tarea.

**Ejemplo**:

1. Crear `docs/estructura`.
2. Avanzar documentación.
3. PR -> merge a `docs/decisiones`.
4. Cuando la documentación inicial esté lista, merge final -> `main`.

**Estratégia de merge recomendada:**
-Preferencia por **Squash & merge** historial limpio: 1 commit por PR en main. -**Rebase** opcional si quiero conservar varios commits sin "merge commits".
