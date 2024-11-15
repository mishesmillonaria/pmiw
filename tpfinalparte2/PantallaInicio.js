class PantallaInicio{
  constructor(){
    this.clickDelMouse = loadSound("data/click-234708.mp3");
    this.botonIniciar = new Botones(width/2 - 84, height/2 + 84, 200, 42, "INICIAR");
    this.botonCreditos = new Botones(width/2 - 84, height/2 + 140, 200, 42, "CRÉDITOS");
  }

  dibujar(){
    image(fondoInicio, 0, 0, width, height);
    filter(BLUR, 2);
    textAlign(CENTER, CENTER);
    fill(250);
    textSize(22);
    push();
    textSize(34);
    text("\nBienvenido a\nmi minijuego. <3", width /2, height/4);
    pop();

    this.botonIniciar.dibujar();
    this.botonCreditos.dibujar();
  }

  mousePressed(){
    if (this.botonIniciar.pulsado(mouseX, mouseY)){

      pantallaActual = "juego";  // Cambia el estado de pantalla
      if (!this.clickDelMouse.isPlaying()){
        this.clickDelMouse.play();
      }
    } else if (this.botonCreditos.pulsado(mouseX, mouseY)){
      pantallaActual = "creditos";  // Cambia la pantalla a créditos
    } else {
      this.clickDelMouse.stop();
    }
  }
}
