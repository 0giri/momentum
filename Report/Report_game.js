const loginForm = document.querySelector("#login-form");
const bound = document.getElementById("bound");
const users = document.getElementById("users");
const gameScreen = document.getElementById("gameScreen");
const gameNow = document.getElementById("gameNow");
const result = document.getElementById("result");

const HIDDEN_CLASSNAME = "hidden";

function onPlaySubmit(event) {
  event.preventDefault();
  const userNum = users.value;
  const machineNum = Math.floor(Math.random() * bound.value);

  if (gameScreen.classList.contains(HIDDEN_CLASSNAME)) {
    gameScreen.classList.remove(HIDDEN_CLASSNAME);
  }

  gameOn(userNum, machineNum);
  check(userNum, machineNum);
}

function gameOn(userNum, machineNum) {
  gameNow.innerText = `You chose: ${userNum}, the machine chose: ${machineNum}`;
}

function check(userNum, machineNum) {
  if (userNum == machineNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lose!";
  }
}

loginForm.addEventListener("submit", onPlaySubmit);
