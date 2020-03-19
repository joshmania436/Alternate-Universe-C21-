var sun, mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sunImg,mercuryImg,earthImg,marsImg,jupiterImg,saturnImg,uranusImg,neptuneImg;
var radius = 60;
var angle = 0;
var speed = 0.5;
var centerX = 300;
var centerY = 300;

function preload() {
  sunImg = loadImage("Sprites/sun.jpg");
  mercuryImg =loadImage("Sprites/mercury.jpg");
  neptuneImg =loadImage("Sprites/neptune.jpg");
  marsImg = loadImage("Sprites/Mars.jpg");
  uranusImg = loadImage("Sprites/Uranus.jpg");
  saturnImg = loadImage("Sprites/Saturn.jpg");
  venusImg = loadImage("Sprites/Venus.jpg");
  earthImg = loadImage("Sprites/Earth.jpg");
  jupiterImg = loadImage("Sprites/Jupiter.jpg")
}

function setup() {
  createCanvas(600,600);
  sun=createSprite(300,300,80,80);
  sun.addImage(sunImg);
  sun.scale=0.15;
  //sun.debug=true;
  sun.setCollider("circle",0,0,260);

  mercury=createSprite(360,300,20,20);
  mercury.addImage(mercuryImg);
  mercury.scale=0.2;
  //mercury.debug=true;
  mercury.setCollider("circle",0,0,60);

  venus=createSprite(390,300,20,20);
  venus.addImage(venusImg);
  venus.scale=0.2;
  //venus.debug=true;
  venus.setCollider("circle",0,0,60);

  earth=createSprite(420,300,20,20);
  earth.addImage(earthImg);
  earth.scale=0.2; 
  //earth.debug=true;
  earth.setCollider("circle",0,0,60);
 
  mars=createSprite(450,300,20,20);
  mars.addImage(marsImg);
  mars.scale=0.2;
  //mars.debug=true;
  mars.setCollider("circle",0,0,60);
  
  jupiter=createSprite(480,300,20,20);
  jupiter.addImage(jupiterImg);
  jupiter.scale=0.2;
  //jupiter.debug=true;
  jupiter.setCollider("circle",0,0,60);

  saturn=createSprite(510,300,20,20);
  saturn.addImage(saturnImg);
  saturn.scale=0.2;
 // saturn.debug=true;
  saturn.setCollider("circle",0,0,60);

  uranus=createSprite(540,300,20,20);
  uranus.addImage(uranusImg);
  uranus.scale=0.2;
  //uranus.debug=true;
  uranus.setCollider("circle",0,0,60);

  neptune=createSprite(570,300,20,20); 
  neptune.addImage(neptuneImg);
  neptune.scale=0.2;
 // neptune.debug=true;
  neptune.setCollider("circle",0,0,60);

}

function draw() {
  background("#040b70"); 
  angle = angle + speed;
  mercury.x= centerX -60 * cos(angle);
  mercury.y= centerY  + 60 * sin(angle);
  venus.x= centerX - 90 * cos(angle);
  venus.y=centerY + 90 * sin(angle);
  earth.x= centerX - 120 * cos(angle);
  earth.y=centerY +  120 * sin(angle);
  mars.x= centerX - 150 * cos(angle);
  mars.y=centerY +  150 * sin(angle);
  jupiter.x= centerX - 180 * cos(angle);
  jupiter.y=centerY + 180 * sin(angle);
  saturn.x= centerX - 210 * cos(angle);
  saturn.y=centerY + 210 * sin(angle);
  uranus.x= centerX - 240 * cos(angle);
  uranus.y=centerY + 240 * sin(angle);
  neptune.x= centerX-270 * cos(angle);
  neptune.y=centerY + 270 * sin(angle);

  if(frameCount%9===0){
    sun.scale=sun.scale+0.01;
  }

  if(sun.isTouching(mercury)) {
    mercury.destroy();
  }
  if(sun.isTouching(venus)) {
    venus.destroy();
  }
  if(sun.isTouching(earth)) {
    earth.destroy();
  }
  if(sun.isTouching(mars)) {
    mars.destroy();
  }
  if(sun.isTouching(jupiter)) {
    jupiter.destroy();
  }
  if(sun.isTouching(saturn)) {
    saturn.destroy();
  }
  if(sun.isTouching(uranus)) {
    uranus.destroy();
  }
  if(sun.isTouching(neptune)) {
    neptune.destroy();
  }

  drawSprites();
}