// info ->> contenedor que me muestra lo que tengo que hacer
// rock, paper, scissor ->> botones para elegir el arma
// computer ->> mensajes del juego

// inicializar

const weapons = ["rock", "paper", "scissor"];

const computer = document.getElementById("computer");

const humanScore = document.getElementById("humanScore");
humanScore.innerText = "0";

const cpuScore = document.getElementById("cpuScore");
cpuScore.innerText = "0";

const info = document.getElementById("info");
info.innerText = "Bienvenido! Realiza tu jugada...";
//seleccionar elementos

const rock = document.getElementById("rock");
rock.addEventListener("click", () => play(rock.getAttribute("id")));

const paper = document.getElementById("paper");
paper.addEventListener("click", () => play(paper.getAttribute("id")));

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => play(scissor.getAttribute("id")));

// trabajo con la logica

const randomWeapon = () => {
  const number = Math.floor(Math.random() * 3);
  return weapons[number];
};

const play = (humanWeapon) => {
  const computerWeapon = randomWeapon();
  let result = "";
  if (humanWeapon === computerWeapon) {
    result = "Empate";
  } else if (
    (humanWeapon === "rock" && computerWeapon === "scissor") ||
    (humanWeapon === "paper" && computerWeapon === "rock") ||
    (humanWeapon === "scissor" && computerWeapon === "paper")
  ) {
    result = "GANASTE!!";
    setTimeout(() => {
      humanScore.innerText = parseInt(humanScore.innerText) + 1;
    }, 1500);
  } else {
    result = "Perdiste";
    setTimeout(() => {
      cpuScore.innerText = parseInt(cpuScore.innerText) + 1;
    }, 1500);
  }

  if (humanWeapon === "rock") {
    info.innerText = `Elegiste: Piedra`;
  } else if (humanWeapon === "paper") {
    info.innerText = `Elegiste: Papel`;
  } else {
    info.innerText = `Elegiste: Tijera`;
  }

  computer.innerText = "Computadora jugando...";

  setTimeout(() => {
    if (result === "GANASTE!!") {
      Swal.fire({
        title: "Ganaste!!",
        text: "Has vencido a la Computadora",
      });
    }
    info.innerText = result;
    if (computerWeapon === "rock") {
      computer.innerText = `Computadora eligio Piedra`;
    } else if (computerWeapon === "paper") {
      computer.innerText = `Computadora eligio Papel`;
    } else {
      computer.innerText = `Computadora eligio Tijera`;
    }
  }, 1500);
};

// limpieza o reinicializacion
