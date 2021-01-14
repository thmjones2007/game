//main vars
var main, mainidle;



function preload() {
  mainidle = loadAnimation("MainR1.png", "MainR2.png", "MainR3.png", "MainR4.png", "MainR5.png", "MainR6.png", "MainR7.png", "MainR8.png", "MainR9.png");
}

function setup() {
  createCanvas(400, 400);
  main = createSprite(200, 200, 20, 20);
  main.addAnimation("mainidle", mainidle);
}

function draw() {
  background(220);
  
  drawsprites();
}