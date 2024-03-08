<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

[![Twitter Follow](https://img.shields.io/twitter/follow/jonathanfva92.svg?style=social&label=Twitter)](https://twitter.com/jonathanfva92) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/jonathan-felipe-vargas-arias) [![Website](https://img.shields.io/badge/Website-devjonathanvargas.vercel.app-green)](https://devjonathanvargas.vercel.app/) [![Medium](https://img.shields.io/badge/Medium-Follow-orange)](https://medium.com/@jonathanvargas_61788) [![Bento](https://img.shields.io/badge/Bento-Profile-red)](https://bento.me/felipe-vargas) [![Howe.bio](https://img.shields.io/badge/Howe.bio-Profile-yellow)](https://www.howe.bio/felipe-vargas)

# Proyecto Talent Tech Nest


## Descripción
El proyecto Talent Tech Nest es una aplicación desarrollada en el marco del programa de Desarrollo Web Full Stack de Talent Tech. Este proyecto se enfoca en la implementación de modelos como `houses` y `users`, así como en la utilización de diversas librerías, incluyendo `bcryptjs` para el cifrado de contraseñas. Está dirigido a estudiantes que buscan profundizar en el desarrollo web utilizando tecnologías avanzadas como NestJS.

## Contenido del Repositorio
- **.env**: Archivo de configuración para variables de entorno.
- **.eslintrc.js**: Configuración para ESLint, una herramienta de linting para JavaScript y TypeScript.
- **.gitignore**: Archivo para ignorar archivos y directorios en el control de versiones Git.
- **.prettierrc**: Configuración para Prettier, una herramienta de formateo de código.
- **nest-cli.json**: Archivo de configuración para el CLI de NestJS.
- **package-lock.json**: Archivo generado automáticamente que registra las versiones exactas de las dependencias instaladas.
- **package.json**: Archivo de configuración de npm que contiene las dependencias y scripts del proyecto.
- **README.md**: Documentación detallada del proyecto, incluyendo instrucciones de instalación, ejecución y uso.
- **src/**: Directorio que contiene el código fuente de la aplicación NestJS.
  - **app.controller.spec.ts**: Archivo de prueba para el controlador principal de la aplicación.
  - **app.controller.ts**: Controlador principal de la aplicación.
  - **app.module.ts**: Módulo principal de la aplicación.
  - **app.service.ts**: Servicio principal de la aplicación.
  - **houses/**: Directorio que contiene los archivos relacionados con el modelo `houses`.
    - **houses.controller.spec.ts**: Archivo de prueba para el controlador de `houses`.
    - **houses.controller.ts**: Controlador de `houses`.
    - **houses.module.ts**: Módulo de `houses`.
    - **houses.service.spec.ts**: Archivo de prueba para el servicio de `houses`.
    - **houses.service.ts**: Servicio de `houses`.
  - **main.ts**: Archivo de entrada principal de la aplicación.
  - **users/**: Directorio que contiene los archivos relacionados con el modelo `users`.
    - **dto/**: Directorio que contiene objetos de transferencia de datos para `users`.
      - **create-user.dto.ts**: DTO para crear usuarios.
    - **user.schema.ts**: Esquema para el modelo `users`.
    - **users.controller.spec.ts**: Archivo de prueba para el controlador de `users`.
    - **users.controller.ts**: Controlador de `users`.
    - **users.entity.ts**: Entidad para el modelo `users`.
    - **users.module.ts**: Módulo de `users`.
    - **users.service.spec.ts**: Archivo de prueba para el servicio de `users`.
    - **users.service.ts**: Servicio de `users`.
    - **validations/**: Directorio que contiene validaciones personalizadas para `users`.
      - **unique-email.validator.ts**: Validador personalizado para asegurar que el correo electrónico sea único.

## Pasos para Ejecutar el Proyecto
1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto ejecutando el comando `npm install`.
3. Configura las variables de entorno necesarias en el archivo `.env`.
4. Ejecuta el proyecto en modo de desarrollo con el comando `npm run start:dev`.
5. Abre tu navegador y navega a la dirección `http://localhost:3000` para ver la aplicación en funcionamiento.
