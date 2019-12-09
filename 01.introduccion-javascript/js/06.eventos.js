var recuadro = document.querySelector("#recuadro");

/*=============================================
Eventos desde el DOM
=============================================*/

function cambiarColor(){

	recuadro.style.background = "red";
}

/*=============================================
Eventos desde el javaScript
=============================================*/

var boton = document.querySelector("#boton");

//addEventListener escucha la accion q se hace en el DOM, entre parentesis se coloca primero 
//la accion a la q va a obecer y luego, despues de la "," la funcion a la q va a llamar
boton.addEventListener("click", moverCaja)

function moverCaja(){

	recuadro.style.width 		= "500px";
	recuadro.style.transition	= "1.5s width ease";
}