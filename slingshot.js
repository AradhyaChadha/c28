class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            'length':5,
            'stiffness':0.05
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
    
        if (this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            line (posA.x,posA.y,posB.x,posB.y);
        }

    }
}