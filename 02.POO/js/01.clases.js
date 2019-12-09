/*=============================================
Las Clases:

Las clases, son funciones constructoras y siempre las vamos a iniciar con mayúscula.

ejemplo: new String()
=============================================*/

/*=============================================
Clases Primitivas
=============================================*/
//Clase String
var string = new String("Esto es un string");
console.log("string", string);


//Clase Number
var number = new Number(24);
console.log("number", number);

//CLase Boolean
var boolean = new Boolean(false);
console.log("boolean", boolean);


/*=============================================
Clases Compuestas
=============================================*/
//Clase array
var array = new Array("rojo", "amarillo", "verde")
console.log("array", array);

//Clase object
var object = new Object({nombre:"Pedro",
						 edad:30});
console.log("object", object);


/*=============================================
Funciones Creadas por el programador
=============================================*/
//Creamos el prototipo

function Persona(){

	//Propiedades publicas
	this.nombre;
	this.edad;
}

var yo = new Persona;
yo.nombre = "Juan";
yo.edad = "20 años";
console.log("yo", yo);

//Clase con parametros
function Animales(nombre, raza){

	this.nombre = nombre;
	this.raza = raza;
}

var mascota = new Animales("perro", "pitbull");
console.log("mascota", mascota);
