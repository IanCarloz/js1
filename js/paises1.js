
var edad = prompt("¿Que edad Tienes?");
var pais = prompt("¿De que pais eres?");

var edad_taget;

if (pais == "MX"){
  edad_taget = 18;
} else if (pais == "US") {
  edad_taget = 21;
} else if (pais == "UK") {
  edad_taget = 16
}

if (edad >= edad_taget) {
  alert("Puedes entrar al antro");
} else if (edad < edad_taget) {
  alert("No puedes pasar, eres menor de edad.");
} else {
  alert("¿De verdad sigues vivo?")
}
