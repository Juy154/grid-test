let canvas;

function setup() {
  // canvas mit div verbinden
  const container = document.getElementById('container');
  canvas = createCanvas(container.offsetWidth, container.offsetHeight); // maße des containers in variable speichern
  canvas.parent('container'); // canvas in div einfügen

}

function draw() {
  background(220);


  // nicht vom viewport abgeschnitten
  let tileCountX = round(map(width, 320, 1600, 4, 100)); // display breite x anzahl tiles
  let tileWidth = width/tileCountX; // canvas durch anzahl der tiles


  fill ("#25619B");
  stroke(220);
  strokeWeight(2);

  
  for (let x2 = 0; x2 < width; x2 += tileWidth) {
    for (let y2 = 0; y2 < height; y2 += tileWidth) {
      square(x2,y2,tileWidth);
    }
  }

  // click or touch feedback
  if (mouseIsPressed) {
    let size = map(width, 320, 1600, 160, 20);
    ellipse(mouseX,mouseY,size);
  }
  


}


// fenstergröße ändert sich
function windowResized() {
  // canvas anpassen
  const container = document.getElementById('container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
}
