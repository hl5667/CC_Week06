// Version 01

// class CircleA {
//   constructor(start) {
//     this.x = random(0, 1000);
//     this.y = random(0, 1000);
//     this.xspeed = 3;
//     this.yspeed = 3;
//     this.r = random(100, 500);
//     this.rspeed = 2;
//     this.start = start
//   }

//   display(start) {
//     let hue = chroma.hsl((start+frameCount)%360, 1, 0.5)
//     this.x += this.xspeed;
//     this.y += this.yspeed;
//     this.r += this.rspeed;

//     if (this.x > 1000 || this.x < 0) {
//       this.xspeed *= -1;
//     }
    
//     if (this.y > 1000 || this.y < 0) {
//       this.yspeed *= -1;
//     }

//     if (this.r > 800) {
//       this.rspeed *= -1;
//     }
    
//     if (this.r < 100) {
//       this.rspeed *= -1; 
//     }

//     fill(hue.rgb())
//     ellipse(this.x, this.y, this.r);
//   }
// }

// class CircleB {
//   constructor(r) {
//     this.x = random(0, 1000);
//     this.y = random(0, 1000);
//     this.xspeed = 3;
//     this.yspeed = 3;
//     this.r = random(100, 500);
//     this.rspeed = 2;
//   }

//   display(start) {
//     let hue = chroma.hsl((start+frameCount)%360, 1, 0.5)
//     this.x -= this.xspeed;
//     this.y -= this.yspeed;
//     this.r -= this.rspeed;

//     if (this.x > 1000 || this.x < 0) {
//       this.xspeed *= -1;
//     }
    
//     if (this.y > 1000 || this.y < 0) {
//       this.yspeed *= -1;
//     }

//     if (this.r > 800) {
//       this.rspeed *= -1;
//     }
    
//     if (this.r < 100) {
//       this.rspeed *= -1; // Corrected from this.yspeed to this.rspeed
//     }

//     ellipse(this.x, this.y, this.r);

//   }
// }

// function setup() {
// createCanvas(1000, 1000);
// COne = new CircleA(random(100, 300));
// CTwo = new CircleB();
// CThree = new CircleA();
// CFour = new CircleB();
// CFive = new CircleA();
// CSix = new CircleB();
// CSeven = new CircleA();
// CEight = new CircleB();
// CNine = new CircleA();
// CTen = new CircleB();


// }

// function draw() {
// // hue = chroma.hsl(0.5*frameCount%360, 1, 0.5)

// // background(hue.rgb());
// background(0)

// COne.display(30);
// CTwo.display(250);
// CThree.display(100);
// CFour.display(120);
// CFive.display(300);
// CSix.display(0);
// CSeven.display(60);
// CEight.display(90);
// CNine.display(280);
// CTen.display(190);


// // drawingContext.filter = 'blur(300px)'
// }






//Version-02

// a class that generate random color circles
class CircleA {
  constructor(x, y, start) {
    this.x = x;
    this.y = y;
    this.xspeed = 3;
    this.yspeed = 3;
    this.r = random(100, 500);
    this.rspeed = 2;
    this.life = 10000;
    this.start = start;
    
  }

  display(start) {
    let hue = chroma.hsl((start+frameCount)%360, 1, 0.5)

    //bunce when his to the edge of the frame
    if(random(0, 100)%2 == 0){
      this.x += this.xspeed;
    this.y += this.yspeed;
    this.r += this.rspeed;  
    }
    else{
      this.x -= this.xspeed;
      this.y -= this.yspeed;
      this.r -= this.rspeed;
    }
    

    if (this.x > 1000 || this.x < 0) {
      this.xspeed *= -1;
    }
    
    if (this.y > 1000 || this.y < 0) {
      this.yspeed *= -1;
    }

    if (this.r > 800) {
      this.rspeed *= -1;
    }
    
    if (this.r < 100) {
      this.rspeed *= -1; 
    }

    fill(hue.rgb())
    ellipse(this.x, this.y, this.r);
  }
}

let C = [] 
let cont = 0
let circle
function setup() {
  createCanvas(1000, 1000);
 
}

function draw() {

  hue = chroma.hsl(0.5*frameCount%360, 1, 0.5)
  background(hue.rgb());

  //generate new circles
  circle = new CircleA(mouseX, mouseY, random(0, 300))

  //add new circles to the array
  C[cont] = circle;
  if(cont > 1){
    for(var i = 0; i < cont; i++){
      C[i].display(C[i].start);
    }
  }

  drawingContext.filter = 'blur(300px)'
}

function mouseClicked() {
cont++;
}
