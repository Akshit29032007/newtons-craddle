class Sling{
constructor(bodyA,pointB){

var option= {

bodyA: bodyA,
pointB:pointB,
stigffness:1,
angularstiffness:1,
lenght:220
};

this.pointB=pointB;
this.pointx=pointA.x;
this.pointy=pointA.y - 250;
this.sling=Constrain.create(option);
worls.add(world, this.sling);



display() {
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        puish();
        strokeweight(3.5);
        stroke("#fff");
        line(pointB.x,popintB.y,pointA.x,pointA.y);
        pop();

    }
}


}
}
