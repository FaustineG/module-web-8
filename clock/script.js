// récuperer elements HTML
let myElement = document.getElementById("clock");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");

function displayCurrentTime() {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  myElement.innerText = hours + ":" + minutes + ":" + seconds;
}

// Première initialisation de l'interval
let intervalId = setInterval(displayCurrentTime, 1000);

// Ajouter event listeners
function onStopClick() {
  clearInterval(intervalId);
}
buttonStop.addEventListener("click", onStopClick);

function onStartClick() {
  intervalId = setInterval(displayCurrentTime, 1000);
}
buttonStart.addEventListener("click", onStartClick);
