/*=============================================
	Variables en JS
=============================================*/

//variables numericas

var numero = 5;
console.log("numero", numero);

//variables de texto

var palabra = "palabras";
console.log("palabra", palabra);

//Variables Boleanas

var boleana = true;
console.log("boleana", boleana);

//Variables del tipo arreglo - array

var colores = ["rojo", "Amarillo", false, 3, numero, palabra, boleana];
console.log("colores", colores);

console.log("colores", colores[1]);

//Variables del tipo objeto - object: propiedad y el valor

var jugo = {ingrediente1 : "fresa",
			ingrediente2 : "naranaja",
			ingrediente3 : "banana"};
console.log("jugo", jugo);
console.log("jugo", jugo.ingrediente2);

//Variables DOM ('Moelo de Objetos del Documento')

var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "blue";

var cajas = document.querySelectorAll(".cajas")
console.log("cajas", cajas);