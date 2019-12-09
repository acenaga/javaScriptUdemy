/*=============================================
Objetos: es una coleccion de propiedades y metodos
=============================================*/

var object ={

	//Una propuedad es una asocacion entre y un nombre y un valor
	nombre:"Juan",
	edad:31,
	// El metodo es una funcion dentro de un objeto
	descripcion: function(){

		console.log("Su nombre es "+object.nombre+" y tiene "+object.edad+" años.")

	},

	saludar: function(saludo){

		console.log(saludo+" "+object.nombre);
	}

}


console.log("Edad ", object.edad);
console.log("Nombre ", object.nombre);
object.descripcion();
object.saludar("Hello")


// El objeto Date se utiliza para trabajar con fechas y horas.
// https://www.w3schools.com/jsref/jsref_prototype_date.asp

var d = new Date();
console.log("d", d);
var y = d.getFullYear();
console.log("y", y);


