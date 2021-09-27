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

   if(this.y > 650){
     this.y = 0;
   }

   if(this.x > 450) {
     this.x = 0;
   }else if (this.x < 0) {
     this.x = 450;
   }
  }
} 

var ball1;

function setup() {
  createCanvas(450, 650);
  
  ball1 = new Ball(225, 0, 50, 50, 0, 5, "white");
}

function draw() {
  background("grey");

  ball1.drawball();

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
