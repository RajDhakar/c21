var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=-4;
  fixedRect.debug = true;
  movingRect = createSprite(400,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=4;
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,fixedRect)


 
  drawSprites();
}

