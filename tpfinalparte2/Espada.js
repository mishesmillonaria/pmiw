class Espada{
  constructor(posX, posY){
    this.espadaIMG = loadImage("data/espada.png");
    this.posX = posX;
    this.posY = posY;
  }

  dibujar(){
      image(this.espadaIMG, this.posX, this.posY, 28, 60);
    }

  mover(){
    this.posY += 4;
  }
}
