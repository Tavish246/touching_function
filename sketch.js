var a,b;

function setup() {
  createCanvas(800,400);
  a = createSprite(100,100,100,100);
  b = createSprite(200,100,50,50);
}

function draw() {
  background(255,255,255);  
  
b.x = World.mouseX;
b.y = World.mouseY;

  if(b.x-a.x<b.width/2+a.width/2 && a.x-b.x<a.width/2+b.width/2 && b.y-a.y<b.height/2+a.height/2&&a.y-b.y<a.height/2+b.height/2){
    b.shapeColor = "red";
    a.shapeColor = "red";
  }
  
  else{
    b.shapeColor = "green";
    a.shapeColor = "green";
  }
  
  drawSprites();

  
}