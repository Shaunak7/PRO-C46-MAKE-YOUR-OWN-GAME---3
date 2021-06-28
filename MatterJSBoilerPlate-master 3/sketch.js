var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
var bg;

localStorage["HighestScore"] = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bgImage1=loadImage("images/bg1.png")
	bgImage2=loadImage("images/bg2.png")

	ironManFlyingImage=loadAnimation("images/IRONMAN/IronManFlying1.gif")
  superManFlyingImage=loadAnimation("images/SUPERMAN/SuperManFlying.gif")

	ThanosImage=loadAnimation("images/Thanos.gif")
  CatWomanImage=loadAnimation("images/CatWoman.gif")

  IronManLogoImage=loadImage("images/IRONMAN/IronManLogo.jpg")
  SuperManLogoImage=loadAnimation("images/SUPERMAN/SuperManLogo.gif")

  IronManVictoryImage=loadAnimation("images/IRONMAN/IronManVictory.gif")
  SuperManVictoryImage=loadAnimation("images/SUPERMAN/SuperManVictory.gif")
  MindStoneImage=loadImage("images/INFINITYSTONES/MindStone.png")
  PowerStoneImage=loadImage("images/INFINITYSTONES/PowerStone.png")
  RealityStoneImage=loadImage("images/INFINITYSTONES/RealityStone.png")
  SoulStoneImage=loadImage("images/INFINITYSTONES/SoulStone.png")
  SpaceStoneImage=loadImage("images/INFINITYSTONES/SpaceStone.png")
  TimeStoneImage=loadImage("images/INFINITYSTONES/TimeStone.png")

  SuperManStoneImage=loadImage("images/SUPERMAN/SuperManStone.png")
	robot1Image=loadAnimation("images/ROBOTS/Robot1.gif")
	robot2Image=loadAnimation("images/ROBOTS/Robot2.gif")
	robot3Image=loadAnimation("images/ROBOTS/Robot3.gif")
	robot4Image=loadAnimation("images/ROBOTS/Robot4.gif")
	robot5Image=loadAnimation("images/ROBOTS/Robot5.gif")
	robot6Image=loadAnimation("images/ROBOTS/Robot6.gif")

  VictoryImage=loadImage("images/Victory.png")
  DefeatImage=loadImage("images/Defeat.png")
  RestartImage=loadImage("images/Restart.jpg")

  starImage=loadImage("images/star.png")
}

function setup() {
	createCanvas(displayWidth-10,displayHeight-100);

	engine = Engine.create();
	world = engine.world;

  bg=createSprite(displayWidth/2,displayHeight/2,1000,displayHeight*2)
  bg.addImage(bgImage1);
  bg.velocityY=2

  ironManFlying = createSprite(displayWidth/2,displayHeight-250,20,50);
  ironManFlying.addAnimation("ironManFlyingImage",ironManFlyingImage)
	ironManFlying.scale = 0.4;

  /*

	gameOver = createSprite(300,100);
	gameOver.addImage(gameOverImg);
	
	restart = createSprite(300,140);
	restart.addImage(restartImg);
	
	gameOver.scale = 0.5;
	restart.scale = 0.5;
  
	gameOver.visible = false;
	restart.visible = false;
	
	invisibleGround = createSprite(200,190,400,10);
	invisibleGround.visible = false;
	
	obstaclesGroup = new Group();
	
	score = 0;

	Engine.run(engine);
  */
}


function draw() {
  background("lightBlue");

  if(bg.y>displayHeight/2){

    bg.y=displayHeight/2
  }

  if(gameState === 0){

    IronManLogo=createSprite(200,200,10,10)
    IronManLogo.addImage("IronManLogoImage")

    SuperManLogo=createSprite(300,300,10,10)
    SuperManLogo.addAnimation("SuperManLogoImage",SuperManLogoImage)
  }

  spawnRobots();

  if(keyDown("LEFT")){
    ironManFlying.x=ironManFlying.x-10
  }

  if(keyDown("RIGHT")){
    ironManFlying.x=ironManFlying.x+10
  }

  drawSprites();

  text(mouseX+","+mouseY,mouseX,mouseY)
}

function spawnRobots() {
  if(frameCount % 60 === 0) {
    var robot = createSprite(600,165,10,40);
    robot.velocityX = -(6 + 3*score/100);
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: robot.addImage(robot1Image);
              break;
      case 2: robot.addImage(robot2Image);
              break;
      case 3: robot.addImage(robot3Image);
              break;
      case 4: robot.addImage(robot4Image);
              break;
      case 5: robot.addImage(robot5Image);
              break;
      case 6: robot.addImage(robot6Image);
              break;
      default: break;
    }
  }
}
