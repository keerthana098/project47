class Connection{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.bodyB=bodyB;
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = ball;
    }

    fly(){
        this.sling.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
        var bodyA = this.sling.bodyA.position;
        var bodyB = this.bodyB;
        
        //strokeWeight(4);
        //stroke("purple");
        line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
        }
        }
    
}