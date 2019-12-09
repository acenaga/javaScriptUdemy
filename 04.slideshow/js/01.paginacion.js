/*=============================================
OBJETO CON LAS PROPIEDDES DEL SLIDE
=============================================*/

var p ={

	paginacion: document.querySelectorAll("#paginacion li"),
	item:0,
	cajaSlide: document.querySelector("#slide ul")

}



/*=============================================
OBJETO CON LOS METODOS DEL SLIDE
=============================================*/


var m = {

	inicioSlide: function(){

		for (var i = 0; i < p.paginacion.length ; i++) {

			p.paginacion[i].addEventListener("click" , m.paginacionSlide)

		}

	},

	paginacionSlide: function(item){

		p.item = item.target.parentNode.getAttribute("item")-1;

		m.movimientoSlide(p.item)

	},

	movimientoSlide: function(item){


		p.cajaSlide.style.left = item * -100+"%";
		console.log("p.cajaSlide.style.left", p.cajaSlide.style.left);



	}


}

m.inicioSlide();