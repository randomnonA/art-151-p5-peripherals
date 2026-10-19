let circles = [];
function setup() {
  createCanvas(890, 800);
  webcam = createCapture(VIDEO,{flipped:true});
  webcam.size(840,800)
  webcam.hide();
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
  
  //drawcircles
  for (let circle of circles) {
    fill(circle.rColor);
    ellipse(circle.x, circle.y, 50);
  }
  
  //check if mouse is pressed and draw a cirlce while dragging
  if(mouseIsPressed) {
    let newCircle = {
      x:mouseX,
      y:mouseY,
      rColor:color(random(255), random(255), random(255))};
    circles.push(newCircle);
    }
  fill("#D3F553");
  ellipse(200, 300,100, 150);
  
  //draw hat
  push();
  translate(200, 200);
  fill("#D3F553");
  scale(2);
  arc(0, 0, 100, 100, PI, 0, CHORD);
  pop();
  
  //draw head
  fill("#D3F553");
  ellipse(200, 200, 80);
  image(webcam, 0, 0);
  filter(INVERT);
  //filter(POSTERIZE, 2);
  //filter(BLUR, 6);
}



function mousePressed() {
  //add a circle where the mouse is
  //ll('purple');
  //noStroke();
  //triangle(0,0,200, 200, 350, 350);
}