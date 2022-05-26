/*Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.*/


//Variables de prueba
let primerVariable = 2342.23;
let segundaVariable = 'Evelyn Tramontin';
let TercerVariable = () => 'Siempre es hoy';

//print de las variables de prueba
console.log(`1° variable: ${primerVariable}`);
console.log(`2° variable: ${segundaVariable}`);
console.log(`3° variable: ${TercerVariable()}`);

//Función
let TipoDeDato = datox => typeof(datox);

//Llamadas a la función dentro del console.log()
console.log(`El tipo de dato de la 1° variable es: ${TipoDeDato(primerVariable)}`);
console.log(`El tipo de dato de la 2° variable es: ${TipoDeDato(segundaVariable)}`);
console.log(`El tipo de dato de la 3° variable es: ${TipoDeDato(TercerVariable)}`);
