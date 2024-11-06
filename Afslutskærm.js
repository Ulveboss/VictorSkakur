class AfslutSkærm {
  constructor(vinder) {
    this.vinder = vinder;
this.knapAfslut = new ButtonCircle(width / 2, height / 3, 100, color(175, 0, 0), color(100, 0, 0));
  }
  
  run() {
    background(220);
    textSize(32);
    fill(0);
    text(`Spillet er slut!`, width / 2, height / 4);
    text(`${this.vinder} vinder!`, width / 2, height / 2);
    this.knapAfslut.draw();
  }
  
  musKlikket() {
    if (this.knapAfslut.overCircle()) {
      manager.skiftGameState("menu");
    }
  }
}
