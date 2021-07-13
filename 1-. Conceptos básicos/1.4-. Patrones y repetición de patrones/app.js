var expresion1 = /[\d]/;
console.log(expresion1.test('29-junio-2007'));

//Negaciones de patrones
var expresion2 = /[^01]/;
console.log(expresion2.test('010001001011101110001010101'));

//Que se repiten 
/**
 * Al menos una vez se repite
 */
var expresion3 = /\d+/;
console.log(expresion3.test('1987'))

/**
 * Acepta desde 0 repeticiones
 */
var expresion3 = /\d*/;
console.log(expresion3.test('1987'))


/**
 * PATRONES OPCIONALES
 * hace que la n sea opcional
 */

var expresion4 = /hola mun?do/;
console.log(expresion4.test('hola mudo'))


/**
 * Conteo de patrones de expresiones regulares
*/
var expresion5 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/

console.log(expresion5.test('27-06-2007 11:45'))