/*=============================================
Ciclo For
=============================================*/

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

for(var i = 0; i <= cajas.length; i++){

	cajas[i].style.width 		= "50px";
	cajas[i].style.height 		= "50px";
	cajas[i].style.background	= "red";
	//Cuando la propiedad de CSS esta separada por guion se debe usar camel case
	cajas[i].style.marginTop 	= "5px";
	cajas[i].style.marginRight 	= "5px";
	cajas[i].style.display		= "inline-block";
}



for(var i = 0; i <= 5; i++){

    console.log("i", i);

}

/*=============================================
Ciclo While
=============================================*/

var n = 1;

while(n <= 5){
    console.log("n", n);
	n++;
}

/*=============================================
Ciclo Do While
=============================================*/

var p = 1;

do{
	console.log("p", p);
	p++;
}

while(p <= 5);