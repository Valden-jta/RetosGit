/*  ------------------- RETO 2 ------------------- */

//* ---------------------------------------------- DECLARACIÓN DE FUNCIONES ---------------------------------------------- *\\
//* ====================================================================================================================== *\\

//TODO En el fichero index.js (fichero de librería):
// - Declarar las funciones de la calculadora por separado (suma, resta, producto, división)

const suma = (operacion,op1 = 1,op2 = 0) => operacion.toLowerCase() == 'sum' ? resultado = op1 + op2 : resultado = 'Introduce una operación válida' ;
const resta = (operacion,op1 =1,op2 = 0) => operacion.toLowerCase() == 'subs' ? resultado = op1 - op2 : resultado = 'Introduce una operación válida' ;
const multiplicacion = (operacion,op1 =1,op2 = 0) => operacion.toLowerCase() == 'mult' ? resultado = op1 * op2 : resultado = 'Introduce una operación válida' ;
const division = (operacion,op1 =1,op2 = 0) => operacion.toLowerCase() == 'div' ? resultado = op1 / op2 : resultado = 'Introduce una operación válida' ;
const cuadrado = (operacion,op1 =1) => operacion.toLowerCase() == 'sqr' ? resultado = Math.pow(op1,2) : resultado = 'Introduce una operacion válida' ;


//* ---------------------------------------------- EXPORTAR LA LIBRERIA ---------------------------------------------- *\\
//* ================================================================================================================== *\\
//TODO - Al final del documento index.js escribir la sentencia module.exports = 
//TODO A continuación escribir el nombre de las funciones entre {} separados por comas de la librería que se desean exportar.

module.exports = {suma, resta, multiplicacion, division, cuadrado};