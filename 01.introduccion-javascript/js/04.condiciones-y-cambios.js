/*=============================================
CONDICIONES
=============================================*/


var a  = 5;
var b  = 10;

// el else if, siempre debe terminar con un else, sino no funciona

if (a > b){

	console.log("a es mayor que b");

}else if(a == b){

	console.log("a es igual a b");

}else{

	console.log("a es menor q b");

}

/*=============================================
CAMBIOS O SWITCH
=============================================*/

var dia = "martes"

switch(dia){

	case "sabado":
	console.log("voy a estudiar php");
	break;

	case "martes":
	console.log("voy a estudiar css");
	break;

	case "jueves":
	console.log("voy a estudiar html");
	break;

	case "domingo":
	console.log("voy a descansar");
	break;

	default: console.log("voy a estudiar javaScript");


}