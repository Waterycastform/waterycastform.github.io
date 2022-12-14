// Local Sotrage Demo
// Saabir
// Dec. 5th, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberOfClicks = 0;
let highestClicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highscore") !== null) {
    highestClicks = getItem("highscore");
  }

  else {
    storeItem("highscore, 0");
  }
}

function draw() {
  background(220);

  fill("black");
  textSize(50);
  text(numberOfClicks, width/2, height/2);

  fill("red");
  text(highestClicks, 50, height - 100);
}

function mousePressed(){
  numberOfClicks++;

  if (numberOfClicks > getItem("highscore")) {
    storeItem("highscore", numberOfClicks);
    highestClicks = numberOfClicks;
  }
}
  

