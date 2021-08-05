var iss, issImg;
var spacecraft, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked = false;
var bg;

function preload(){
issImg = loadImage("iss.png");
spacecraftImg1 = loadImage("spacecraft1.png");
spacecraftImg2 = loadImage("spacecraft2.png");
spacecraftImg3 = loadImage("spacecraft3.png");
spacecraftImg4 = loadImage("spacecraft4.png");
bg = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.8;
  //iss.setCollider("circle",0,0,50);
  //iss.debug = true;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.25;
  spacecraft.depth = iss.depth-1;
  //spacecraft.setCollider("circle",0,0,200);
  //spacecraft.debug = true;

}

function draw() {
  background(bg); 
  drawSprites();
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -4;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftImg1);
      spacecraft.y = spacecraft.y + 4;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftImg3);
      spacecraft.x = spacecraft.x -4;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftImg2);
      spacecraft.x = spacecraft.x + 4;
    }

    
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked = true;
    spacecraft.addImage(spacecraftImg1);
    textSize(25);
    fill("white");
    text("Docking Successful!",200, 300);
  }
}