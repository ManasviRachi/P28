class Launcher{
    constructor(body,anchor){
        var options={
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA = body
        this.pointB = anchor
        this.launcher = Constraint.create(options)
        World.add(world,this.launcher)
    }

    attach(body){
        this.launcherObj.bodyA = body;
    }

     fly(){
         this.launcherObj.bodyA = null;
     }
     display(){
         if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.bodyB.position;
         }
         push();   
         stroke(48,22,8);
         if(pointA.x < 220) {
             strokeWeight(7);
             line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
             line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
             image(this.sling3,pointA.x -30, pointA.y -10,15,30);
         }
         else{
             strokeWeight(3);
             line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
             line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
             image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
         }      
         pop();
     }
}