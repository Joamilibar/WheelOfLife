# 🎯 Rueda de la Vida

Herramienta interactiva para evaluar y visualizar el equilibrio en las diferentes áreas de tu vida. Valora del 0 al 10 cada sección y visualiza tus resultados en un gráfico radial.

## ✨ Características

- 🎛️ **8 áreas de vida** con controles deslizantes interactivos
- 📊 **Gráfico radial SVG** con secciones coloreadas por nivel
- 👀 **Mostrar/Ocultar** la rueda con un botón
- 🎨 **Colores diferenciados** para cada área de vida

## 🛠️ Tecnologías

- [React](https://reactjs.org/) 18
- SVG para el gráfico radial
- [Prettier](https://prettier.io/) para formato de código
- [Testing Library](https://testing-library.com/) para tests

## 📁 Estructura del Proyecto

```
src/
├── assets/                          # Recursos estáticos
│   ├── logo-nurvick.png
│   └── logo-nurvick.svg
├── components/
│   └── WheelOfLife/                 # Componente principal
│       ├── index.js                 # Re-export
│       ├── WheelOfLife.jsx          # Orquestador (estado + layout)
│       ├── WheelOfLife.css          # Estilos del componente
│       ├── WheelOfLife.test.jsx     # Suite de tests (11 tests)
│       ├── WheelChart.jsx           # Gráfico SVG completo
│       ├── WheelSection.jsx         # Segmento radial individual
│       ├── WheelLabels.jsx          # Etiquetas de texto en la rueda
│       ├── RatingSliders.jsx        # Controles deslizantes
│       └── wheelConfig.js           # Constantes y configuración
├── App.jsx
├── App.css
├── App.test.jsx
├── index.js
├── index.css
├── reportWebVitals.js
└── setupTests.js
```

## 🚀 Inicio Rápido

### Requisitos previos

- [Node.js](https://nodejs.org/) (v16 o superior)
- npm (incluido con Node.js)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Joamilibar/WheelOfLife.git
cd WheelOfLife

# Instalar dependencias
npm install
```

### Comandos Disponibles

#### `npm start`

Ejecuta la app en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

La página se recarga automáticamente cuando guardas cambios.

#### `npm test`

Ejecuta los tests en modo interactivo.\
Actualmente hay **13 tests** que cubren renderizado, interacción con sliders y la visualización de la rueda.

#### `npm run build`

Genera la versión de producción optimizada en la carpeta `build/`.

#### `npm run eject`

**Nota: esta operación es irreversible.**\
Expone las configuraciones internas de webpack, Babel y ESLint para personalización avanzada.

## 🧪 Tests

El proyecto incluye tests automatizados con Testing Library:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con reporte detallado
npx react-scripts test --watchAll=false --verbose
```

## 📝 Formato de Código

El proyecto usa Prettier para mantener un formato consistente:

```bash
# Formatear todos los archivos
npx prettier --write "src/**/*.{js,jsx,css}"
```

## 📄 Licencia

Este proyecto es privado.
