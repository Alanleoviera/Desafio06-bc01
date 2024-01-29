
console.log('----------Ejercicio A----------')    // mensaje por consola que indique la letra del ejercicio

var cantidadDeGatos = 15; // valor que se puede cambiar
var emoji = ''; 

for (var n = 1; cantidadDeGatos >= n ; n++) {

    // Utilizar el operador de módulo para alternar entre los 3 emojis
    if (n % 3 === 1) {
        emoji = '😺';
    } else if (n % 3 === 2) {
        emoji = '😸';
    } else {
        emoji = '😹';
    }

    console.log('Gato #' + n + ': ' + emoji);
}