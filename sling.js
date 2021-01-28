class Sling{
constructor(bodyA,pointB){

var option= {

bodyA: bodyA,
pointB:pointB,
stiffness:1,
angularstiffness:1,
length:220
};

this.pointB=pointB;
this.pointx=bodyA.x;
this.pointy=bodyA.y - 250;
this.sling=Constraint.create(option);
World.add(world, this.sling);
}


display() {
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(3.5);
        stroke("#fff"); 
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();

    }
}


}

