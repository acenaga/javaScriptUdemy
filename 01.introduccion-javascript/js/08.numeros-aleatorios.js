var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/*=============================================
Numeros Aleatorios

El objeto Math permite realizar tareas matematicas en los numeros
Math.random = Devuelve un numero aleatorio entre 0 (inclusive) y 1 (exclusivo)
Math.floor = redondea al numero menor del decimal
Math.ceil = redondea al numero mayor del decimal
MAth.round = devuelve el valor de x redondeado a su numero entero mas proximo
=============================================*/

//numero = Math.random()*10;
//numero = Math.random()*100;
//numero = Math.floor(Math.random()*10); //va del 0 al 9
//numero = Math.ceil(Math.random()*10); //va del 1 al 10
numero = Math.round(Math.random()*10);  //va del 0 al 10
console.log("numero", numero);

numeroAleatorio.innerHTML = numero;



