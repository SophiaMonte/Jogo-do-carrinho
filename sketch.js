var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1, car2, pista;
var car1Imagem, car2Imagem;
var carros = [];
var allPlayers;
var gameState;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Imagem = loadImage("./assets/car1.png");
  car2Imagem = loadImage("./assets/car2.png");
  pista =   loadImage("./assets/PISTA.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
