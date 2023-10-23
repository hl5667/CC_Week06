

class CircleA {
  constructor() {
    this.x = random(0, 1000);
    this.y = random(0, 1000);
    this.xspeed = 3;
    this.yspeed = 3;
    this.r = random(100, 500);
    this.rspeed = 2;
    
  }

  display(start) {
    let hue = chroma.hsl((start+frameCount)%360, 1, 0.5)
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.r += this.rspeed;

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

class CircleB {
  constructor(r) {
    this.x = random(0, 1000);
    this.y = random(0, 1000);
    this.xspeed = 3;
    this.yspeed = 3;
    this.r = random(100, 500);
    this.rspeed = 2;
  }

  display(start) {
    let hue = chroma.hsl((start+frameCount)%360, 1, 0.5)
    this.x -= this.xspeed;
    this.y -= this.yspeed;
    this.r -= this.rspeed;

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
      this.rspeed *= -1; // Corrected from this.yspeed to this.rspeed
    }

    ellipse(this.x, this.y, this.r);

  }
}

function setup() {
createCanvas(1000, 1000);
COne = new CircleA();
CTwo = new CircleB();
CThree = new CircleA();
CFour = new CircleB();
CFive = new CircleA();
CSix = new CircleB();
CSeven = new CircleA();
CEight = new CircleB();
CNine = new CircleA();
CTen = new CircleB();


}

function draw() {
hue = chroma.hsl(0.5*frameCount%360, 1, 0.5)

background(hue.rgb());

COne.display(30);
CTwo.display(250);
CThree.display(100);
CFour.display(120);
CFive.display(300);
CSix.display(0);
CSeven.display(60);
CEight.display(90);
CNine.display(280);
CTen.display(190);


drawingContext.filter = 'blur(300px)'
// drawingContext.filter = 'contrast(100)'


}

// function showLens(x, y) {
//   // Lens properties
//   let lsize = 60, lsize2 = lsize * lsize;
//   let mag = 2.0;
//   let k = -0.00016;
//   var u, v, r2;
//   loadPixels();
//   for (let vd = - lsize; vd < lsize; vd++) {
//     for (let ud = - lsize; ud < lsize; ud++) {
//       r2 = ud*ud + vd*vd;
//       console.log(vd,ud)
//       if (r2 <= lsize2) {
//         let f = mag + k * r2;
//         u = floor(ud/f) + x - offX;
//         v = floor(vd/f) + y - offY;
//         let px = ud + x;
//         let py = vd + y;
//         if (px >=0 && px < 1000 && py >=0 && py < 1000) {
//           if (u >= 0 && u < 1000 && v >=0 && v < 1000) {
//             set(ud + x, vd + y, color(255,0,0));
//           } else {
//             set(ud + x, vd + y, color(180));
//           }
//         }
//       }
//     }
//   }
//   updatePixels();
// }
// function mouseClicked() {
// // Handle mouse click event if needed
// }



