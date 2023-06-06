let unicorn;
let uImg;
let tImg;
let bImg;
let sol;
let planets = [];


function preload() {

  uImg = loadImage("images/unicorn.png");
  sol = loadImage("images/sol.png");
  tImg = loadImage("images/train2.png");
  bImg = loadImage("images/background.jpg");
}

function mousePressed() {
  planets.push(new Planet());
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  unicorn = new Unicorn();

}


function keyPressed() {
  if (key == " ") {
    unicorn.jump();
  }
}

function draw() {
  if (random(1) < 0.009) {
    planets.push(new Planet());
  }

  background(bImg);
  for (let p of planets) {
    p.move();
    p.show();
    if (unicorn.hits(p)) {
      console.log("game over");
      noLoop();
    }
  }

  unicorn.show();
  unicorn.move();
}
