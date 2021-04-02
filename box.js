class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':0.1,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("turquoise");
        stroke("black");
        strokeWeight(4);
        rect(0,0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          fill("turquoise");
        stroke("black");
        strokeWeight(4);
        rectMode(CENTER)
        rect(0,0, this.width, this.height);
          pop();
        }
        
      }
}