/*Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”*/

const prompt = require("prompt-sync")({ sigint: true });

//Declaración de variable para almacenar valor ingresado por teclado
let palabra = prompt ("Ingresa alguna palabra para convertirla en una URL: ");

//Función
let convertAUrl = palabra => "http://www."+palabra+".com";

//Llamada a la función dentro del console.log()
console.log(`URL: ${convertAUrl(palabra)}`);