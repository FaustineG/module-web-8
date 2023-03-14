canvas = document.getElementById("my-canvas");
ctx = canvas.getContext("2d");

function drawCircle(x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

function drawSquare(x, y, color) {
  side = 100;
  half_side = side / 2;

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(x - half_side, y - half_side, side, side);

  ctx.stroke();
}

function onClick(e) {
  const { x, y } = e;
  drawSquare(x, y, "green");
  console.log(e.x, e.y);
}

canvas.addEventListener("click", onClick);

drawSquare(100, 100, "red");
drawCircle(150, 150, "blue");
