class Bob{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 1,
            density: 0.8,
            friction: 0

        }
        this.x = x;
        this.r = r;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);


    }

display(){
    var bobPos = this.body.position;
    push();
    translate(bobPos.x, bobPos.y);
    rectMode(CENTER);
    fill(255 ,0 , 255);
    ellipse(0, 0, this.r, this.r);
    pop();

}


}