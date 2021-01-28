var pendulam1,pendulam2,pendulam3,pendulam4,pendulam5;
var sling1,sling1,sling1,sling,sling5;

const Engine=Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint =Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;


function setup() {

	createCanvas(windowWidth  ,  windowHeight);
	engine=Engine.create();
	world=engine.world

	//let canvasmouse=Mouse.create(canvas.elt);
	// canvasmouse.pixelRatio=pixelDensity();
	// let option={
	// 	mouse:canvasmouse
	// };

	// mConstraint=MouseConstraint.create(engine,option);
	// World.add(world,mConstraint);

	pendulam1 = new Pendulam(40,450,"red");
	pendulam2 = new Pendulam(410,450,"red");
	pendulam3 = new Pendulam(485,450,"red");
	pendulam4= new Pendulam(555,450,"red");
	pendulam5 = new Pendulam(625,450,"red"); 

	sling1 = new Sling(pendulam1.body,{x : 340,y : 200});
	sling2 = new Sling(pendulam2.body,{x : 410,y :200});
	sling3  = new Sling(pendulam3.body,{x : 485,y :200});
	sling4 = new Sling(pendulam4.body,{x : 555,y : 200});
	sling5 = new Sling(pendulam5.body,{x : 625,y : 200});


}

function draw() {
  
  background("black");
  Engine.update(engine);
  

  pendulam1.display();
  sling1.display();

  pendulam2.display();
  sling2.display();

  pendulam3.display();
  sling3.display();

  pendulam4.display();
  sling4.display();

  pendulam5.display();
  sling5.display();
  drawSprites();
 
}


