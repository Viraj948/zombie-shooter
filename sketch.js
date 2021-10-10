var gamestate="fight"
var life=3;
var bullets=70;
var score=0;
var bg, bgImg, player, shooterImg, shooter_shooting,zombie;
var zombie_Img,explosion_sound,zombieGroup,win_sound,lose_sound;
var heart1, heart2,heart3,heart1_img,heart2_img,heart3_img;
var h1=0;
function preload() {
    bgImg = loadImage("assets/bg.jpeg");
    shooterImg = loadImage("assets/shooter_2.png");
    shooter_shooting = loadImage("assets/shooter_3.png");
    zombie_Img=loadImage("assets/zombie.png");
   win_sound=loadSound("assets/win.mp3")
    explosion_sound=loadSound("assets/explosion.mp3")
    lose_sound=loadSound("assets/lose.mp3");
    heart1_img=loadImage("assets/heart_1.png");
    heart2_img=loadImage("assets/heart_2.png");
    heart3_img=loadImage("assets/heart_3.png");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
    bg.addImage(bgImg);
    bg.scale = 1.1
    player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
    player.addImage(shooterImg);
    player.scale = 0.3;
    player.debug = true;
    player.setCollider("rectangle", 0, 0, 300, 300);
    heart1=createSprite(displayWidth-150,40,20,20);
    heart1.visible=false;
    heart1.addImage("heart1",heart1_img);
    heart1.scale=0.4
    heart2=createSprite(displayWidth-150,40,20,20);
   // heart2.visible=false;
    
    heart2.scale=0.4
    heart3=createSprite(displayWidth-150,40,20,20);
   
    heart3.addImage("heart3",heart3_img);
    heart3.scale=0.4
   zombieGroup=new Group()
  
  
}
function draw() {
    background(0);
    
    if (keyDown(UP_ARROW) || touches.length > 0) {
        player.y = player.y - 40;
        
    }
    if (keyDown(DOWN_ARROW) || touches.length > 0) {
        player.y = player.y + 40;
      
    }
       if (keyWentDown("space")) {
        player.addImage(shooter_shooting);
       explosion_sound.play();
       
    
       }else if(keyWentUp("space")){
           player.addImage(shooterImg)
       }
    
    



if((zombieGroup).isTouching(player)){
   
   for(var i=0;i<zombieGroup.length;i++){
     if(zombieGroup[i].isTouching(player)){
         h1=h1+1
         if(h1>0&& h1<2){
            heart3.visible=false;
            heart2.addImage("heart2",heart2_img);
            heart2.visible=true

         }
         else if(h1>1 && h1<3){
            heart2.visible=false;
            heart1.visible=true
         }
         else {
             heart1.visible=false;
             textSize(100)
             text("GAME OVER U LOSE",500,500);
             lose_sound.play()
         }
         console.log(h1);
         zombieGroup[i].destroy
        
         
     }
   }
}




Zombie()
drawSprites()
}

function Zombie(){
    
        if(frameCount% 50===0){      
        zombie= createSprite(random(500,1100),random(100,500), 50, 50)
       
          zombie.addImage(zombie_Img);
          zombie.scale = 0.15;
          zombie.velocityX = -1;
          zombie.setCollider("rectangle",0,0,500,500)
          
          zombie.lifetime = 400;
         
         zombieGroup.add(zombie)
        }
        
      
    }
   
   
   


 
