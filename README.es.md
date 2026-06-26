<h1>TECH-SHOP</h1>
<p align="center">
  <img  src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/es.svg" width="20" alt="Español" width="20" alt="English"> <b>Español</b> | 
  <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/br.svg" width="20"  alt="Português"> <a href="/README.pt.md">Português</a> | 
  <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg" width="20" alt="English"> <a href="/README.md">English</a>
</p>
<p align="left">
  <em><code>❯ Una plataforma de comercio electrónico moderna, rápida e intuitiva para la venta de productos tecnológicos.</code></em>
</p>

![tech shop banner](src/assets/screenshots/tech-shop-banner.jpg)

<p align="left">Construido con las herramientas y tecnologías:</p>
<p align="center">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/GitFlow-F34F29.svg?style=flat&logo=git&logoColor=white" alt="GitFlow">
	
</p>
</div>
<br clear="right">

## 🔗 Enlaces Rápidos

- [📍 Descripción General](#-descripción-general)
- [📸 Capturas de Pantalla](#-capturas-de-pantalla)
- [👾 Características](#-características)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [📂 Índice del Proyecto](#-índice-del-proyecto)
- [🚀 Primeros Pasos](#-primeros-pasos)
  - [☑️ Requisitos Previos](#-requisitos-previos)
  - [⚙️ Instalación](#-instalación)
  - [🤖 Uso](#-uso)
- [📈 Próximos Pasos](#-próximos-pasos)
- [🔗 Enlaces y Contactos](#-enlaces-y-contactos)
- [🎗 Licencia](#-licencia)
- [🙌 Agradecimientos](#-agradecimientos)

---

## 📍 Descripción General

<code>❯ TECH-SHOP es una plataforma de comercio electrónico de alto rendimiento para productos tecnológicos. Construido con Vue.js 3, TypeScript, Tailwind CSS y Vite, y alimentado por la API de <a href="https://dummyjson.com/" target="_blank">DummyJSON</a>, el proyecto combina una interfaz fluida y reactiva con un ecosistema seguro y ultrarrápido, garantizando la mejor experiencia de compra para el usuario.</code>

---

## 📸 Capturas de Pantalla

<details>
  <summary>📸 Haz clic para ver las Capturas de Pantalla</summary>
  
  ### Principal
  ![tech-shop-banner](src/assets/screenshots/tech-shop-banner.jpg)

### Detalle del Producto

![tech-shop-product-detail](src/assets/screenshots/tech-shop-product-detail.jpg)

### Carrito Lateral

![tech-shop-side-cart](src/assets/screenshots/tech-shop-side-cart.jpg)

### Carrito Lateral (Vacío)

![tech-shop-side-cart-empty](src/assets/screenshots/tech-shop-side-cart-empty.jpg)

### Página del Carrito

![tech-shop-cart](src/assets/screenshots/tech-shop-cart-page.jpg)

### Página del Carrito (Vacía)

![tech-shop-cart-empty](src/assets/screenshots/tech-shop-cart-page-empty.jpg)

</details>

---

## 👾 Características

- 🛒 **Carrito Avanzado:** Funcionalidad CRUD completa (Agregar, Leer, Actualizar, Eliminar) con actualizaciones en tiempo real.
- 📦 **Gestión de Estado:** Estado global centralizado y optimizado impulsado por **Pinia**.
- 💾 **Almacenamiento Persistente:** Retención de datos para sesiones de usuario e ítems del carrito gestionada a través de **funciones utilitarias** personalizadas para LocalStorage.
- 🔔 **Notificaciones Toast Artesanales:** Un sistema de notificaciones ligero y personalizado, construido totalmente desde cero usando Vue **Composables** para comentarios del usuario en tiempo real.
- 🔢 **Totales Reactivos:** Cálculo automático de subtotales e impuestos directamente a través de la store de estado.
- 🎨 **IU Moderna:** Interfaz limpia y componentizada construida con **Tailwind CSS**.
- 📱 **Totalmente Responsivo:** Diseño mobile-first que se adapta perfectamente a cualquier tamaño de pantalla.
- ⚡ **Rendimiento Optimizado:** Builds de desarrollo y producción ultrarrápidos vía **Vite**, con _lazy loading_ para las rutas principales.
- 🏷️ **Títulos de Página Dinámicos:** Actualizaciones automáticas del título del navegador durante la navegación, gestionadas dinámicamente a través de los meta fields de **Vue Router**.
- 🌿 **Flujo de Trabajo GitFlow:** Proyecto desarrollado utilizando modelos estrictos de ramificación (`main`, `develop`, `feature/*`), garantizando un historial limpio y organización de lanzamientos.

---

## 📁 Estructura del Proyecto

```sh
└── tech-shop/
    ├── README.md
    ├── env.d.ts
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── favicon.svg
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   ├── components
    │   ├── composables
    │   ├── main.ts
    │   ├── router
    │   ├── store
    │   ├── types
    │   ├── utils
    │   └── views
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🚀 Primeros Pasos

### ☑️ Requisitos Previos

Antes de comenzar con tech-shop, asegúrate de que tu entorno de ejecución cumpla con los siguientes requisitos:

- **Entorno de Ejecución:** Node.js (v18.x o superior)
- **Gestor de Paquetes:** npm (v9.x o superior)

### ⚙️ Instalación

Instala tech-shop utilizando uno de los siguientes métodos:

**Compilar desde el código fuente:**

1. Clona el repositorio de tech-shop:

```sh
 git clone https://github.com/wan0805/tech-shop
```

2. Navega al directorio del proyecto:

```sh
 cd tech-shop
```

3. Instala las dependencias del proyecto:

```sh
 npm install
```

### 🤖 Uso

Ejecuta tech-shop utilizando el siguiente comando:
**Utilizando `npm`** &nbsp;

```sh
npm run dev
```

Para compilar el proyecto para producción:

```sh
 npm run build
```

---

## 📈 Próximos Pasos

- [ ] **`Tarea 1`**: Implementar pruebas unitarias utilizando Vitest.

---

## 🔗 Enlaces & Contactos

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wan0805/tech-shop)

[![Live Demo](https://img.shields.io/badge/Live_Demo-4CAF50?style=for-the-badge&logo=google-chrome&logoColor=white)](https://tech-shop-eta-ten.vercel.app/)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wanderson-duarte-a9778711b)

---

## 🎗 Licencia

![GitHub License](https://img.shields.io/github/license/wan0805/tech-shop?style=flat-square)

Este proyecto está bajo la Licencia MIT; consulta el archivo [LICENSE](/LICENSE) para más detalles.

---

## 🙌 Agradecimientos

- [DummyJSON API](https://dummyjson.com/) - Por proporcionar la API REST gratuita y estable con los datos de productos tecnológicos, categorías e imágenes.
- [Vue.js Ecosystem](https://vuejs.org/) - Por la excelente documentación de Vue 3, Pinia y Vue Router.
- [Tailwind CSS Components](https://tailwindcss.com/) - Por las utilidades de diseño que permitieron la creación de una interfaz moderna y responsiva de forma ultrarrápida.
- [Shields.io](https://shields.io/) - Por las insignias (badges) dinámicas y estáticas utilizadas en el diseño de este README.

---
