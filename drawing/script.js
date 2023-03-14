canvas = document.getElementById("my-canvas");
ctx = canvas.getContext("2d");
const shapeSelectorElement = document.getElementById("my-shape");
const colorSelectorElement = document.getElementById("my-color");
const SHAPE_SIZE = 100;
    
function drawCircle(x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

function drawSquare(x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.fillRect(x - SHAPE_SIZE / 2, y - SHAPE_SIZE / 2, side, side);
  ctx.fill();
}

function drawTriangle(x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(x - SHAPE_SIZE / 2, y - SHAPE_SIZE / 2);
  ctx.lineTo(x - SHAPE_SIZE / 2, y + SHAPE_SIZE );
  ctx.lineTo(x + SHAPE_SIZE, y + SHAPE_SIZE);
  ctx.fill();
  ctx.closePath();
}

function onClick(e) {
  const { x, y } = e;
  switch (shapeSelectorElement.value) {
    case "square":
      drawSquare(x, y, colorSelectorElement.value);
      break;
    case "circle":
      drawCircle(x, y, colorSelectorElement.value);
      break;
    case "triangle":
      drawTriangle(x, y, colorSelectorElement.value);
      break;
  }
  console.log(x, y);
}

canvas.addEventListener("click", onClick);
