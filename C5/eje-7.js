/*Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()*/

const prompt = require("prompt-sync")({ sigint: true });

//Declaración de variable para almacenar valor ingresado por teclado
let texto = prompt("Ingrese algún texto en minúscula para convertilo a mayúscula: ");

//Función
let convertMinAMayus = texto => texto.toUpperCase();


//Llamada a la función dentro del console.log()
console.log(convertMinAMayus(texto));

