# 📰 React Web de Noticias

Este es un mini proyecto desarrollado con **React** para gestionar noticias personalizadas. Incluye funcionalidades como creación, almacenamiento y visualización de noticias usando **React Context**, **useReducer**, **localStorage** y **SASS** con arquitectura 7-1.

## 🔧 Estructura de carpetas

react-web-noticias/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── styles/         # Estilos en SASS (patrón 7-1)
│   ├── components/         # Header y Footer
│   ├── context/            # GlobalState y AppReducer
│   ├── pages/              # Home.jsx, Form.jsx, ListNews.jsx
│   ├── App.jsx             # Rutas y estructura de vistas
│   └── main.jsx            # Punto de entrada principal
├── .gitignore
├── eslint.config.js
├── index.html              # HTML base de Vite
├── package.json
├── package-lock.json
├── README.md               # Documentación del proyecto
└── vite.config.js          # Configuración de Vite


## 🧠 Objetivos del proyecto

- Aprender a estructurar una aplicación en React.
- Implementar rutas con React Router.
- Usar `Context` y `useReducer` para manejar estado global.
- Almacenar y recuperar datos usando `localStorage`.
- Aplicar estilos profesionales con SASS (arquitectura 7-1).
- Mejorar el diseño y hacerlo responsive.

## 🚀 Tecnologías utilizadas

- React 18+
- React Router DOM
- React Context + useReducer
- SASS (SCSS)
- localStorage
- Vite

## 📚 Funcionalidades

### 📌 `/home`

Página de bienvenida con explicación y navegación.

### 📝 `/form`

Formulario para crear una nueva noticia.  
✔️ Valida campos  
✔️ Guarda en localStorage  
✔️ Redirige a la lista

### 📄 `/list`

Lista de todas las noticias creadas.  
✔️ Usa estado global (`Context`)  
✔️ Muestra título y contenido en tarjetas

## 🎨 Estilos

- SASS con patrón **7-1**
- Variables, anidamiento, separación por componentes y vistas
- Diseño responsive básico
- Footer fijo abajo y contenido centrado

## ✅ Extras completados (1.2 del ejercicio)

✔️ Buen diseño  
✔️ Responsive  
✔️ README excelente 😎

## 🧑‍💻 Autor

**Elida Rodríguez**  
Desarrolladora Web en formación  
Proyecto realizado en el Bootcamp de The Bridge - Full Stack Web Developer
