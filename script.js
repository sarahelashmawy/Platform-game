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
  }
} 

var ball1;

function setup() {
  createCanvas(450, 650);
  
  ball1 = new Ball(225, 625, 50, 50, 0, 0, "white");
}

function draw() {
  background("grey");

  ball1.drawball();
}
