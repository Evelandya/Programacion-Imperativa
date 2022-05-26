/*Crear una función que recibe un string y devuelve la misma frase pero con
admiración.*/

const prompt = require("prompt-sync")({ sigint: true });

//Declaración de variable para almacenar valor ingresado por teclado
let frase = prompt ("Ingresa alguna frase para aplicarle admiración: ");

//Función
let conAdmiracion = frase => "¡¡¡¡¡¡¡¡¡"+frase+"!!!!!!!!!";

//Llamada a la función dentro del console.log()
console.log(conAdmiracion(frase));