
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var r1, r2, r3, r4, r5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(380, 250, 200, 30);

	bob1 = new Bob(320, 575, 40);
	bob2 = new Bob(360, 575, 40);
	bob3 = new Bob(400, 575, 40);
	bob4 = new Bob(440, 575, 40);
	bob5 = new Bob(480, 575, 40);

	

	r1 = new Rope(bob1.body, roof.body, -80, 0 );
	r2 = new Rope(bob2.body, roof.body, -40, 0 );
	r3 = new Rope(bob3.body, roof.body,   0, 0 );
	r4 = new Rope(bob4.body, roof.body,  40, 0 );
	r5 = new Rope(bob5.body, roof.body,  80, 0 );

	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
roof.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

r1.display();
r2.display();
r3.display();
r4.display();
r5.display();





  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y: 50})

	}

}
