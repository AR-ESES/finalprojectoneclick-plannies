class Unicorn {
  
    constructor() {
      this.w = 65.1*3;
      this.h = 87.2*3;
      this.x = width/3;
      this.y = height - this.h;
      this.vy = 0;
      this.gravity = 2;
    }
  
    jump() {
      if (this.y == height - this.h) {
        this.vy = -45;
      }
    }
  
    hits(planet) {
      let x1 = this.x + this.w * 0.5;
      let y1 = this.y + this.h * 0.5;
      let x2 = planet.x + planet.r * 0.5;
      let y2 = planet.y + planet.r * 0.5;
      return collideCircleCircle(x1, y1, this.h, x2, y2, planet.r);
    }
  
    move() {
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.h);
    }
  
    show() {
      //image(uImg, this.x, this.y, this.r, this.r);
      image(uImg, this.x, this.y, this.w, this.h);
      
      // fill(255, 50);
      // ellipseMode(CORNER);
      // ellipse(this.x, this.y, this.r, this.r);  
    }
  }