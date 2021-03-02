class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.smoke = loadImage("smoke.png")
    this.ar = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y]
      this.ar.push(position)
    }

    for(var i = 0; i<this.ar.length; i++){
      image(this.smoke,this.ar[i][0],this.ar[i][1])
    }

  }
}
