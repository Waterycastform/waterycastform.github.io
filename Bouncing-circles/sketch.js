// Colliding Circles
// Saabir Yousuf
// Oct. 24th, 2022

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  theCircles.push(spawnBall(100, 100));
}

function draw() {
  background(220);

  // move
  for (let i = 0; i < theCircles.length; i++){
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;

    //collision check
    for (let j = 0; j < theCircles.length; j++) {
      if (i !== j) {  // checking that its not hitting itself
        if(isColliding(theCircles[i], theCircles[j])){
          let tempDx = theCircles[i].dx;
          let tempDy = theCircles[i].dy;
          theCircles[i].dx = theCircles[j].dx;
          theCircles[i].dy = theCircles[j].dy;
          theCircles[j].dx = tempDx;
          theCircles[j].dy = tempDy;
        }
      }
    }

    //left-right edges
    if (theCircles[i].x + theCircles[i].radius > width || theCircles[i].x - theCircles[i].radius < 0) {
      theCircles[i].dx *= -1;
    }

    //top-bottom edges
    if (theCircles[i].y + theCircles[i].radius > height || theCircles[i].y - theCircles[i].radius  < 0) {
      theCircles[i].dy *= -1;
    }
  }

  //display
  for (let thisCircle of theCircles) {
    fill(thisCircle.theColor);
    noStroke();
    circle(thisCircle.x, thisCircle.y, thisCircle.radius*2);
  }
}

function isColliding(ball1, ball2) {
  let distanceBetween = dist(ball1.x, ball1.y, ball2.x, ball2.y);
  let radiSum = ball1.radius + ball2.radius;
  if (distanceBetween < radiSum) {
    return true;
  }
  return false;
}

function mousePressed() {
  theCircles.push(spawnBall(mouseX, mouseY));
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    radius: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    theColor: color(random(255), random(255), random(255), random(255),),
  };
  return newBall;
}
