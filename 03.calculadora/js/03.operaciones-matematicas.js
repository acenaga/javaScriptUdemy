/*=============================================
Objeto con las propiedades de la calculadora
=============================================*/


var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	cantidadSignos: 0,
	cantidadDecimal: false,
	resultado: false,


}



/*=============================================
Objeto con los metodos de la calculadora
=============================================*/


var m = {

	inicio: function() {

		for (var i = 0; i < p.teclas.length; i++) {

			p.teclas[i].addEventListener("click", m.oprimirTeclas);
		}
	},

	oprimirTeclas: function(tecla) {

		p.accion = tecla.target.getAttribute("class");
		p.digito = tecla.target.innerHTML;

		m.calculadora(p.accion, p.digito);

	},

	calculadora: function(accion, digito) {

		switch (accion) {

			case "numero":

				p.cantidadSignos = 0;

				if (p.operaciones.innerHTML == 0) {
					p.operaciones.innerHTML = digito;
				} else {

					if(p.resultado){

						p.resultado = false;

						p.operaciones.innerHTML = digito;

					}else{
						p.operaciones.innerHTML += digito;
					}
				}

				break;

			case "signo":

				p.cantidadSignos++;

				if (p.cantidadSignos == 1) {

					if (p.operaciones.innerHTML == 0) {
						p.operaciones.innerHTML = 0
					} else {
						p.operaciones.innerHTML += digito;
						p.cantidadDecimal = false;
						p.resultado = false;
					}

				}

				break;

			case "decimal":

			if(!p.cantidadDecimal){

				p.operaciones.innerHTML += digito;

				p.cantidadDecimal = true;
			}



				break;

			case "igual":

				p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
				p.resultado = true;

				break;

		}

	},

	borrarCalculadora: function(){

		p.operaciones.innerHTML = 0;

	}


}

m.inicio();