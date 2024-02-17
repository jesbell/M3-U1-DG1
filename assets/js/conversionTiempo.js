// Paso 1 solicitar datos la usuario
var total_dias = parseInt(prompt("Ingresa la cantidad de días 📆:"));

// Paso 2 realizar operación
var anios = Math.floor(total_dias / 365);
var semanas = Math.floor(total_dias / 7);
var dias = total_dias % 7;

// Paso 3 mostrar resultado
alert(
  `Durante los ${total_dias} días que estuviste viajando pasaron ${anios} años, ${semanas} semanas y ${dias} días, pero te segui esperando Jose Jauquin 🌹`
);
