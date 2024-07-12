/*  ------------------- RETO 2 ------------------- */


//* ---------------------------------------------- IMPORTAR LIBRERÍAS ---------------------------------------------- *\\
//* ================================================================================================================ *\\
//TODO • En el fichero run.js (fichero del programa principal) escribir la sentencia: 
// - let myLib = require("./index");

let myLib = require("./index");

//* ---------------------------------------------- MAIN ---------------------------------------------- *\\
//* ================================================================================================== *\\
//TODO • Llamar a todas las funciones de la librería e imprimir sus resultados.
//    - NOTA: Para llamar a la función hay que hacer myLib.función. Ej: myLib.suma(2,3)

// Parámetro operacion:
// suma                 ---> 'sum'
// resta                ---> 'subs'
// multiplicacion       ---> 'mult'
// division             ---> 'div'
// Parametros op1 y op2    ---> numeros


let numeros = [1,20,10,48,36,87,91,73,102,35];

let op1 = numeros[Math.floor(Math.random()*10)];
let op2 = numeros[Math.floor(Math.random()*10)];
console.log('op1 = ' + op1);
console.log('op2 = ' + op2);

console.log('Suma = ' + myLib.suma('sum', op1, op2));
console.log('Resta = ' + myLib.resta('subs', op1, op2));
console.log('Multiplicación = ' + myLib.multiplicacion('mult', op1, op2));
console.log('División = ' + myLib.division('div', op1, op2));
console.log('Cuadrado = ' + myLib.cuadrado('sqr', op1));