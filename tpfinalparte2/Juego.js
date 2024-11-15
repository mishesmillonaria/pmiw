class Juego{
  constructor(cantidadEspadas){
    this.cantidadEspadas = cantidadEspadas;
    this.crearBurro();
    this.crearEspadas();
    this.instrucciones();
    this.juegoTerminado = false;
  }

  dibujar(){
  if (this.juegoTerminado){
    //Si el juego terminó, se muestra solo el mensaje de victoria.
    this.mostrarVictoria();
  } else {
    this.burro.dibujar();
    let todasEspadasCaidas = true;

    for (let i = 0; i < this.cantidadEspadas; i++){
      this.espadas[i].dibujar();
      this.espadas[i].mover();

      //Acá se verifica si alguna espada sigue en pantalla.
      if (this.espadas[i].posY < height){
        todasEspadasCaidas = false;
      }

      this.burro.tocoEspada(this.espadas[i]);
    }

    //Si todas las espadas caen y Burro sigue vivo, se gana.
    if (todasEspadasCaidas && this.burro.estaVivo()){
      this.juegoTerminado = true;
    }
    if (this.burro.estaVivo()){
      this.instrucciones();
    }
  }
}


  crearEspadas(){
    this.espadas = [];
    for (let i = 0; i < this.cantidadEspadas; i++){
      //Posición inicial aleatoria fuera de pantalla.
      this.espadas[i] = new Espada(i * 140, -random(200, 400));
    }
  }

  crearBurro(){
    this.burro = new Burro(240, 342);
  }

  instrucciones(){
    fill(188, 234, 0);
    textSize(20);
    textAlign(CENTER);
    text("Evite que las espadas de los guardias lo maten.", width / 2, 20);
    text("\nUse las flechas izquierda y\nderecha para moverse.", width / 2, 60);
    text("¡No te mueras!", width / 2, 120);
  }

  mostrarVictoria(){
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(188, 234, 0);
    text("GANASTE", width / 2, 120);
    text("\nPresione r o R para\nreiniciar el minijuego.", width / 2, 200);
  }

  teclaPresionada(keyCode) {
    if (!this.juegoTerminado) {
      this.burro.teclaPresionada(keyCode);
    }
  }
}
