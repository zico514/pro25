class Paper {
    constructor(x, y) {
      var options = {
       isStatic:false,
        restitution: 0,
        friction: 0.5,
        density: 1.2
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 75;
      this.image=loadImage("sprites/paper.png");  
          this.image.scale=0.1

      World.add(world, this.body);
      
  
    }
    display() {
      var pos = this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      
      imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
      
      
      pop();
    }
  }
