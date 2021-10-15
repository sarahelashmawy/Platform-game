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
      this.v = -0.1 * this.v;
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
          score++;
        }
      }
    }
  }
}

var ball, platform1, platform2;
var gamestate = 0;
var platforms = [];
var score = 0;

function preload(){
cloud = loadImage("Image/cloud.jpg");
}

function setup() {
  createCanvas(450, 650);

  ball = new Ball(225, 0, 25, 25, 2, 0.1, "white");

  platform1 = new Platform(400, 500, 10, 200, 0, 0, "black");
 // platform2 = new Platform(0, 300, 10, 200, 0, 0, "black");

  platforms.push(platform1);
  //platforms.push(platform2);

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
  background("#58CCED");

  textSize(25);
  fill(255);
  textFont("Rockwell");
  textAlign(CENTER);
  text("PRESS ENTER TO START", 210, 150);

  
  if (keyIsPressed) {
    if (keyCode === ENTER) {
      gamestate = 1;
    } 
  }
}

function game() {
  //background("#941739");
  background(cloud);
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
    } //else if (keyCode == UP_ARROW) {
      //ball.y -= 5;
    //} //else if (keyCode == DOWN_ARROW) {
      //ball.y += 5;
    //}
  }
 
  if (ball.y > 650) {
    gamestate = 2;
  }

 fill(255);
 textSize(24);
 text("Score: " + score, 60, 25 );  
}

function gameover() {
  background("#d0b4dc");

  textSize(25);
  fill(255);
  textFont("Rockwell");
  textAlign(CENTER);
  text("GAME OVER", 210, 150);
  text("YOU LOSE", 210,175 );
  text("TO PLAY AGAIN PRESS ENTER", 210, 250);

  if (keyIsPressed) {
    if (keyCode === ENTER) {
      gamestate = 1;
      ball = new Ball(225, 0, 25, 25, 1, 0.3, "white");
      score = 0;
    } 
  }
}
