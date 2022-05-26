/*Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.*/

const prompt = require("prompt-sync")({ sigint: true });

//Declaración de variables para almacenar valor ingresado por teclado
let altura = prompt("Ingresa la altura (en metros) de la persona: ");
let peso = prompt("Ingresa el peso (en kilogramos) de la persona: ");

//Función
let calculadorIMC = (alt,pes) => pes / (alt**2);

////Llamada a la función y asignacion a la variable "IMC"
let IMC = calculadorIMC(altura,peso);

//Print
console.log(`El IMC (Indice de masa corporal) de la persona es de ${IMC.toFixed(2)}`);

/*la función toFixed() es brindada por javascript para acotar decimales luego de la coma.
Para mas info dejo este enlace https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed*/