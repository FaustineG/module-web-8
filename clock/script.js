// récuperer elements HTML
let myElement = document.getElementById("clock");
let myStartAndStopButton = document.getElementById("start-and-stop");
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor() {
  const doc = document.getElementsByTagName('body')[0];
  // myElement.style = "background-color:#" + randomColor() + ';';
  doc.style = `background-color:#${randomColor()}`;
}

/**
 * Puts current time in the "clock" div
 */
function displayCurrentTime() {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  if (seconds % 10 == 0) {
    changeColor();
  }

  myElement.innerText = hours + ":" + minutes + ":" + seconds;
}

// Première initialisation de l'interval
let intervalId = setInterval(displayCurrentTime, 1000);

// Ajouter event listeners
function onStopClick() {
  clearInterval(intervalId);
}

function onStartClick() {
  intervalId = setInterval(displayCurrentTime, 1000);
}

let isStarted = true;

function startAndStop() {
  if (isStarted == true) {
    onStopClick();
    myStartAndStopButton.classList.add("start");
    myStartAndStopButton.classList.remove("stop");
    myStartAndStopButton.innerText = "START";
    isStarted = false;
  } else {
    onStartClick();
    myStartAndStopButton.classList.add("stop");
    myStartAndStopButton.classList.remove("start");
    myStartAndStopButton.innerText = "STOP";
    isStarted = true;
  }
}
