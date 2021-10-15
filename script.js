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
    //fill(this.color);
    //rect(this.x, this.y, this.w, this.h);
    image(astro, this.x, this.y, 40, 60);
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
    //fill(this.color);
    //rect(this.x, this.y, this.w, this.h);
    image(asteroid, this.x, this.y, 150, 50);
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
var highscore = 0;

function preload(){
 gameimg = loadImage("Image/gameback.gif");
 begin = loadImage("Image/beginback.gif");
 asteroid = loadImage("Image/asteroid.png");
 astro = loadImage("Image/astronaut.png");

 type  = loadFont("Gamefonts/Cubic.otf");
}

function setup() {
  createCanvas(450, 650);

  ball = new Ball(225, 0, 25, 25, 2, 0.2,"white");

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

  if (gamestate == 3){
    instructions();
  }
}



function menu() {
 // background("#58CCED");
 background(begin);

  textSize(35);
  fill(255);
  stroke(0);
  strokeWeight(4);
  textFont(type);
  textAlign(CENTER);
  text("MENU", 220, 200);

  textSize(22);
  text("PRESS ENTER TO START", 220, 275);
  text("PRESS CONTROL TO VIEW THE INSTRUCTIONS", 220, 325);

  text("HIGHSCORE: " + highscore, 220, 400);

  
  if (keyIsPressed) {
    if (keyCode === ENTER) {
      gamestate = 1;
    } else if (keyCode == CONTROL) {
      gamestate = 3;
    }
  }
}

function game() {
  //background("#941739");
  background(gameimg);
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
    } 
  }
 
  if (ball.y > 650) {
    gamestate = 2;
  }

 fill(255);
 textSize(24);
 text("Score: " + score, 60, 25 );  
}

function gameover() {
  //background("#d0b4dc");
  background(begin);

  textSize(30);
  fill(255);
  textFont(type);
  textAlign(CENTER);
  text("GAME OVER", 220, 175);
  
  textSize(25);
  fill(255);
  text("SCORE: " + score, 220,275 );
  text("HIGHSCORE: " + highscore, 220,300);
  text("TO PLAY AGAIN PRESS ENTER", 220, 350);
  text("TO RETURN TO MENU PRESS BACKSPACE", 220, 375);

  if (score > highscore){
    highscore = score;
  }

  if (keyIsPressed) {
    if (keyCode === ENTER) {
      gamestate = 1;
      ball = new Ball(225, 0, 25, 25, 1, 0.3, "white");
      score = 0;
    } else if (keycode = BACKSPACE) {
      gamestate = 0;

    }
  }
}

function instructions() {
  background(begin);

  textSize(30);
  text("INSTRUCTIONS", 220, 150);

  textSize(20);
  text("1. USE THE LEFT AND RIGHT ARROW", 220, 200);
  text("TO NAVIGATE THE ASTRONAUT", 220, 225);

  text("2. DO NOT TOUCH THE GROUND IF YOU", 220, 275);
  text("DO NOT WANT TO LOSE!", 220, 300);

  text("3. MOST IMPORTANT IS TO ENJOY THE GAME!", 220, 350);

  text("TO RETURN BACK TO THE MENU PRESS SHIFT", 220, 400);

  if (keyIsPressed) {
    if (keyCode === SHIFT) {
      gamestate = 0;
    }
  }
}
