var pendulam1,pendulam2,pendulam3,pendulam4,pendulam5;
var sling1,sling1,sling1,sling,sling5;

const Engine=Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint =Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;


function setup() {

	createCanvas(windowWidth/2  ,  windowHeight/1.5);
	engine=Engine.create();
	world=engine.world

	let canvasmouse=Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let option={
		mouse:canvasmouse
	};

	mConstraint=MouseConstraint.create(engine,option);
	World.add(world,mConstraint);

	pendulam1 = new Pendulam(340,450,"red");
	/*pendulam2 = new Pendulam(340,500,"red");
	pendulam3 = new Pendulam(340,500,"red");
	pendulam4= new Pendulam(340,600,"red");
	pendulam5 = new Pendulam(340,650,"red"); */

	sling1 = new Sling(pendulam1.body,{x : 340,y : 200});
 

}

function draw() {
  
  background("red");
  Engine.update(engine);
  pendulam1.display();
  sling1.display();

  
  drawSprites();
 
}

function mouseDragged(){
	Matter.body.setPosition(pendulam.body,{x:mouseX , y:mouseY})
};


