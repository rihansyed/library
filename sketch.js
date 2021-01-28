var fixedRect, movingRect;
var M;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  M=createSprite(400,400,70,50);
  M.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(Rihan(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
if(Rihan(movingRect,M)){
  text("GAMEOVER",200,200);
}

  drawSprites();
}

