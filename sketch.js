
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options = {
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,700,20);

	rect1 = new dustbin(430,620,100);
    rect2 = new dustbin(550,660,220,90);
    rect3 = new dustbin(670,620,100);

	Paper = new paper(100, 600, 40);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);

	rect1.display();
	rect2.display();
	rect3.display();
	
	ground.display();
	Paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x:85, y:-85});
	}
}