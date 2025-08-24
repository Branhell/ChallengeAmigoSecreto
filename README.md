# 🎁 Amigo Secreto

Una aplicación web sencilla para organizar sorteos de amigo secreto. Permite ingresar nombres, mostrarlos en una lista y seleccionar aleatoriamente uno de ellos como el amigo secreto.

---

## 🚀 Funcionalidades

- ✅ Agregar nombres de amigos desde un campo de texto
- ✅ Validar que el campo no esté vacío
- ✅ Mostrar la lista actualizada en pantalla
- ✅ Sortear un nombre aleatorio de la lista
- ✅ Activar el botón "Añadir" con la tecla Enter
- ✅ Mostrar resultados en la consola del navegador

---

## 🧠 ¿Cómo funciona?

1. El usuario escribe un nombre en el campo de entrada.
2. Al hacer clic en “Añadir” o presionar Enter, el nombre se agrega a un array llamado `amigos`.
3. La lista HTML se actualiza dinámicamente mostrando todos los nombres ingresados.
4. Al hacer clic en “Sortear amigo”, se selecciona un nombre al azar usando `Math.random()` y `Math.floor()`.
5. El nombre sorteado se muestra en pantalla y también se imprime en la consola.

---

## 📦 Estructura del proyecto

```ChallengeAmigoSecreto/```
```├── index.html # Estructura principal de la página```
```├── style.css # Estilos visuales (opcional)```
```├── app.js # Lógica del proyecto en JavaScript```
```├── assets/ # Imágenes y recursos```
```└── README.md # Este archivo```

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (opcional)
- JavaScript (vanilla)

---

## 📋 Requisitos cumplidos

### ✅ Agregar amigos
- Captura del valor con `document.getElementById`
- Validación de entrada vacía
- Uso de `.push()` para actualizar el array
- Limpieza del campo de entrada

### ✅ Mostrar lista actualizada
- Selección del elemento `<ul>` con `getElementById`
- Limpieza con `innerHTML = ""`
- Iteración con `forEach` para crear elementos `<li>`

### ✅ Sorteo aleatorio
- Validación de que el array no esté vacío
- Generación de índice aleatorio con `Math.random()` y `Math.floor()`
- Acceso al nombre sorteado y visualización en HTML

---

## 🧪 Cómo probarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ChallengeAmigoSecreto.git

### ✅ Animación y reinicio del juego

- Se agregó una animación de **palpitación** al título principal (`Amigo Secreto`) usando `@keyframes` en CSS.
- El título ahora tiene un `id="titulo"` y se vuelve **interactivo** al pasar el cursor.
- Al hacer clic sobre el título, se ejecuta la función `reiniciarJuego()` que:
  - Vacía el array `amigos`
  - Limpia la lista visual en pantalla
  - Borra el resultado del sorteo
  - Muestra una alerta de confirmación
  - Limpia la consola del navegador
 
  - ## 🌐 Demo en vivo

[Ver página publicada en GitHub Pages](https://branhell.github.io/ChallengeAmigoSecreto/)

