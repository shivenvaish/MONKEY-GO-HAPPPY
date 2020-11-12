
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime;
var bg;
var bgimg;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgimg = loadImage("jungle.jpg")
 
}



function setup() {
  createCanvas(800,400)
  bg = createSprite(0,0,800,400)
  bg.addImage(bgimg)
  bg.scale = 1.5;
  bg.x = bg.width/2;
  bg.velocityX = -4;
  monkey = createSprite(0,170,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -3;
  ground.x = ground.width/2;
  ground.visible = false;
  
  foodGroup = new Group()
  obstacleGroup = new Group()
  score = 0;
  
 
  
}


function draw() {
  background("white")
  
  if(ground.x<0){
    ground.x = ground.width/2;
    
    
  }
   if(bg.x<100){
     bg.x = bg.width/2;
   }
  
    if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach()
      score = score+2
      
    }
    switch(score){
      case 1: monkey.scale = 0.12;
        break;
        case 2: monkey.scale = 0.14;
        break;
        case 3: monkey.scale = 0.16;
        break;
        case 4: monkey.scale = 0.18;
        break ;
        default:break;
    }
  
  if(keyDown("space")){
     monkey.velocityY = -10;
     }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground)
  spawnfood()
  spawnObstacle()
  
  
  
  
  stroke("white")
  fill("white")
  textSize(20)
  text("score:"+score,500,40)
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.08;
  }
  stroke("red")
  fill("red")
  textSize(20)
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  drawSprites();
}
function spawnfood(){
  if(frameCount%80 === 0 ) {
    banana = createSprite(600,240,40,10)
    banana.y = random(100,200)
    banana.velocityX = -3;
    banana.lifetime = 300;
    banana.addImage(bananaImage)
    banana.scale = 0.05;
    monkey.depth = banana.depth+1;

    foodGroup.add(banana)
    
}
}
function spawnObstacle() {
  if(frameCount%200=== 0 ){
    obstacle = createSprite(700,340,10,40)
   
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.15;
    

    obstacleGroup.add(obstacle)
    
  
}
}




