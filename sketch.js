
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1025, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(600,height,1200,30)
  stopper = new Ground(820,535,10,90)
  dustbin = new Dustbin (800,535,100,100)
  paper = new Paper(150,200,50,50)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  ground.display()
  stopper.display()
  dustbin.display()
  paper.display();
  drawSprites();
}

function keyPressed (){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position, {x : 100, y : -195})
}
}