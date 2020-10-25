class Slingshot{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10

        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        strokeWeight(3)
        line(pointA.x,pointA.y,ponyB.x,pointB.y)
    }
}