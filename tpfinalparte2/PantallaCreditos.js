class PantallaCreditos{
  constructor(posX, posY, txt){
    this.botonVolver = new Botones(width / 2 - 84, height / 2 + 72, 200, 42, "VOLVER");
    this.posX = posX;
    this.posY = posY;
    this.txt = txt;
  }

  dibujar(){
    background(12);
    
    this.mover();

    fill(188, 234, 0);
    textSize(34);
    textAlign(CENTER, CENTER);
    text(this.txt, this.posX, this.posY);
    this.botonVolver.dibujar();
  }

  mover(){
    this.posY += 2;
    //Reubica el texto si se sale de la pantalla
    if (this.posY > height + 18){
      this.posY = -18;
    }
  }

  mousePressed(){
    if (this.botonVolver.pulsado(mouseX, mouseY)){
      pantallaActual = "inicio";
    }
  }
}
