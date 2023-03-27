/**
 * 
 */
function ejerc1(){
	let edad = prompt("Introduzca su edad [1-100]");
	if(edad>=1&&edad<18){
		alert("No se permite acceso a menores de edad")
	}else if(edad<1||edad>100){
		alert("Rango de edad no valido")
	}else if(edad>=18&&edad<100)
		alert("Tiene permiso para acceder")
		
}

function tiendaRopa(){
	let prenda = prompt("Introduzca una prenda");
	let precioActual;
	
	switch(prenda){
		case "Camisetas", "camisetas":
			precioActual = prompt("Introduzca el precio actual de la prenda");
			document.write("El precio rebajado de la prenda es: "+ (precioActual - precioActual*0.05));
			break;
		case "Pantalones", "pantalones":
			precioActual = prompt("Introduzca el precio actual de la prenda");
			document.write("El precio rebajado de la prenda es: "+ (precioActual - precioActual*0.1));
			break;
		case "Ropa interior", "ropa interior":
			precioActual = prompt("Introduzca el precio actual de la prenda");
			document.write("El precio de la prenda es: "+ precioActual + " (Esta categoria de ropa no tiene descuento)");
			break;
		case "Chaquetones", "chaquetones":
			precioActual = prompt("Introduzca el precio actual de la prenda");
			document.write("El precio rebajado de la prenda es: "+ (precioActual - precioActual*0.5));
			break;
		default:
			precioActual = prompt("Introduzca el precio actual de la prenda");
			document.write("El precio rebajado de la prenda es: "+ (precioActual - precioActual*0.02));
			break;
	}
}