class Bottle extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image=loadImage("sprites/bottle1.png");
    this.visiblity=225
  }
  diplay(){
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
     this.visiblity=this.visiblity - 5
      tint(225,this.visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    
    }
    score(){
      if (this.visiblity < 0 && this.visiblity > -1005){
        score++;
      }
    }
  
}