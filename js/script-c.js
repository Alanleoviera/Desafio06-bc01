
console.log('----------Ejercicio C----------')    // mensaje por consola que indique la letra del ejercicio

var cantidadDeGatos = 8;
var cantidadDePasos = 5;

var gato = '🐈';
var gatoNegro = '🐈‍⬛';
var pasos = '🐾';

for (n = 1 ; cantidadDeGatos>=n ; n++) {
   var emoji = n%2 === 1 ? gato : gatoNegro;

    var resultado = ('Gato #' + n + ': ' + emoji + ' ' + pasos.repeat(cantidadDePasos))

    console.log (resultado)
}




