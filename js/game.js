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
      car1 = createSprite(100,200)
      car1.addImage("car", car1Img)
      car2 = createSprite(300,200)
      car2.addImage("car", car2Img)
      car3 = createSprite(500,200)
      car3.addImage("car", car3Img)
      car4 = createSprite(700,200)
      car4.addImage("car", car4Img)
      cars = [car1,car2,car3,car4]
    }
  
    play(){
      form.hide();
     // textSize(30)
      //text("Game Started", 100,150)
      Player.getPlayerInfo();

      
//var ypos = 170
var x = 200;
var y;
var index = 0

for(var plr in allPlayers){
  background(rgb(198,135,103));
  image (track, 0, -displayHeight*4, displayWidth, displayWidth*5)
  index = index +1;
  x = x +200
  y = displayHeight - allPlayers[plr].distance;
  
  cars[index-1].x = x;
  cars[index-1].y = y;

  if(index === player.index ){
    
    cars[index - 1].shapeColor = "red";
    camera.position.x = displayWidth/2;
    camera.position.y = cars[index-1].y
  }
  
  //ypos = ypos + 20
  //textSize(15)
  //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 170, ypos)

}

   
     
   if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance = player.distance + 50;
    player.update()
  }

  if(distance > 3860){
    gameState = 2;
  }
  drawSprites(); 
    }
  
    end(){
      console.log("Game Ended")
    }
  }

  
  