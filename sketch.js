var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car1Img;
var car2, car2Img;
var car3, car3Img;
var car4, car4Img;
var cars = [];
var trackImg;


function preload(){
  car1Img = loadImage('images/car1.png');
  car2Img = loadImage('images/car2.png');
  car3Img = loadImage('images/car3.png');
  car4Img = loadImage('images/car4.png');
  trackImg = loadImage('images/track.jpg');

}

function setup(){
  canvas = createCanvas(displayWidth -20,displayHeight -30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
