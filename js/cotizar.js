function cotizar(){
	let mayor = 0;
	let respuesta = 0;
	let ancho = parseFloat(document.getElementById('ancho').value);
	let largo = parseFloat(document.getElementById('largo').value);
	

	if (ancho < 1 && largo < 1 ) {
		document.getElementById('resultado').innerHTML = "Al menos una medida debe ser mayor a un m2";
	}
	else{
		if (ancho >= 1 && largo >= 1) {
			respuesta = (ancho*largo)*750;
		}else{
			if (ancho > largo) {
				respuesta = ancho*750;
			}else{
				respuesta = largo*750;
			}
		}
		document.getElementById('resultado').innerHTML = "$"+respuesta+" Pesos";
	}

}

function cotizar2(){
	let mayor2 = 0;
	let respuesta2 = 0;
	let ancho2 = parseFloat(document.getElementById('ancho2').value);
	let largo2 = parseFloat(document.getElementById('largo2').value);
	

	if (ancho2 < 1 && largo2 < 1 ) {
		document.getElementById('resultado2').innerHTML = "Al menos una medida debe ser mayor a un m2";
	}
	else{
		if (ancho2 >= 1 && largo2 >= 1) {
			respuesta2 = (ancho2*largo2)*950;
		}else{
			if (ancho2 > largo2) {
				respuesta2 = ancho2*950;
			}else{
				respuesta2 = largo2*950;
			}
		}
		document.getElementById('resultado2').innerHTML = "$"+respuesta2+" Pesos";
	}

}


function cotizar3(){
	let mayor3 = 0;
	let respuesta3 = 0;
	let ancho3 = parseFloat(document.getElementById('ancho3').value);
	let largo3 = parseFloat(document.getElementById('largo3').value);
	

	if (ancho3 < 1 && largo3 < 1 ) {
		document.getElementById('resultado3').innerHTML = "Al menos una medida debe ser mayor a un m2";
	}
	else{
		if (ancho3 >= 1 && largo3 >= 1) {
			respuesta3 = (ancho3*largo3)*1200;
		}else{
			if (ancho3 > largo3) {
				respuesta3 = ancho3*1200;
			}else{
				respuesta3 = largo3*1200;
			}
		}
		document.getElementById('resultado3').innerHTML = "$"+respuesta3+" Pesos";
	}

}