
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;


function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
 var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
 }
 
 ball = Bodies.cirlcle(260,100,radius/2,ball_options);
 World.add(world,ball);

 groundObj=new ground(width/2,670,width,20);
 leftSide= new ground(1100,600,20,120);
 rightSide = new ground(1350,600,20,120);

 Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  update()
  Engine.update(engine);
 
  var plane_options={
	isStatic:true
}

}

var block1_options = {
	restitution:0.5,
	friction:0.01,
	frictionAir:0.1
}

var block2_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}

var block3_options = {
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}