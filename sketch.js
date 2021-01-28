var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1300,400);
  bullet=createSprite(400, 200, 50, 50);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
 
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  
  //weight=randon(30,52);
  //speed=random(223,321);
 hasCollided(bullet,wall);
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

  if (hasCollided(bullet,wall)){
    bullet.velocity=0;
    var damage=0.5*weight*speed*speed/(thickenness*thickness*thickness);

    if (damage>10)


wall.shapeColor="red";


if (damage<10)
wall.shapeColor="green";

  }
  
}
