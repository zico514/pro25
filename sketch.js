
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bImg;

function preload()
{
	bImg=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
paper1=new Paper(100,500);

log1=new Bin(519,650,300,PI/4);
log2=new Bin(681,650,300,PI/4);

dustb=createSprite(600,590,0.1,0.1);
  dustb.scale=0.7

dustb.addImage(bImg,"dustbingreen.png");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  paper1.display();
  ground.display();
  log1.display();
  log2.display();
  Throw();
  drawSprites();
 
}
function Throw(){
	if(keyDown ("space")){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:7,y:-20});

	}
}


