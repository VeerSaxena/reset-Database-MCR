class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1= createSprite(100,200);
    car1.addImage(car1Img);
    car2 = createSprite(300,200);
    car2.addImage(car2Img);
    car3 = createSprite(500,200);
    car3.addImage(car3Img);
    car4 = createSprite(700,200);
    car4.addImage(car4Img);
    cars = [car1, car2, car3, car4];
    }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //index in cars 0,1,2,3
      var index = 0;
      image (trackImg,0,-4*displayHeight, displayWidth, displayHeight*5)
      //x and y position of car
      var x = 200;
      var y;
      for(var plr in allPlayers){
        index = index + 1;

        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;

        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if(index === player.index){
          fill("red");
          ellipse(x, y, 80, 100);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index - 1].y;
        }
      } 
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance > 3550){
      gameState = 2;
    }

    console.log(player.distance);
    drawSprites();

  }

  end(){
    console.log("Game Ended")
  }
}
