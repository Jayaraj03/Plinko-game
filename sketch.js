function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(470,800,470,800)
  ground.fill("brown")
}

function draw() {
  background(255,255,255);  
  drawSprites();
}