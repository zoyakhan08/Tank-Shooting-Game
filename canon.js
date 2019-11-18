class canon {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':10.0
      }
      this.body = Bodies.circle(x,y,100);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(5);
      stroke("Brown");
      ellipseMode(CENTER);
      fill(255);
      circle(350,200,this.radius);
      pop();
    }
  };
  