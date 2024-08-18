function elipsesRancias(){
 for (var i=0; i<6; i+=2) {
  for (var j=0; j<6; j+=5) {
     dibujarEllipses(512 + i/2 * 88, 112 + j/2 * 88);
     
     //dibujarEllipses(posX+ i/2 * 88 (posición de cada elipse sobre otra), posY+ j/2 * 88);
   }
 }
 
 let indicación = usoReturn();
 textSize(28);
 fill(random(255), random(0), random(255));
 text(indicación, 18, 160);
 noFill();
 
}

function keyPressed() {
    if (key=== 'r' || key === 'R'){
     stroke(255, 0, 0);
   }
   if (key=== 'a' || key === 'A'){
     stroke(0, 0, 255);
   }
   if (key=== 'x' || key === 'X'){
     stroke(0);
     noTint();
    }
}

function mouseMoved(){
  if (mouseX > 400){
  if (key=== 'a' || key === 'A'){
   tint(0, 0, 255, 200);
  }
  if (mouseX > 400){
  if (key=== 'r' || key === 'R'){
   tint(255, 0, 0, 200);
  }
  }
  }
}

function usoReturn(){
 return "Holis. <3 \nPresione ¨R¨ para pintar \nlas líneas de rojo y ¨A¨ para\npintarlas de azul.\nLuego mueva el mouse sobre\nel dibujo para pintar la imagen.\nReinicie presionando ¨X¨.";
}
