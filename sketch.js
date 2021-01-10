var pendulam
var Sling


function preload()
{
	
	
}

function setup() {
	
 

}



function drawSprites(){
	createCanvas(windowWidth/2  ,  windowHeight/1.5);
	engine=Engine.create();
	world=engine.world

	let canvasmouse=mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let option={
		mouse:canvasmouse
	};

	mConstrain=MouseConstrain.cretae(engine,option);
	world.add(world,mconstrain);



}



function mouseDragged(){
	Matter.body.setPosition(pendulam.body,{x:mouseX , y:mouseY})
};


 









function draw() {
  
  background("white");

  
  drawSprites();
 
}



