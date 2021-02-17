class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();

  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 -50, 0);

    this.input.position(displayWidth/2 -50, displayHeight/2 -150);
    this.button.position(displayWidth/2 -50, displayHeight/2 -100);
    this.reset.position(displayWidth -100, 20);
    this.reset.mousePressed(()=>{
     game.update(0);
     player.updateCount(0);
     database.ref('/players').remove();
    })

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2, displayHeight/4);
    });

  }
}