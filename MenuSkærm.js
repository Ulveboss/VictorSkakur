class MenuSkærm{
  
  constructor(){
  this.knapSpil = new ButtonCircle(width/2, height/3, 100, color(175, 0, 0), color(100, 0, 0));
  this.knapTid = new ButtonCircle(width/2, height/1.5, 100, color(255), color(100));
    this.knapTid.minus = new ButtonCircle(width/2, height/1.25, 75, color(255), color(100))
  this.minutter = 5;
  }
  
  run(){
    background(220);
    this.knapSpil.draw();
    this.knapTid.draw();
    this.knapTid.minus.draw();
    fill(200, 100, 100);
    textSize(24);
    text("MENU", width/2, height/8);
    fill(0);
    text("SKAK", width/2, height/3+5);
    text(this.minutter, width/2, height/1.5 + 10);
    text("-", width/2, height/1.25 + 10)
  }
  
  musKlikket(){
    if (this.knapSpil.overCircle()){
      let s = manager.skærme.spil;
      s.sætTid(this.minutter);
      manager.skiftGameState("spil");
    }
    else if (this.knapTid.overCircle()){
      this.minutter++;
    } else if (this.knapTid.minus.overCircle()){
      if (this.minutter > 1)
      this.minutter--;
    }
  }
}

   
 