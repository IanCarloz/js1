var modo = prompt("escribe el modo");

if(modo == "menos"){

     var inicio = prompt("escribe numero inicial");
     var lim = prompt("escrbe el numero final");
     while(inicio > lim){
       contador = contador -1;
       document.write(contador)
     }
   } else if(modo == "mas"){

     var contador = 0;
     var lim = prompt("escrbe el numero final")
     while(contador < lim){
       contador = contador +1;
       document.write(contador)
     }
   } else{
     document.write("las opciones son: menos/mas");
   }
