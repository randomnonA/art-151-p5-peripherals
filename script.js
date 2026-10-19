function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  if (mouseButton.left) {
    //line(mouseX, 0, mouseX, height);
    circle(50, 50, 50);
  }
  if (mouseButton.right) {
    square(25, 25, 50);
  }
  if(mouseButton.center) {
    triangle(25, 75, 50, 30, 80, 75);
  }
  textAlign(CENTER);
  textSize(16);
  //line(0, mouseY, width, mouseY);
  //display the mouseIsPressed variable
  text(mouseIsPressed,25,60);
  text(key, 100, 100);
  if(key === "w") {
    circle(40,40,30);
  }
  if(key === "a") {
    circle(80,80,30);
  }
  if(key === "s") {
    circle(120,120,30);
  }
  if(key === "d") {
    circle(160,160,30);
  }
  if(keyCode === 40) {
    fill(random(180), random(255), random(90)); 
  }
  if (keyIsDown(LEFT_ARROW) === true) {
    fill('yellow');
  }
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
    fill('blue');
  }
  
}

function mousePressed() {
  fill('purple');
  //noStroke();
  //triangle(0,0,200, 200, 350, 350);
}