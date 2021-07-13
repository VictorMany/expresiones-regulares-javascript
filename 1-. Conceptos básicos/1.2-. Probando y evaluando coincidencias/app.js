//Que se incluya al menos uno de los acarácteres
var expresion1 = /[0123456789]/;
console.log(expresion1.test('1994'));
//Rangos DEL 0 al 9 de la a a la z y de la A a la Z
var expresion1 = /[0-9a-zA-Z]/;
console.log(expresion1.test('HOLA'));
