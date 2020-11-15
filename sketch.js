var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1,wall2,wall3, wall1sprite, wall2sprite, wall3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	wall1sprite = createSprite(400, 650, 200, 20);
	wall2sprite = createSprite(290, 610, 20, 100);
	wall3sprite = createSprite(510, 610, 20, 100);
	wall1sprite.shapeColor = "red";
	wall2sprite.shapeColor = "red";
	wall3sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;
    var ball_options = {
		restitution: .6,
		//isStatic: true
	}
	var wall_options = {
		isStatic: true
	}

	wall1 = Bodies.rectangle(400, 650, 200, 20, wall_options);
	wall2 = Bodies.rectangle(290, 610, 20, 100, wall_options);
	wall3 = Bodies.rectangle(410, 610, 20, 100, wall_options);
	World.add(world,wall1);
	World.add(world,wall2);
	World.add(world,wall3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , ball_options);
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  keyPressed(); 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   ball_options = {
	   isStatic: false
  } 
 }
}



