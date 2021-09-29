class Ball{

  constructor(x, y, w, h, v, gravity, _color){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.v = v;
   this.g = gravity;
   this.color = _color;
  } 

  drawball() {
   fill(this.color);
   ellipse(this.x, this.y, this.w, this.h);
     this.y = this.v + this.y;
     this.v = this.v + this.g;

   if(this.y > 650){
     this.v = -0.95 * this.v;
   }

   if(this.x > 450) {
     this.x = 0;
   }else if (this.x < 0) {
     this.x = 450;
   }
  }
} 

class PLatform{

  constructor(x, y, h, w, vx, vy, _color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.color = _color;
  }

  drawplatform() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h)
    this.y = this.vy + this.y;
  }

}


var ball1, platform1;

function setup() {
  createCanvas(450, 650);
  
  ball1 = new Ball(225, 0, 50, 50, 1, 0.2, "white");

  platform1 = new PLatform(0, 300, 10, 200, 0, 0, "black");
  
}

function draw() {
  background("grey");

  ball1.drawball();

  platform1.drawplatform();

  if (keyIsPressed) {
   if (keyCode == RIGHT_ARROW) {
    ball1.x +=5; 
   }  else if (keyCode == LEFT_ARROW) {
     ball1.x -= 5;
   } else if (keyCode == UP_ARROW) {
     ball1.y -= 5; 
   } else if (keyCode == DOWN_ARROW) {
     ball1.y +=5;} 
  }
}
