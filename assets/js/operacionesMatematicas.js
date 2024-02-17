// Paso 1 ingresar números
var numero_1 = parseInt(prompt("Ingresa un numero mayor a cero:"));
var numero_2 = parseInt(
  prompt("Ingresa otro numero mayor a cero y diferente al anterior:")
);

// Paso 2 realizar operación matemática
var suma = numero_1 + numero_2;
var resta = numero_1 - numero_2;
var division = numero_1 / numero_2;
var multiplacion = numero_1 * numero_2;
var modulo = numero_1 % numero_2;

// Paso 3 mostrar resultado
alert(`Resultado suma: ${suma}`);
alert(`Resultado resta: ${resta}`);
alert(`Resultado division: ${division}`);
alert(`Resultado multiplicacion: ${multiplacion}`);
alert(`Resultado modulo: ${modulo}`);
