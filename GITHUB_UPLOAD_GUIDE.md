# 🚀 Guía de Subida a GitHub Pages: Faudy_ZM

Esta guía te ayudará a subir tu proyecto a Internet usando GitHub Pages y a configurar el formulario de contacto para que funcione sin PHP.

## 1. Configurar los Correos (Formspree)
Como GitHub Pages no soporta PHP, usamos **Formspree** para enviar los correos.

1.  Ve a [formspree.io](https://formspree.io) y crea una cuenta gratuita.
2.  Crea un **New Form** (Nuevo Formulario). Ponle de nombre "Faudy_ZM Contacto".
3.  Te darán un "Endpoint" o ID. Se ve algo así: `https://formspree.io/f/xkqjzbvp`.
4.  Copia solo el código final (ej: `xkqjzbvp`).
5.  Abre el archivo `assets/js/main.js` en tu proyecto.
6.  Busca la línea que dice `const formspreeId = 'TU_ID_AQUI';`.
7.  Reemplaza `TU_ID_AQUI` con tu código real.
    *   Ejemplo: `const formspreeId = 'xkqjzbvp';`
8.  Guarda el archivo.

---

## 2. Crear Repositorio en GitHub
1.  Inicia sesión en [GitHub.com](https://github.com).
2.  Haz clic en el **signo +** (arriba a la derecha) -> **New repository**.
3.  Nombre del repositorio: `Faudy_ZM` (o lo que prefieras).
4.  Asegúrate de que esté en **Public**.
5.  Haz clic en **Create repository**.

---

## 3. Subir los Archivos
Tienes dos opciones para subir tu código.

### Opción A: Subida Manual (Más fácil si no usas comandos)
1.  En la página de tu repositorio nuevo, busca donde dice "uploading an existing file".
2.  Arrastra **todos** los archivos de tu carpeta `Pagina de Fausha store` hacia ahí.
    *   Asegúrate de incluir `index.html`, la carpeta `assets` (con su contenido), etc.
3.  Espera a que carguen.
4.  Abajo, donde dice "Commit changes", botón verde **Commit changes**.

### Opción B: Usando Git (Recomendado)
Si tienes Git instalado en tu computadora:
1.  Abre una terminal en la carpeta de tu proyecto.
2.  Ejecuta estos comandos uno por uno (reemplaza `TU_USUARIO` con tu usuario de GitHub):

```bash
git init
git add .
git commit -m "Primer subida - Sitio web Faudy_ZM"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/Faudy_ZM.git
git push -u origin main
```

---

## 4. Activar tu Página Web
1.  En tu repositorio de GitHub, ve a la pestaña **Settings** (Configuración).
2.  En el menú de la izquierda, busca y haz clic en **Pages**.
3.  En "Build and deployment" > "Branch", selecciona **main** y al lado **/(root)**.
4.  Dale a **Save**.
5.  Espera unos minutos (puedes recargar la página).
6.  Aparecerá un enlace arriba: `Your site is live at...`.
    *   ¡Ese es el enlace de tu página web! 🎉

---

## ✅ Verificación Final
1.  Entra al enlace que te dio GitHub.
2.  Verifica que las imágenes y logos carguen bien.
3.  **Prueba el formulario**: Llena los datos y envíalo.
    *   Debería redirigirte a WhatsApp.
    *   Deberías recibir un correo en la cuenta que registraste en Formspree.

¡Listo! Tu sitio **Faudy_ZM** ya está online. 🚀
