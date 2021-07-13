/**
 * Método replace en cadenas de texto
 */

//la g indica que es global, así que serán todas las ocurrencias
var mensaje = 'el cliente pidió sushi y comió sushi';
console.log(mensaje.replace(/sushi/g, 'tacos'));


/**
 * Método de busqueda en las cadenas de texto
 */
// W cualquier caracter que no sea alfanumérico
// S cualquier caracter que no sea un espacio
console.log(mensaje.search(/\S/));
console.log(mensaje.search(/\W/));

/**
 *La propiedad LastIndex dentro de las expreiones regulares
 */
var expresion1 = /y/g;

var coincidencia = expresion1.exec('sibr yfx sibr yfx');

console.log(coincidencia);

/**
 * Ciclos y evaluaciones en las expresiones regulares
 */

var mensaje = "llegaban por motores, primero 10, 20, 35 y se iban duplicando hasta llegar a 1000";
//buscamos un numero cualquiera y se puede repetir
//la b, nos limita a solo numeros
var patron = /\b(\d+)\b/g;

var match;

while (match = patron.exec(mensaje)) {
    console.log("Se encontró ", match[1], "en la posición", match.index)
}