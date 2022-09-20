let jugador = prompt("Elige piedra (1), papel (2) o tijera (3)");
let pc = aleatorio(1,3);
let playerSelectedElement;
let pcSelectedElement;

function aleatorio(min, max) {
  return Math.floor(Math.random()*(3-1+1)+1);
}

function eleccion(selectedElement) {
  if (selectedElement == 1) {
    alert("Elegiste " + "Piedra");
  } else if (selectedElement == 2) {
    alert("Elegiste " + "Papel");
  } else if (selectedElement == 3) {
    alert("Elegiste " + "Tijera");
  }
}







if (pc == 1) {
  pcSelectedElement = "Piedra";
} else if (pc == 2) {
  pcSelectedElement = "Papel";
} else if (pc == 3) {
  pcSelectedElement = "Tijera";
}

alert("El PC eligió " + pcSelectedElement)

//COMBATE
if (pc == jugador) {
  alert("Empate")
} else if (jugador == 1 && pc == 3) {
  alert("Ganaste")
} else if (jugador == 2 && pc == 1) {
  alert("Ganaste")
} else if (jugador == 3 && pc == 2) {
  alert("Ganaste")
} else {
  alert("Perdiste")
}

//Aleatoriedad
//min = 1, max = 3
//nRandom = Math.floor(Math.Random()*(max-min+1)+min)

