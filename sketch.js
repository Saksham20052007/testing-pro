
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roofObject, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject = new roof(670, 200, 350, 20)
	bobObject1 = new bob(550, 500, 60);
	bobObject2 = new bob(610, 500, 60);
	bobObject3 = new bob(670, 500, 60);
	bobObject4 = new bob(730, 500, 60);
	bobObject5 = new bob(790, 500, 60);
	rope1 = new rope(roofObject.body, bobObject1.body, 90, 0);
	World.add(world, rope1);
	rope2 = new rope(roofObject.body, bobObject2.body, 90, 0);
	World.add(world, rope2)
	rope3 = new rope(roofObject.body, bobObject3.body, 90, 0);
	World.add(world, rope3);
	rope4 = new rope(roofObject.body, bobObject4.body, 90, 0);
	World.add(world, rope4);
	rope5 = new rope(roofObject.body, bobObject5.body, 90, 0);
	World.add(world, rope5);

	//Create the Bodies Here.

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  roofObject.display();
  bobObject1.display(); 
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  strokeWeight(3);
  line(bobObject1.body.position.x, bobObject1.body.position.y, roofObject.body.position.x, roofObject.body.position.y)
  line(bobObject2.body.position.x, bobObject2.body.position.y, roofObject.body.position.x, roofObject.body.position.y)
  line(bobObject3.body.position.x, bobObject3.body.position.y, roofObject.body.position.x, roofObject.body.position.y)
  line(bobObject4.body.position.x, bobObject4.body.position.y, roofObject.body.position.x, roofObject.body.position.y)
  line(bobObject5.body.position.x, bobObject5.body.position.y, roofObject.body.position.x, roofObject.body.position.y)

}
function keyPressed(){
	if(keyCode===32){
		Matter.body.applyForce(bobObject1.body, bobObject1.body.position, {x:-1, y:-2});
	}
}



