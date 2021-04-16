var PLAY=1;
var END=0;
var gameState=PLAY;


var crash,bG,inv;
var crImg,bImg,CoinsImg,barImg;
var coinG,barrelG;
var score,Coins=0;
function preload(){
crImg=loadImage("cr.jpg");
bImg=loadImage("bImg.jpg");
CoinsImg=loadImage("coins.jpg");
barImg=loadImage("barrels.jpg");
}

function setup() {
createCanvas(600,900);
  
bG=createSprite(100,100);
bG.addImage(bImg);
bG.scale=20;
bG.velocityX=-4;
crash=createSprite(100,775);
crash.addImage(crImg);
crash.scale=0.7;

inv=createSprite(300,900,900,1);
coinG=new Group();
barrelG= new Group();
}


function draw() {
background(220);
if(gameState===PLAY){
spawnC();
spawnB();
if(bG.x<0){
bG.x=bG.width/2
}
  
if(keyDown("right")){
crash.velocityX=4;
}

if (crash.x>400){
crash.x=100;

}
if (crash.x<50){
crash.x=100;

}
  
  
}
  console.log(crash.y);

  
if(keyDown("space") && crash.y>700){
crash.y=crash.y-150;

}

  
if(crash.isTouching(coinG)){
coinG.destroyEach();
Coins=Coins+1;

}
  

score=Math.round(frameCount/50);

  

crash.velocityY=5;
crash.collide(inv);
 drawSprites();
  
    
if(crash.isTouching(barrelG)){
gameState=END;


}

if (gameState===END){
  
 bG.velocityX=0;
  crash.velocityX=0;
barrelG.destroyEach();
coinG.destroyEach();
  frameCount=0;
  
  fill("red"); 
textSize(50);
text("Game Over!!!",150,450); 
textSize(20);
 text("Press Space To Play Again", 100,500) ;
  
  
}
if (gameState===END && keyDown("space")  ){
  
gameState=PLAY;
score=0;
Coins=0;
crash.y=775;
crash.x=100;
}
fill("red");
textSize(20);
text("Coins:-"+Coins,500,75); fill("red");
fill("blue");
text("Score:-"+score,100,75); 


}


function spawnC(){
if (frameCount%80===0){
coins=createSprite();
coins.addImage(CoinsImg);
coins.x=Math.round(random(200,385));
coins.y=Math.round(random(500,775));
coins.scale=0.5;
coins.lifetime=30;
coins.depth=crash.depth;
crash.depth=crash.depth+1
coinG.add(coins);
}


}




function spawnB(){
if(frameCount%120===0){
barrel=createSprite();
barrel.collide(inv);
barrel.y=775;
barrel.x=Math.round(random(250,390));
barrel.addImage(barImg);
barrel.scale=0.5;
barrel.lifetime=30;
barrelG.add(barrel);

}



}
var index=0;
index=index+1;
if (index ===  crash.index){
  crash[index-1].shapeColor="red";
    camera.position.x=displayWidth/2;
    camera.position.y=cars[index-1].y;
}


  
  
  
