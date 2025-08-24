// array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    console.log("Amigo agregado:", nombre);
    console.log("Lista actual de amigos:", amigos);

    input.value = "";
    mostrarAmigos();
}

    // Detectar la tecla Enter en el campo de texto
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un amigo.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  console.log("Nombre secreto sorteado:", amigoSorteado);

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado} </li>`;
}

document.getElementById("titulo").addEventListener("click", reiniciarJuego);

function reiniciarJuego() {
  amigos = []; // Vacía el array
  document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista visual
  document.getElementById("resultado").innerText = ""; // Limpia el resultado del sorteo
  console.clear(); // Limpia la consola
  alert("¡Juego reiniciado! 🎉");
}
