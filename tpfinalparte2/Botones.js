class Botones{
  constructor(posX, posY, ancho, alto, txt){
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
    this.txt = txt;
  }

  dibujar(){
    //Dibuja el rectángulo del botón
    fill(188, 234, 0);
    rect(this.posX, this.posY, this.ancho, this.alto, 16); 
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(this.txt, this.posX + this.ancho / 2, this.posY + this.alto / 2);
  }

  pulsado(posX, posY){
    return posX > this.posX && posX < this.posX + this.ancho && posY > this.posY && posY < this.posY + this.alto;
  }
}
