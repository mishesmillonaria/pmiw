let sonidoClick;
let textos = [];
let imgs = [];
let opcionA = [];
let opcionB = [];
let pantallaActual = 0; //Variable global.
let pantallaAnterior = 1; //Variable de la pantalla anterior a la de créditos.

//Comisión tres.
//Michelle Aylín González, 119048/0. Link al video: https://www.youtube.com/watch?v=emASsjBcyNM
//Agostina Madera, 119073/1. Link al video:

function preload() {
  for (let i = 0; i < 20; i++) {
    imgs[i] = loadImage("data/Pantalla_" + nf(i, 2) + ".jpg");
    sonidoClick = loadSound("data/mouse-click-153941.mp3");
  }
}

function setup() {
  createCanvas(640, 480);

  //Carga los textos.
  textos[1] = "Shrek es un ogro solitario, que vivía tranquilo en su pantano y odiaba a la gente.";
  textos[2] = "Burro escapa de ser arrestado por los guardias y le pide ayuda a Shrek para salvarse. Shrek podría...";
  textos[3] = "Burro se queda y Shrek gana un mejor amigo que lo persigue por el resto de secuelas. ";
  textos[4] = "Aparecen las criaturas de cuentos de hadas a okupar el pantano, y le dicen a Shrek que Lord Farquaad los echó del reino.";
  textos[5] = "Shrek y Burro van al reino a buscar a Lord Farquaad en medio de un torneo en el que Shrek termina peleando para salvar su vida. ";
  textos[6] = "Al ganar Shrek, Lord Farquaad le ofrece sacar a las criaturas si a cambio salva a la princesa Fiona. Sherk decide...";
  textos[7] = "Shrek y Burro van al castillo a salvar a la princesa de la dragona asesina y llevarla a Muy Muy Lejano. ";
  textos[8] = "Sherk y Fiona se enamoran durante el viaje. Shrek escucha una conversación entre Fiona y Burro, en la que ella confiesa su secreto, pero Shrek malinterpreta una frase de Fiona y se enoja.";
  textos[9] = "Al día siguiente, Fiona intenta contarle su secreto a Shrek, pero él es frío con ella y trae a Lord Farquaad para casarse con ella, y Fiona acepta para romper la maldición.";
  textos[10] = "Burro le explica el malentendido a Shrek y le dice que debe detener la boda. Shrek podría...";
  textos[11] = "Irrumpe la boda y le dice a Fiona que Farquaad se casa con ella para ser rey.";
  textos[12] = "El sol se pone y Fiona se transorma en una ogresa, por lo que Lord Farquaad ordena ejecutar a Fiona y a Shrek. ";
  textos[13] = "Convenientemente, la dragona aparece junto a Burro y devora vivo a Farquad. Sherk se declara a  Fiona y se casan en el pantano. ";
  textos[14] = "Y vivieron feos para siempre, FIN.";
  textos[15] = "Deja a Burro ser arrestado por los guardias y Shrek sigue con su vida solitaria.";
  textos[16] = "Shrek decide mejor echar a todos a patadas del pantano.";
  textos[17] = "Y Shrek vive en paz mientras el reino se prende fuego bajo el mando de Lord Farquaad, FIN";
  textos[18] = "Shrek deja que Fiona se case con Farquaad y este se convierte en rey de Muy Muy Lejano, arruinando sus propias vidas y las de otros, FIN.";

  opcionA[2] = "\nDarle asilo al\npobre burro desgraciado.";
  opcionB[2] = "\nNo ayudarlo y\nque Burro se las arregle solo.";
  opcionA[6] = "Rechazar";
  opcionB[6] = "Aceptar";
  opcionA[10] = "Ponerse las pilas.";
  opcionB[10] = "Ser cobarde y no ir.";
}

function draw() {
  background(224);

  if (pantallaActual === 0) {
    image(imgs[0], 0, 0);
    //Pantalla de inicio.
    dibujaBoton("Créditos", 532, 448, 68, 20);
    dibujaBoton("Iniciar", 100, 448, 68, 20);

    textAlign(CENTER, CENTER);
  } else if (pantallaActual > 0 && pantallaActual <= 18) {
    mostrarPantalla(pantallaActual);
    //Dibuja el botón de reinicio en la esquina superior izquierda.
    dibujaBoton("Reiniciar", 50, 20, 80, 30);
  } else if (pantallaActual === 19) {
    mostrarCreditos();
    //Legajos.
  }
}
