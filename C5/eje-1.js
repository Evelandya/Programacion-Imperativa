/*Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

const prompt = require("prompt-sync")({ sigint: true });

//Declaración de variable para almacenar valor ingresado por teclado
let pulgadas = prompt ("Ingresa las pulgadas que deseas convertir a centimetros: ");

//Función
let pulgadasACentimetros = pulgadas => pulgadas*2.54;

//Llamada a la función y asignacion a la variable "cm"
let cm = pulgadasACentimetros(pulgadas);

//Print
console.log(`Tus pulgadas equivalen a ${cm} centimetros`);