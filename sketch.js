
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball;
var bottomBin,leftBin,rightBin;
var bin;
function preload()
{
	binImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground = new Ground(600,350,width,20);
	ball = new Paper(100,100,40,40);
	bottomBin = new Dustbin(1000,330,120,20);
	leftBin = new Dustbin(940,265,20,150);
	rightBin = new Dustbin(1060,265,20,150);

	bin = createSprite(1000,265,20,20);
	bin.addImage(binImage);
	bin.scale = 0.45;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-125});
	}
}



