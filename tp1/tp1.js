/*Michelle Aylín González,
Legajo 119048/0,
Comisión tres.

Link del video: */

let OpArt;

function preload(){
  OpArt = loadImage("data/F_35.jpg");
}

function setup() {
  createCanvas(800, 400);
  strokeWeight(2);
  textFont("NotoSans-CondensedBoldItalic-48");
  noFill();
}

function draw() {
  background(224);
  image(OpArt, 0, 0, width/2, height);
  elipsesRancias();
  usoReturn();

}

function dibujarEllipses(posX_, posY_){
  for (var e=8; e>0; e--) {
  strokeWeight(2);
  ellipse(posX_, posY_, 28, 28);
  ellipse(posX_, posY_, e*28, e*28);
}
}
