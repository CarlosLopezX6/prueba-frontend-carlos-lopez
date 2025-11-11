# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Prueba Técnica - Desarrollador Frontend - React - Carlos López

Prueba Técnica de Carlos Francisco López Juárez.

## 🚀 Características

- ⚡ **Vite** - Herramienta de construcción ultrarrápida.
- ⚛️ **React** - Biblioteca de interfaz de usuario.
- 📘 **TypeScript** - Tipado estático para mayor robustez y mantenibilidad.
- 🎨 **Tailwind CSS** - Framework de diseños utility-first.
- 📱 **Diseño Responsivo** - Adaptable a todos los dispositivos.
- 🎯 **Componentes Reutilizables** - Arquitectura componentizada siguiendo buenas prácticas.
- 📝 **React Hook Form** - Gestión eficiente de formularios con rendimiento optimizado.
- ✅ **Zod** - Validación de esquemas con TypeScript-first para formularios seguros.
- 🔄 **Drag and Drop** - Funcionalidad con `dnd-kit`.
- 🎭 **Iconos** - Integración con `lucide-react`.
- ⚡ **Lazy Loading** - Carga perezosa entre páginas para optimizar rendimiento.
- 🔔 **Notificaciones** - Sistema de notificaciones con `sonner`.
- ⏳ **Skeleton Loaders** - Indicadores de carga para mejor UX..

## 🛠️ Tecnologías y Librerías

### Core
- React 19+
- Vite

### Styling
- Tailwind CSS (con ordenamiento de clases optimizado).

### Librerías Externas
- **lucide-react** - Iconos ligeros y modernos.
- **dnd-kit** - Solución de drag and drop performante.
- **sonner** - Librería ligera para notificaciones toast.
- **React Router** - Para el enrutamiento.

## 📋 Requisitos Previos

Asegúrate de tener instalado en tu sistema:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/CarlosLopezX6/prueba-frontend-carlos-lopez
cd <nombre-del-proyecto>
```

2. Instala las dependencias:
```bash
npm install
```

## 🚀 Ejecución

### Modo Desarrollo

Para ejecutar la aplicación en modo de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

### Modo Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Para previsualizar la build de producción:

```bash
npm run preview
```

## 💡 Buenas Prácticas Implementadas

### Componentización
- Componentes pequeños y reutilizables.
- Separación de lógica y presentación.

### Tailwind CSS
- Clases ordenadas siguiendo convenciones.
- Uso de utilities de forma consistente.
- Responsive design mobile-first.

### Performance
- Lazy loading de rutas.
- Skeleton loaders para mejor percepción de carga.
- Librerías ligeras y optimizadas.
- Code splitting automático con Vite.

### Experiencia de Usuario
- Notificaciones intuitivas con Sonner.
- Feedback visual en todas las interacciones.
- Interfaces drag and drop fluidas.

## 📦 Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción
npm run lint         # Ejecuta el linter (si está configurado)
```








