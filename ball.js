class Ball {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution :0.8,
            friction : 0.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER)
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        stroke("blue")
        strokeWeight(5)
        fill("green")
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}