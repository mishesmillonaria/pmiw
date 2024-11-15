class Burro{
  constructor(posX, posY){
    this.burroIMG = loadImage("data/burrominijuego.png");
    this.gameOver = loadSound("data/gameover-86548.mp3");
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
  }

  dibujar(){
    if (this.vida){
      image(this.burroIMG, this.posX, this.posY, 200, 150);
    } else {
      //Se muestra el texto solo cuando el burro está muerto.
      textSize(40);
      textAlign(CENTER, CENTER);
      fill(188, 234, 0);
      text("TE MATARON.", width/2, 120);
      text("\nPresione r o R para\nreiniciar el minijuego.", width/2, 200);
    }
  }

  teclaPresionada(keyCode){
    if (keyCode == LEFT_ARROW){
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    }
  }

  moverDerecha(){
    this.posX += 10;
  }

  moverIzquierda(){
    this.posX -= 10;
  }

  estaVivo(){
    return this.vida;
  }

  matar(){
    this.vida = false;
    this.indicacion = false;
  }


  tocoEspada(espada){
    if (espada && dist(this.posX + 48, this.posY + 48, espada.posX, espada.posY) < 56) {
      this.matar();

      if (!this.gameOver.isPlaying()){
        this.gameOver.play();
      }
    }
  }
}
