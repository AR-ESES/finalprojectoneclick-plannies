class Planet{

    constructor() {
      this.r = height/12;
      this.x = width;
      this.y = random(height/3 - this.r);
     
    }
  
    move() {
      this.x -= random(5,20);
      this.y += 8;
    }
  
    show() {
      

   
        image(sol, this.x, this.y, this.r, this.r);
      
       
      
      // fill(255, 50);
      // ellipseMode(CORNER);
      // ellipse(this.x, this.y, this.r, this.r);
    }
  
  }