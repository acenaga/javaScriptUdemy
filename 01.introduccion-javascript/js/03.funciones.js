/*=============================================
FUNCIONES SIN PARAMETROS
=============================================*/


//declaramos la funcion

function saludo(){

	//tarea de la funcion
	console.log("saludo","hola");

}

//ejecutamos la funcion

saludo();


/*=============================================
FUNCIONES SIN PARAMETROS
=============================================*/


function operacion(digito1, digito2){

	var resultado = digito1 + digito2;
	console.log("resultado", resultado);
}

operacion(10,12);
operacion(2,2);

/*=============================================
FUNCIONES CON RETORNO SIN PARAMETROS
=============================================*/

function retorno1(){

	var numero = 5;
	return numero;
}

console.log(retorno1());

/*=============================================
FUNCIONES CON RETORNO Y CON PARAMETROS
=============================================*/

function retorno2(numero){

	return numero;
}

console.log(retorno2(28))