const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var block1, treeImg, tree, boy, boyImg, tree1, stonething, stuffI;

function preload() {
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
	stuffI = loadImage("stone.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	tree = createSprite(800, 500, 10, 10);
	tree.addImage("img", treeImg);
	tree.scale = 0.4;
	boy = createSprite(200, 550, 160, 240);
	boy.addImage("imgs", boyImg);
	boy.scale = 0.1;
	Engine.run(engine);
	var option1 = {
		isStatic: false,
		density: 1
	}
	stonething = Bodies.circle(158, 495, 60, option1);
	World.add(world, stonething);
	block1 = new mango(700, 400, 50, 50);
	block2 = new mango(700, 300, 100, 100);
	block3 = new mango(750, 458, 50, 50);
	block4 = new mango(800, 300, 50, 50);
	block5 = new mango(800, 400, 50, 50);
	block6 = new mango(887, 346, 50, 50);
	block7 = new mango(843, 376, 50, 50);

	rope = new Sling(stonething, { x: 158, y: 495 });
	
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	//Engine.update(engine);
	
	drawSprites();
	imageMode(CENTER);
	image(stuffI, stonething.position.x, stonething.position.y, 60, 60);
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block1.detectCollision();
	block2.detectCollision();
	block3.detectCollision();
	block4.detectCollision();
	block5.detectCollision();
	block6.detectCollision();
	block7.detectCollision();
	detectCollision(stonething, block1.body);
	detectCollision(stonething, block2.body);
	detectCollision(stonething, block3.body);
	detectCollision(stonething, block4.body);
	detectCollision(stonething, block5.body);
	detectCollision(stonething, block6.body);
	detectCollision(stonething, block7.body);
}
function mouseDragged() {
	Matter.Body.setPosition(stonething, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	rope.fly();
}
function keyPressed() {
	if (keyCode == 32) {
		stonething.position.x = 158;
		stonething.position.y = 495;
		rope.attach(stonething);
		
	}
}
function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= lmango.width + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}