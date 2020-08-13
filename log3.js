class Log3 {
    constructor(x, y , height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push(); //adding new setting
      rectMode(CENTER);
      //strokeWeight(4);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop(); //reverts back to the old setting
    }
  };