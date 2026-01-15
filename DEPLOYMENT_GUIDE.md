# 🚀 Guía de Despliegue en GitHub Pages - Fausha Store

Esta guía te llevará paso a paso para publicar tu sitio web de Fausha Store en GitHub Pages **completamente gratis**.

## 📋 Requisitos Previos

- [ ] Tener una cuenta de GitHub (si no tienes, créala en https://github.com/signup)
- [ ] Tener Git instalado en tu computadora
  - Verifica con: `git --version`
  - Si no lo tienes, descárgalo de: https://git-scm.com/downloads

---

## 🎯 Paso 1: Crear Repositorio en GitHub

1. **Inicia sesión en GitHub**: Ve a https://github.com
2. **Crea un nuevo repositorio**:
   - Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
   - O ve directamente a: https://github.com/new

3. **Configura el repositorio**:
   - **Repository name**: `fausha-store` (o el nombre que prefieras)
   - **Description**: `Sitio web oficial de Fausha Store - Agencia de Soluciones Digitales`
   - **Visibilidad**: Selecciona **Public** (necesario para GitHub Pages gratis)
   - **NO marques** "Add a README file" (ya tienes uno)
   - **NO marques** "Add .gitignore" (ya tienes uno)
   - Haz clic en **"Create repository"**

4. **Guarda la URL del repositorio**: GitHub te mostrará una página con comandos. Copia la URL que aparece, será algo como:
   ```
   https://github.com/TU-USUARIO/fausha-store.git
   ```

---

## 💻 Paso 2: Preparar tu Proyecto Local

Abre **PowerShell** o **Git Bash** y ejecuta los siguientes comandos:

### 2.1 Navegar al directorio del proyecto
```powershell
cd "c:\wamp64\www\Pagina de Fausha store"
```

### 2.2 Inicializar Git
```powershell
git init
```
✅ Verás: `Initialized empty Git repository...`

### 2.3 Configurar tu identidad (solo la primera vez)
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```
⚠️ Usa el mismo email de tu cuenta de GitHub

### 2.4 Agregar todos los archivos
```powershell
git add .
```

### 2.5 Hacer el primer commit
```powershell
git commit -m "Initial commit: Fausha Store website"
```
✅ Verás un resumen de archivos agregados

---

## 🔗 Paso 3: Conectar con GitHub y Subir Archivos

### 3.1 Conectar con el repositorio remoto
```powershell
git remote add origin https://github.com/TU-USUARIO/fausha-store.git
```
⚠️ **IMPORTANTE**: Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub

### 3.2 Cambiar a la rama main
```powershell
git branch -M main
```

### 3.3 Subir los archivos
```powershell
git push -u origin main
```

📝 **Nota**: La primera vez te pedirá autenticación:
- **Opción 1**: Usar GitHub Desktop (más fácil)
- **Opción 2**: Crear un Personal Access Token:
  1. Ve a: https://github.com/settings/tokens
  2. Click en "Generate new token (classic)"
  3. Dale un nombre, marca "repo" y genera
  4. Copia el token y úsalo como contraseña

✅ Si todo salió bien, verás: `Branch 'main' set up to track remote branch 'main'`

---

## 🌐 Paso 4: Activar GitHub Pages

1. **Ve a tu repositorio en GitHub**: 
   ```
   https://github.com/TU-USUARIO/fausha-store
   ```

2. **Abre la configuración**:
   - Haz clic en **"Settings"** (⚙️ arriba a la derecha)

3. **Navega a Pages**:
   - En el menú lateral izquierdo, busca y haz clic en **"Pages"**

4. **Configura la fuente**:
   - En **"Source"**, selecciona: **Deploy from a branch**
   - En **"Branch"**, selecciona: **main**
   - En **"Folder"**, deja: **/ (root)**
   - Haz clic en **"Save"**

5. **Espera el despliegue**:
   - GitHub comenzará a construir tu sitio
   - Esto toma entre 1-3 minutos
   - Refresca la página después de un minuto

6. **Obtén tu URL**:
   - Verás un mensaje verde que dice: **"Your site is live at..."**
   - Tu sitio estará en: 
     ```
     https://TU-USUARIO.github.io/fausha-store/
     ```

---

## ✅ Paso 5: Verificar tu Sitio

1. **Abre la URL** en tu navegador
2. **Verifica que funcione**:
   - ✅ El logo se muestra correctamente
   - ✅ Los estilos se aplican (fondo oscuro, colores cyan/magenta)
   - ✅ Los botones de WhatsApp funcionan
   - ✅ El formulario de contacto se muestra
   - ✅ Las secciones se ven bien en móvil

---

## 🔄 Cómo Actualizar tu Sitio en el Futuro

Cada vez que hagas cambios en tu sitio web local, sigue estos pasos:

### 1. Guardar cambios
```powershell
cd "c:\wamp64\www\Pagina de Fausha store"
git add .
git commit -m "Descripción de los cambios"
```

### 2. Subir a GitHub
```powershell
git push
```

### 3. Esperar
- GitHub Pages actualizará automáticamente tu sitio
- Espera 1-2 minutos y refresca tu navegador

---

## 🎨 Configurar Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio (ej: `www.faushastore.com`):

### 1. Comprar un dominio
- Recomendados: Namecheap, GoDaddy, Google Domains

### 2. Configurar DNS
Agrega estos registros en tu proveedor de dominio:

**Para apex domain (faushastore.com):**
```
Type: A
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**Para www (www.faushastore.com):**
```
Type: CNAME
Host: www
Value: TU-USUARIO.github.io
```

### 3. Configurar en GitHub Pages
1. Ve a **Settings** → **Pages**
2. En **"Custom domain"**, escribe: `www.faushastore.com`
3. Marca **"Enforce HTTPS"** (espera unos minutos primero)
4. Guarda

⏱️ **Tiempo de propagación**: 24-48 horas

---

## 🆘 Solución de Problemas

### ❌ Error: "Permission denied"
**Solución**: Configura un Personal Access Token (ver Paso 3.3)

### ❌ Error: "fatal: not a git repository"
**Solución**: Asegúrate de estar en el directorio correcto y ejecuta `git init`

### ❌ El sitio no se ve bien
**Solución**: Verifica que todas las rutas en `index.html` sean relativas:
- ✅ Correcto: `assets/css/style.css`
- ❌ Incorrecto: `/assets/css/style.css`

### ❌ Error 404 en GitHub Pages
**Solución**: 
- Verifica que el archivo se llame exactamente `index.html`
- Asegúrate de haber seleccionado la rama `main` en Settings → Pages

### ❌ Los cambios no se reflejan
**Solución**:
- Limpia el caché del navegador (Ctrl + Shift + R)
- Espera 2-3 minutos más
- Verifica que el `git push` fue exitoso

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la documentación oficial: https://docs.github.com/pages
2. Verifica el estado de GitHub: https://www.githubstatus.com/
3. Contacta al equipo de Fausha Store: +1 (829) 461-5951

---

## 🎉 ¡Felicidades!

Tu sitio web de Fausha Store ahora está en línea y accesible para todo el mundo. 

**Comparte tu URL**:
- 📱 WhatsApp
- 📘 Facebook
- 📸 Instagram
- 💼 LinkedIn

---

**Última actualización**: Enero 2026
