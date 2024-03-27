/*¡Desafíos de esta clase!
1. Agregar un número de intentos para que la persona intente acertar e imprimir la respuesta al final;
2. Cuando la persona se equivoque, incluir el número que fue digitado en el mensaje de error e informar en el mensaje si el número digitado es mayor o menor que el número secreto;
3. Descubrir el número máximo que una persona lleva para adivinar un número correcto;
4. Investigar y aprender la diferencia entre == y ===.
/*==: Operador de igualdad débil ("comparación débil" o "comparación no estricta").
===: Operador de igualdad estricta ("comparación estricta" o "comparación fuerte").*/

// Solicitar al usuario su nombre de usuario
var userName = prompt("Por favor, introduce tu nombre de usuario:");
// Convertir la primera letra en mayúscula
userName = userName.charAt(0).toUpperCase() + userName.slice(1);

var deseaJugar = prompt("¿Quieres jugar? (s/n)");

// Si el usuario decide no jugar, salir del juego
if (deseaJugar.toLowerCase() !== "s") {
  alert("¡Hasta luego, " + userName + "!");
} else {
  // Mostrar un saludo personalizado
  alert("Hola, " + userName + "! Bienvenido al juego.");

  var maxIntentos = 10; // Desafio 4
  var intentosRealizados = 0;
  var numeroSecreto = parseInt(Math.random() * 1000) + 1;
  var numeroIngresado; // Desafio 1
  var intentosRestantes;

  while (intentosRealizados < maxIntentos) {
    intentosRealizados++;
    intentosRestantes = maxIntentos - intentosRealizados;

    numeroIngresado = parseInt(
      prompt(
        userName +
          "! Digite un número entre 1 y 1000. Tienes " +
          intentosRestantes +
          " intentos!"
      )
    );
    /*===: "comparación estricta" o "comparación fuerte"*/
    if (numeroIngresado === numeroSecreto) {
      alert(
        "¡Enhorabuena! " +
          userName +
          " ¡Acertaste en " +
          intentosRealizados +
          " intentos!"
      );
      // Mostrar el mensaje sobre el número máximo de intentos
      alert(
        userName +
          "! El número máximo de intentos que te llevó adivinar el número fue: " +
          intentosRealizados
      );
      break;
      /*===: "comparación estricta" o "comparación fuerte"*/
    } else if (intentosRealizados === maxIntentos) {
      alert(userName + "! ¡Se acabaron los " + maxIntentos + " intentos!");
    } else if (numeroIngresado > numeroSecreto) {
      // Desafio 3
      alert(
        userName + "! El número secreto es menor que " + numeroIngresado + "."
      );
    } else {
      alert(
        userName + "! El número secreto es mayor que " + numeroIngresado + "."
      );
    }
  }
}
