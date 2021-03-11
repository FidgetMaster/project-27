
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,300,20)
	roofObject = new Ground(400,100,350,40);
	rope1 = new Rope(bob1.body,roofObject.body,0,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  rope1.display();
  roofObject.display();

  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:10})
  }
}



