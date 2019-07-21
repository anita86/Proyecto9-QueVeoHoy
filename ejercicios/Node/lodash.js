var lodash = require('lodash');

var array = ["quiero","comer","hamburguesa"];
lodash.reverse(array);
console.log(array);

var mayus = lodash.toUpper('acamica');
	console.log(mayus);

var arrayNumeros = [10,22,56];

var primero = lodash.head(arrayNumeros);
	console.log(primero);

var ultimo = lodash.last(arrayNumeros);
	console.log(ultimo);


var string = ['Quiero comer una pizza'];
var stringModif = lodash.replace(string, 'pizza', 'manzana');
console.log(stringModif);


