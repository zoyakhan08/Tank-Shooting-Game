class barrell {
    constructor(x, y,height,angle) {
      var options = {
          'friction':0.3,
          'density':10.0
      }
      this.body = Bodies.rectangle(x, y, 50, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("grey");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  