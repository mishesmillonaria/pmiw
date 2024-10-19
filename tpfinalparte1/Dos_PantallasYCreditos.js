function mostrarPantalla(numPantalla_) {
  push();
  //Fondo.
  image(imgs[numPantalla_], 0, 0, width, height);
  //Texto de arriba.
  fill(0, 100);
  noStroke();
  rect(0, height * 0.6, width, height * 0.3);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(textos[numPantalla_], 0, height * 0.6, width, height * 0.3);
  pop();

  if (pantallaActual === 1) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  if (pantallaActual === 2) {
    dibujaBoton(opcionA[2], 120, 440, 200, 40);
    dibujaBoton(opcionB[2], 480, 440, 200, 40);
  }

  if (pantallaActual === 3) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 4) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
  if (pantallaActual === 5) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 6) {
    dibujaBoton(opcionA[6], 120, 440, 200, 40);
    dibujaBoton(opcionB[6], 480, 440, 200, 40);
  }

  if (pantallaActual === 7) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 8) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 9) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 10) {
    dibujaBoton(opcionA[10], 120, 440, 200, 40);
    dibujaBoton(opcionB[10], 480, 440, 200, 40);
  }

  if (pantallaActual === 11) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 12) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 13) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 15) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }

  if (pantallaActual === 16) {
    dibujaBoton("Siguiente.", 532, 420, 68, 20);
  }
}

function mostrarCreditos() {
  push();
  image(imgs[19], 0, 0);
  filter(BLUR, 4);
  stroke(2);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Autor: DreamWorks", width/2, height/4);
  //Saqué créditos como título y lo reemplacé
  //porque antes de entregar vi que también
  //había que incluir al autor de la obra
  //y lo había olvidado. Disculpe.
  textSize(20);
  text("Michelle González, 119048/0.", width/2, height/2);
  text("Agostina Madera, 119073/1.", width/2, 260);

  //Botón para volver a la pantalla anterior.
  dibujaBoton("Volver", width/2, height * 0.8, 100, 40);
  pop();
}

function mousePressed() {
  if (colisionBoton(532, 420, 68, 20)) {
    if (!sonidoClick.isPlaying()) {
      sonidoClick.play();
    }
  } else {
    sonidoClick.stop();
  }

  if (colisionBoton(50, 20, 80, 30)) {

    if (!sonidoClick.isPlaying()) {
      sonidoClick.play();
      pantallaActual = 0; //Vuelve a la pantalla de inicio.
    }
  }

  if (pantallaActual === 0) {

    if (colisionBoton(532, 448, 68, 20)) {
      pantallaAnterior = pantallaActual;
      pantallaActual = 19;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    } else if (colisionBoton(100, 448, 100, 40)) {
      pantallaActual = 1;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    }
  } else if (pantallaActual === 1) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 2) {

    if (colisionBoton(120, 440, 200, 40)) {
      pantallaActual++;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    } else if (colisionBoton(480, 440, 200, 40)) {
      pantallaActual = 15;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    }
  } else if (pantallaActual === 3) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 19) {

    if (colisionBoton(width / 2, height * 0.8, 100, 40)) {
      pantallaActual = pantallaAnterior;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    }
  } else if (pantallaActual === 4) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 5) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 6) {

    if (colisionBoton(120, 440, 200, 40)) {
      pantallaActual = 16;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    } else if (colisionBoton(480, 440, 200, 40)) {
      pantallaActual++;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    }
  } else if (pantallaActual === 7) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 8) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 9) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 10) {

    if (colisionBoton(120, 440, 200, 40)) {
      pantallaActual++;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    } else if (colisionBoton(480, 440, 200, 40)) {
      pantallaActual = 18;
      if (!sonidoClick.isPlaying()) {
        sonidoClick.play();
      }
    }
  } else if (pantallaActual === 11) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 12) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 13) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 15) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual = 4;
    }
  } else if (pantallaActual === 16) {
    if (colisionBoton(532, 420, 68, 20)) {
      pantallaActual = 17;
    }
  }
}
