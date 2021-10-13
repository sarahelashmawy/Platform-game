class Ball {

  constructor(x, y, w, h, v, gravity, _color) {
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
    rect(this.x, this.y, this.w, this.h);
    this.y = this.v + this.y;
    this.v = this.v + this.g;

    if (this.y > 650) {
      this.v = -0.95 * this.v;
    }

    if (this.x > 450) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = 450;
    }
  }
}

class Platform {

  constructor() {
    this.x = random(width - 100);
    this.y = -50;
    this.w = 100;
    this.h = 20;    
    this.vy = 3;
    this.color = "gray";
  }

  drawPlatform() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    this.y += this.vy;
  }

  checkCollision(){
    //console.log("checkCollision", ball.v)
    // alleen als we vallen
    if(ball.v > 0){
      
      // collide on y-axis
      if(ball.y + ball.h > this.y){
        
        if(ball.x + ball.w > this.x && ball.x < this.x + this.w){
          ball.v = ball.v * -1;
        }
      }
    }
  }
}

var ball, platform1, platform2;
var gamestate = 1;
var platforms = [];

function setup() {
  createCanvas(450, 650);

  ball = new Ball(225, 0, 25, 25, 5, 1, "white");

  // platform1 = new Platform(0, 500, 10, 200, 0, 0, "black");
  // platform2 = new Platform(0, 300, 10, 200, 0, 0, "black");

}



function draw() {

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

  ball.drawball();

  if (frameCount % 100 == 0) {    
    platforms.push(new Platform());  
  }

  platforms.forEach((p) => {
    p.drawPlatform();
    p.checkCollision();
  });



  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      ball.x += 5;
    } else if (keyCode == LEFT_ARROW) {
      ball.x -= 5;
    } else if (keyCode == UP_ARROW) {
      ball.y -= 5;
    } else if (keyCode == DOWN_ARROW) {
      ball.y += 5;
    }
  }

}
