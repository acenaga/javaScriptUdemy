

var resultadoPrompt1 	= document.querySelector("#resultadoPrompt1");
var resultadoPrompt2 	= document.querySelector("#resultadoPrompt2");
var resultadoPrompt3 	= document.querySelector("#resultadoPrompt3");
var resultadoPrompt4 	= document.querySelector("#resultadoPrompt4");
var resultadoPrompt5 	= document.querySelector("#resultadoPrompt5");
var resultadoPrompt6 	= document.querySelector("#resultadoPrompt6");
var resultadoPrompt7 	= document.querySelector("#resultadoPrompt7");

var usoPrompt			= document.querySelector("#usoPrompt");

usoPrompt.addEventListener("click", calculoPrompt);

function calculoPrompt(){

	var x = prompt("coloque el valor de x", "aqui");
	var y = prompt("coloque el valor de y", "aqui");
	var z = 0;

	resultadoPrompt1.innerHTML = "El valor de X es: "+x;
	resultadoPrompt2.innerHTML = "El valor de Y es: "+y;
	z = parseInt(x) + parseInt(y);
	resultadoPrompt3.innerHTML = "La Suma de  X + Y e "+z;
	z = x - y;
	resultadoPrompt4.innerHTML = "La resta de  X - Y es "+z;
	z = x * y;
	resultadoPrompt5.innerHTML = "La multiplicacion de  X * Y es "+z;
	z = x / y;
	resultadoPrompt6.innerHTML = "La multiplicacion de  X * Y es "+z;
	z = (parseInt(x) + parseInt(y))*10;
	resultadoPrompt7.innerHTML = "La suma de  X + Y multiplicado por 10 es "+z;


}