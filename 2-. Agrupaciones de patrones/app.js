/**
 * Patrones que no son case sensitive
 */

var expresion1 = /Hola Mundo/i;

console.log(expresion1.test('hola Mundo'));


/**
 * Patrones en subexpresiones
 */

var expresion2 = /Woo+(hoo+)+/i;

//Woohoo
console.log(expresion2.test('woooohoooo woohooooo wooo whhs hoooo'));

/**
 * Coincidencias y grupos mediante exec y match
 */

var expresion3 = /\d+/.exec('Del año 1984')

console.log(expresion3);

console.log('Hasta 1984'.match(/\d+/));
