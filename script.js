let player = 0
let pc = 0
let playerSelectedElement;
let pcSelectedElement;
// 1 es piedra, 2 es papel, 3 es tijera.

jugador = prompt("Elige piedra (1), papel (2) o tijera (3)");

if (jugador == 1) {
  playerSelectedElement = "Piedra";
} else if (jugador == 2) {
  playerSelectedElement = "Papel";
} else if (jugador == 3) {
  playerSelectedElement = "Tijera";
}

alert("Elegiste " + playerSelectedElement);

if (pc == 1) {
  pcSelectedElement = "Piedra";
} else if (pc == 2) {
  pcSelectedElement = "Papel";
} else if (pc == 3) {
  pcSelectedElement = "Tijera";
}