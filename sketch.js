var bg, bgIMG;
var player, playerimg;
var lion, lionimg,rock,rockimg, rockGroup,lionGroup;


function preload() {
  bgIMG = loadImage("bg1.jpg");
  playerimg = loadImage("Player.png")
  rockimg = loadImage("Rock(NPC).png")
  lionimg = loadImage("Lion.png")
}

function setup(){
    createCanvas(600,700);
    bg=createSprite(700,285);
    bg.addImage(bgIMG);
    bg.scale = 3.25;
    bg.velocityX = -3;


player = createSprite(50,400);
player.addImage(playerimg);
player.scale = 0.25;

rockGroup = new Group;
lionGroup = new Group;

}

function draw(){
    background(0);
   
  
    if(bg.x <105){
        bg.x = bg.width/2;

    }
    spawnRocks();
    spawnLions();
    drawSprites();
}


function spawnRocks(){
    if(World.frameCount % 350=== 0){
    rock = createSprite(800,375);
    rock.addImage(rockimg);
      rockGroup.add(rock);
    rock.scale = 0.075;
    rock.velocityX= -1;
  }
}


function spawnLions(){
    if(World.frameCount % 650=== 0){
    lion = createSprite(800,375);
    lion.addImage(lionimg);
      lionGroup.add(lion);
    lion.scale = 0.45;
    lion.velocityX= -1;
  }
}
