let canvas;

let tileCountX;
let tileWidth;

let tileArray = [];

function setup() {
  // canvas x div
  const container = document.getElementById('container'); // ?
  canvas = createCanvas(container.offsetWidth, container.offsetHeight); // canvas nach div bauen
  canvas.parent('container'); // canvas mit div verbinden

  grid();
}

function grid() {
  // dynamische tile
  tileCountX = round(map(width, 320, 1600, 4, 50));
  tileWidth = width / tileCountX;

  tileCountY = round(height / tileWidth);
  tileWidth = height / tileCountY; 
  

  // neue array
  tileArray = [];
  for (let y = 0; y < tileCountY; y++) {
    let row = [];
    for (let x = 0; x < tileCountX; x++) {
      row.push("#25619B"); // Startfarbe (weiß)
    }
    tileArray.push(row);
  }
}

function draw() {
  background(220);

  stroke(220);
  strokeWeight(2);

  for (let y = 0; y < tileCountY; y++) {
    for (let x = 0; x < tileCountX; x++) {
      let posX = x * tileWidth;
      let posY = y * tileWidth;
      let color = tileArray[y][x];

      fill(color);
      square(posX, posY, tileWidth);

      // click feedback
      if (
        mouseIsPressed &&
        mouseX > posX && mouseX < posX + tileWidth &&
        mouseY > posY && mouseY < posY + tileWidth
      ) {
        tileArray[y][x] = "#FF0000"; // farbe
        fill("black");
      }

      square(posX, posY, tileWidth);


    } // Ende tileCountX
  } // Ende tileCountY

  
} // Ende draw


function windowResized() {
  const container = document.getElementById('container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
  grid(); // array neu berechnen
} // Ende windowResized
