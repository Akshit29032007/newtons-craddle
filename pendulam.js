class Pendulam{
    constructor(x,y,color){
        var option ={
            restitution: 1 ,
            friction: 0,
            frictionAir: 0.0,
            slop:1,
            inertia:Infinity,
        };
        this.body=Bodies.rectangle(x,y,40,40,option);
        this.x=x;
        this.y=y;
        this.color=color;
        world.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        Push();
        translate(pos.x,pos.y)
        rotate(angle);
        noStroke();
        Fill(this.body);
        elipse(0,0,60,60);
        Pop();
        

    }

    }