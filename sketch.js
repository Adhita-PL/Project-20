var car, wall;
var speed, weight;
function setup() {
  createCanvas(windowWidth,windowHeight);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = "blue";
  car2 = createSprite(50,600,50,50);
  wall2 = createSprite(1500,600,60,200);
  wall2.shapeColor = "blue";
  sprite = createSprite(800,400,windowWidth,20);
  sprite.shapeColor = "white";
}

function draw() {
  background(0); 
  car.velocityX = speed;
  car2.velocityX = speed;
  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation=0.5 * weight* speed * speed/22509;
    if(deformation >180) {
      car.shapeColor = color(255,0,0);
    }
    if(deformation <180&& deformation>100) {
      car.shapeColor = color(230,230,0);
    }
    if( deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }
  if(wall.x - car2.x < (car2.width + wall.width)/2) {
    car2.velocityX = 0;
    var deformation=0.5 * weight* speed * speed/22509;
    if(deformation >180) {
      car2.shapeColor = color(255,0,0);
    }
    if(deformation <180&& deformation>100) {
      car2.shapeColor = color(230,230,0);
    }
    if( deformation<100) {
      car2.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
