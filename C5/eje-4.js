/*Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

const prompt = require("prompt-sync")({ sigint: true });


//Declaración de variable para almacenar valor ingresado por teclado
let anios = prompt ("Ingresa los años para calcular la edad del perro: ");

//Función
let edadPerros = anios => anios*7;

//Llamada a la función dentro del console.log()
console.log(`La edad del perro es: ${edadPerros(anios)}`);