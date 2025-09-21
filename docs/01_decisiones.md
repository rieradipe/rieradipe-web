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

## 5. Estructura de la web

### 5.1 Concepto narrativo

La web es una travesia por el universo **Rieradipe**: cada **planeta** representa un proyecto o área de aprendizaje.
Objetivo: explicar **qué hice, por qué y cómo**, con foco en decisiones técnicas, seguridad y resultados.

Estados de los planetas: -**Aprendiendo** planetas pequeños en crecimiento. -**En construcción** proyecto en curso. -**Completado** caso de estudio cerrado.

### 5.2 Páginas principales. Rutas y próposito

-**`/`Home -- Mapa galáctico**
Resumen, CTA a ver planetas y contacto. -**`/planetas` --Índice de proyectos**
Grid con filtros (stack, dificultad, estado) -**`/planetas/:slug` Caso de estudio**
Plantilla con: contexto, rol, arquítectura, decisiones, seguridad, retos, resultados, próximos pasos y links( demo/código). -**`/misiones` Ciberseguridad**
Laboratorios (OWASAP top 10) + cómo mitigarlos + aplicaciones en mis proyectos. -**`sobre-mi`**
Bio breve, CV (PDF), LinkedIn, GitHub, stack y "como trabajo". -**`contacto`**
Formulario con consentimiento GDPR, guardado en BBDD y confirmación por email. -**`/carta`**
Precios/tiempos orientativos (nota legal). -**`/panel`privado**
Leads, consentimientos, testimonios(moderación).
**(Opcional) `/equipo` Experiencia en equipo**
Proyectos colaborativos + testimonios ("voces de la tripulación").

### 5.3 Escalabilidad de contenidos.

-**Fuente de verdad**:lista de planetas en contenido **MDX** (MVP) con opción de migración futura a **CMS/BD**
-Autoindexado: el Home y `/planetas` **se generan** leyendo el índice de contenidos( sin tocar código).
-Añadir un planeta = crear archivo MDX + portada -> aparece en Home, listado y detalle automáticamente.

### 5.4 Modelo mínimo del planeta

Campos del front-matter MDX:

```yaml
slug: pickmebylolas
title: PicmeByLolas
difficulty: 3
stack: ["React", "Vite"]
status: "V1"  #MVP | V1| WIP
tipo: "proyecto" # proyecto | #proyecto | aprendizaje | colaborativo
badge: "Completado" # Aprendiendo | En construcción | Completado
cover: /imagenes/planets/pickme.png
summary: "Mapa interactivo + carrito + SOS QR"
links:
    demo: "https://..."
    repoFront: "https://github.com/rieradipe/..."
    repoBack: "https://github.com/rieradipe/.."

Cuerpo recomendado de MDX:
1. Contexto y objetivo
2. Rol y responsabilidades
3. Arquitectura (diagrama simple)
4. Decisiones clave (frontend, backend, seguridad)
5. Seguridad (front vs back)
6. Retos y cómo se resolvieron
7. Resultados (métricas/lighthuse/accesibilidad)
8. Próximos pasos
9. Links (demo/repos/docs)
```

### 5.5 Accesibilidad y rendimiento (mínimos de página)

-Accesibilidad AA, foco visible y navegación por teclado.
-LCP <2.5s, imágenes optimizadas, fuentes con display: swap.
-SEO básico por página(title, description, OG).

## 6. Datos y privacidad (GDPR)

### 6.1 Cumplimineto GDPR

El proyecto recopilará y almacenará datos ersonales (email, teléfono, necesidades expresadas en el formulario).
Por ello, se aplican los principios de la normativa europea (GDPR):

-**Consentimiento explícito**: checkbox obligatorio en el formulario de contacto con enlace a la política de privacidad. -**Minimización**: se solicita únicamente la información imprescindible para iniciar el contacto. -**Transpariencia**: se informará al usuario sobre qué datos se guardan, con qué finalidad y durante cuánto tiempo. -**Derechos de los usuarios**: se explicaará como ejercer acceso, rectificación o elimanación. -**Seguridad**: comunicación en HTTPS y cifrado en base de datos(ej. almacenamiento cifrado de teléfono).

### 6.2 Tablas de soporte

Se crearán tablas específicas para cumplir con la trazabilidad y el consentimiento:

-**`contactos`** -> información de contacto básica y necesidades del usuario. -**`consentimientos`** -> registro del consentimiento dado por cada lead, con fecha/hora. -**`opiniones`** -> comentarios u opiniones sobre proyectos/experiencias. -**`historial de contactos`** -> histórico de interacciones con un lead (ej. envíos de correo, actualizaciones).

### 6.3 Política de privacidad

Se añadirá una página dedicada (`/privacidad`) con:
-Finalidad del tratamiento de datos.
-Tiempo de conservación.
-Ejercicio de derechos GDPR.
-Correo electrónico de referencia para consultas.
-Contacto responsable (email de referencia).

### 6.4 Notas técnicas

-Los consentiemientos se guardarán con **timestamp** y `lead_id`.
-Los correos se enviarán usando un servicio externo de medidas de seguridad (ej. SMTP seguro)
-La base de datos se desplegará en entorno seguro (con backup periódico).
