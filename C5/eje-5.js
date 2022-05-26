/*Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/

const prompt = require("prompt-sync")({ sigint: true });

//Declaración de variable para almacenar valor ingresado por teclado
let saldoMensual = prompt("Ingresa tu saldo mensual: $");

//Función
let valorHoraTrabajo = saldoMensual => saldoMensual/40;

//Llamada a la función dentro del console.log()
console.log(`Tu hora de trabajo tiene un valor de $${valorHoraTrabajo(saldoMensual)}`);