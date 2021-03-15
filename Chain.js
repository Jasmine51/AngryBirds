class Chain { // creating the class
    constructor (bodyA,bodyB){ // adding the arguments
        var options ={ // creating variable for options
            bodyA: bodyA, // The body to be attached
            bodyB: bodyB,
            stiffness:0.04, // stiffness of the body
            length : 10 // length of the body
        }

        this.chain = Constraint.create(options); // creating the constraint
        World .add(world,this.chain); // adding to the world
    }

    display(){
        var pointA = this.chain.bodyA.position; // the position for body a
        var pointB = this.chain.bodyB.position; // the position for body B
        strokeWeight(4); // Thickness of the chain
        line (pointA.x,pointA.y,pointB.x,pointB.y); // creating the line
    }
    
}