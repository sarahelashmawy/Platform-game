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

class Platform{

  constructor(x, y, h, w, vx, vy, _color){
    this.x = random(350);
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.color = _color;
  }

  drawplatform() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    this.y += 1;
  }
}

var ball1, platform1, platform2;
var gamestate = 1;

function setup() {
  createCanvas(450, 650);
  
  ball1 = new Ball(225, 0, 50, 50, 5, 1, "white");

   platform1 = new Platform(0, 500, 10, 200, 0, 0, "black");
   platform2 = new Platform(0, 300, 10, 200, 0, 0, "black");

}

var platforms

function draw() {
 fill(0);

   if(frameCount % 100 == 0){
    platforms.push(new Platform());
   }

   platforms.forEach((p) => {
    p.draw();
   });

 text("gamestate" + gamestate, 25, 25);

 if (gamestate == 0) {
   menu();
 }

 if (gamestate == 1) {
   game();
 }

 if (gamestate == 2) {
   gameover();
 }
}


function menu() {
 background("#BBF1F1");

 textSize(60);
 textFont("Rockwell");
 textAlign(CENTER);
 text("MENU", 210, 50);
 
 textSize(25);
 textFont("Rockwell");
 textAlign(CENTER);
 text("START GAME", 210, 150);
}

function game() {
  background("#C09591");

  ball1.drawball();

  platform1.drawplatform();
  platform2.drawplatform();

  

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
