class Sand {
    constructor(x, y,r) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1,
      }
      this.body = Bodies.circle(x, y, r, options);
      this.width = width;
      this.height = height;
      this.r      = r
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
      push();
      translate(pos.x, pos.y);
      
      strokeWeight(1)
      stroke("black")
      fill("red");
      ellipse(0, 0,this.r,this.r);
      pop();
    }
  };
  