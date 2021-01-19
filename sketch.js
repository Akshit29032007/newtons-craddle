var pendulam
var sling

const Engine=Matter.Engine;
const world = Matter.World;
const bodies =Matter.Bodies;
const constraint =Matter.Constraint

function preload()
{
	
	
}

function setup() {

	Pendulam = new Pendulam(200,200,20,20);
	


	createCanvas(windowWidth/2  ,  windowHeight/1.5);
	engine=Engine.create();
	world=engine.world

	let canvasmouse=mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let option={
		mouse:canvasmouse
	};

	mConstraint=MouseConstraint.create(engine,option);
	World.add(world,mConstraint);

 

}

function draw() {
  
  background("red");

  
  drawSprites();
 
}

function mouseDragged(){
	Matter.body.setPosition(pendulam.body,{x:mouseX , y:mouseY})
};


