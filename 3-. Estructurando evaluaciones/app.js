/**
 * Limites de texto
 */

var expresion1 = /\bcat\b/;

console.log(expresion1.test('cat'));



/**
 * Uso de los opcionales
 */

var expresion2 = /pollo|res|pescado/;

console.log(expresion2);

console.log(expresion2.test('El cliente pidió res'));


/**
 * Patrones al final y al inicio de una cadena de texto
 */
// ^ al inicio
// $ al final
// | Opcional

var expresionInicio = /^Any/;
var expresionFin = /Javascript$/;
var expresionInicioFin = /^Any|Javascript$/

console.log(expresionInicio);
console.log(expresionFin);

console.log(expresionInicio.test('Any app that can be imagined can be made in Javascript'));
console.log(expresionFin.test('Any app that can be imagined can be made in Javascript'));
console.log(expresionInicioFin.test('An app that can be imagined can be made in Javascript'));
