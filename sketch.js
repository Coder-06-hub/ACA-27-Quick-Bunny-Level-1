var bunny;
var carrot;
function setup() {
  createCanvas(600,600);
  bunny = createSprite(40,550,15,15); 
  carrot = createSprite(560,40,30,30);
  brick1 = createSprite(80,280,120,20);
  brick2 = createSprite(10,330,120,20);
  brick3 = createSprite(160,330,120,20);
  brick4 = createSprite(310,330,120,20);
  brick5 = createSprite(460,330,120,20);
  brick6 = createSprite(610,330,120,20);
  brick7 = createSprite(230,280,120,20);
  brick8 = createSprite(380,280,120,20);
  brick9 = createSprite(530,280,120,20);
  
  bunny.shapeColor = "white";
  carrot.shapeColor = "orange";
  brick1.shapeColor = "red";
  brick2.shapeColor = "red";
  brick3.shapeColor = "red";
  brick4.shapeColor = "red";
  brick5.shapeColor = "red";
  brick6.shapeColor = "red";
  brick7.shapeColor = "red";
  brick8.shapeColor = "red";
  brick9.shapeColor = "red";
  }
  
  function draw() {
  background("green");  
  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(carrot)){
    textSize(40);
    text("YOU WIN!",350,200);
  }
  if(bunny.isTouching(brick1)){
    bunny.x=40;
    bunny.y=550;
  }
  
  if(bunny.isTouching(brick2)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick3)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick4)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick5)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick6)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick7)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick8)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick9)){
    bunny.x=40;
    bunny.y=550;
  }
    drawSprites();
}