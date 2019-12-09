var tiempo 		= document.querySelector("#tiempo");
var segundos	= 0;

/*=============================================
SET INTERVAL (Intervalo de Tiempo)
setInterval(funcion, timepo )
=============================================*/

var intervalo = setInterval(function(){

	segundos++;

	tiempo.innerHTML = segundos;
	//tiempo.innerHTML += segundos;

},1000)

/*=============================================
SET timeout (Retardo de Tiempo)
setTimeout(funcion, timepo )
=============================================*/


setTimeout(function(){

	//alert("Se cumplio el timepo")


	//clearInterval detiene setInterval
	clearInterval(intervalo);

}, 5000)
