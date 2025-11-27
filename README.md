# IndyTech

## Descripción del Proyecto

IndyTech es un proyecto web desarrollado con **React** y **Vite**, pensado para crear páginas interactivas y modernas conectadas a **Firebase** como base de datos en tiempo real.  
El objetivo es ofrecer una experiencia dinámica en la web, con manejo de rutas, datos y componentes interactivos, todo en un entorno rápido de desarrollo y build.

---

## Tecnologías Utilizadas

- **React.js:** Biblioteca principal para construir la interfaz.
- **Vite:** Entorno de desarrollo y bundler rápido.
- **React Router DOM:** Manejo de navegación entre páginas.
- **Firebase (Firestore):** Base de datos en tiempo real y backend as a service.
- **CSS3:** Estilos básicos y diseño responsivo.
- **Vercel:** Para el deploy en producción.

---

## Funcionalidades Implementadas

- **Rutas y Navegación:** Varias páginas conectadas con React Router.
- **Componentes Dinámicos:** Contenido interactivo que responde a acciones del usuario.
- **Conexión a Firebase:** Lectura y escritura de datos en tiempo real sin exponer credenciales sensibles.
- **Diseño Responsivo:** Adaptable a móviles, tablets y escritorio.
- **Favicon personalizado:** Icono propio en la pestaña del navegador.

---

## Guía de Instalación y Ejecución

1. **Requisitos Previos:** Tener instalado Node.js y npm globalmente.

2. **Clonar el Repositorio:**

```bash
git clone https://github.com/InnaDellamea/NavegaLasRutas-Dellamea.git
cd IndyTech
Instalación de Dependencias:

bash
Copiar código
npm install
Configuración de Firebase: Asegúrate de que src/firebase.js tenga tus credenciales de Firebase.

No es necesario subir credenciales privadas al repositorio; la app solo necesita las keys públicas para conectarse.

Iniciar la Aplicación:

bash
Copiar código
npm run dev
La aplicación estará disponible en http://localhost:5173.

Deploy
El proyecto está listo para deploy en Vercel u otros servicios de hosting estático.

La base de datos en Firebase permanece en la nube y se conecta mediante src/firebase.js, por lo que no se pierde al subir el proyecto a GitHub o al deployar.

¡Gracias por visitar este proyecto! Desarrollado  por Inna Dellamea

```
