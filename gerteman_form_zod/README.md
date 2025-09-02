# Formulario con React Hook Form y Zod

Este proyecto es un formulario de registro construido con React, React Hook Form y Zod para validaciones.

## 🚀 Características

- **Validación robusta**: Implementada con Zod para esquemas de validación
- **Manejo de formularios**: Utilizando React Hook Form para un manejo eficiente
- **Componentes reutilizables**: InputForm como componente controlado
- **Tipado TypeScript**: Tipado completo para mayor seguridad en el desarrollo
- **Validación en tiempo real**: Feedback inmediato de errores

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd <nombre-del-directorio>
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación:

```bash
npm start
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── CustomForm.tsx
│   └── InputForm.tsx
├── models/
│   └── index.ts
└── App.tsx
```

## 📦 Dependencias Principales

- React
- React Hook Form
- Zod
- @hookform/resolvers (para integración con Zod)

## 🎯 Uso

El formulario incluye los siguientes campos:

- Nombre (obligatorio)
- Email (obligatorio con validación de formato)
- Contraseña (mínimo 6 caracteres)
- Confirmación de contraseña (debe coincidir con la contraseña)

Al enviar el formulario, los datos se muestran en la consola.

## 🔧 Personalización

Puedes modificar el esquema de validación en `src/models/index.ts` para ajustar las reglas de validación según tus necesidades.

## 📝 Scripts Disponibles

- `npm start` - Inicia la aplicación en modo desarrollo
- `npm build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm eject` - Expone la configuración de webpack (irreversible)

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
