/* Michelle Aylín González,
 legajo 119048/0.
 Comisión tres.
 Link al video:
 */

let objJuego;
let fondo;
let fondoInicio;
let pantallaInicio;
let pantallaCreditos;
//pantallaActual controla qué pantalla se muestra en el minijuego.
let pantallaActual = "inicio";

function preload(){
  fondo = loadImage("data/FondoPantano.jpg");
  fondoInicio = loadImage("data/Pantalla_15.jpg");
}


function setup(){
  createCanvas(640, 480);
  objJuego = new Juego(6);
  textFont("NotoSans-CondensedBoldItalic-48");

  pantallaInicio = new PantallaInicio();
  pantallaCreditos = new PantallaCreditos(320, 20, "Michelle González, legajo 119048/0.");
}


function draw(){
  if (pantallaActual === "inicio"){
    pantallaInicio.dibujar();
  } else if (pantallaActual === "creditos"){
    pantallaCreditos.dibujar();
  } else if (pantallaActual === "juego"){
    //Acá empieza el juego.
    image(fondo, 0, 0, width, height);
    objJuego.dibujar();
  }
}

function keyPressed(){
  if (key === 'r' || key === 'R'){
    reiniciarJuego();
  } else {
    objJuego.teclaPresionada(keyCode);
  }
}

function reiniciarJuego(){
  pantallaActual = "inicio";
  objJuego = new Juego(6);
}

function mousePressed(){
  if (pantallaActual === "inicio"){
    pantallaInicio.mousePressed();
  } else if (pantallaActual === "creditos"){
    pantallaCreditos.mousePressed();
  }
}
