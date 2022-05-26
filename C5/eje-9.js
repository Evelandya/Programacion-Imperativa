/*Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.*/


const prompt = require("prompt-sync")({ sigint: true });

//Declaración de variables para almacenar valor ingresado por teclado
let radio = prompt ("Ingresa el radio del circulo: ");

//Función
let calculoCircun = r => r*2*Math.PI;

//Llamada a la función y asignacion a la variable "circunferencia"
circunferencia = calculoCircun (radio);

//Print
console.log(`La circunferencia del circulo es: ${circunferencia.toFixed(2)}`);

/*la función toFixed() es brindada por javascript para acotar y redondear decimales luego de la coma.
Para mas info dejo este enlace https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed */


