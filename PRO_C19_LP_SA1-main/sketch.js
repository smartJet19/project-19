var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg,ghostjumpingImg;
var invisibleBlockGroup, invisibleBlock,invisibleGround;
var gameState = "serve", gameOver,gameOverImg
var pressStart,pressStartImg,Start,StartImg

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  gameOverImg = loadImage("game over.png");
  pressStartImg = loadImage("press start.jpg");
  StartImg = loadImage("Start.png")
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 3;
  
  gameOver =createSprite(300,300)
  gameOver.addImage("gameover",gameOverImg);
  gameOver.scale = 0.4
  
  doorsGroup = createGroup()
  
  invisibleGround = createSprite(300,650,600,60)

  climbersGroup = createGroup()
  
  pressStart = createSprite(300,200)
  pressStart.addImage ("press start",pressStartImg)

  Start = createSprite(300,500)
  Start.addImage ("start",StartImg)
  Start.scale = 0.4

  spookySound.loop()

  ghost=createSprite(300,500);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.5
  
  
}

function draw() {
  background(200);
  
  if( ghost.isTouching(invisibleGround) && frameCount >= 20 ){
    gameState = "end"
  }
  if (gameState == "serve"){
    gameOver.visible = false 
    if(mousePressedOver(Start)){
    Start.visible = false
    pressStart.visible = false
    gameState = "play"
    }
  }



  if(gameState == "play" ){
    //ghost.x = world.mouseX
   gameOver.visible = false
   ghost.x = World.mouseX
   ghost.velocityY = 5
   doorGen()
   climberGen()

   if(keyDown("space") && ghost.y >= 425){
    ghost.y = ghost.y -15
    


    
   }
   if(ghost.isTouching(climbersGroup) && ghost.y <= 430){
     ghost.collide(climbersGroup)
   }
  }
  if(gameState == "end"){
    ghost.x = ghost.x;
    gameOver.visible = true
    ghost.velocityY = 0
  }
  

  if(tower.y > 600){
      tower.y = 300
    }
  drawSprites()
}



  

function doorGen(){
  var genNum = Math.round(random(1,3));
  if(frameCount % 60 === 0){
  switch(genNum){

    case 1: door=createSprite(150,0);
    break

    case 2: door=createSprite(300,0);
    break

    case 3: door=createSprite(450,0);
    break

   }
  
  
  door.addImage("door",doorImg);
  door.scale =0.8;
  door.velocityY = 3;
  doorsGroup.add(door)
  }
 } 


function climberGen(){
  var genNum2 = Math.round(random(1,13));
  if(frameCount % 20 === 0){
    switch(genNum2){

      case 1: climber=createSprite(150,0);
      break
      
      case 2: climber=createSprite(175,0);
      break
      
      case 3: climber=createSprite(200,0);
      break

      case 4: climber=createSprite(225,0);
      break

      case 5: climber=createSprite(250,0);
      break

      case 6: climber=createSprite(275,0);
      break

      case 7: climber=createSprite(300,0);
      break

      case 8: climber=createSprite(325,0);
      break

      case 9: climber=createSprite(350,0);
      break

      case 10: climber=createSprite(375,0);
      break
      
      case 11: climber=createSprite(400,0);
      break

      case 12: climber=createSprite(425,0);
      break

      case 13: climber=createSprite(450,0);
      break
     }
    
  climber.addImage("climber",climberImg);
  climber.scale =0.8;
  climber.velocityY = 3;
  climbersGroup.add(climber)
  }
 } 





