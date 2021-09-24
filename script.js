class Ball{

  constructor(x, y, w, h, vx, vy, _color){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.vx = vx;
   this.vy = vy;
   this.color = _color;
  } 

  drawball() {
   fill(this.color);
   ellipse(this.x, this.y, this.w, this.h); 
   this.y = this.vy + this.y;

   if(this.y > 625)
     this.vy = 0;
  }
} 

var ball1;

function setup() {
  createCanvas(450, 650);
  
  ball1 = new Ball(225, 0, 50, 50, 0, 3, "white");
}

function draw() {
  background("grey");

  ball1.drawball();
}
