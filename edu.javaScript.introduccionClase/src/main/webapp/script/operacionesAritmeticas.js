/**
 * 
 */
function operacion1(){
	//-La suma de 10.25 + 0.75, ¿qué tipo de dato devuelve?
	let numero1 = 10.25;
	let numero2 = 0.75;
	let resultadoOperacion = numero1 + numero2;
	document.write(typeof(resultadoOperacion))
}

function operacion2(){
	/**
	 * /-Haz que la siguiente operación de como resultado el número 57
	 *  sin cambiar el orden de nada (sustituye los ?):
	 * let numero1 = 23;
	 * let numero2 = ?;
	 * let resultadoOperacion = numero1 ? numero2;
	 * console.log(resultadoOperacion);
	 * */
	let numero1 = 23;
	let numero2 = 34;
	let resultadoOperacion = numero1 + numero2;
	document.write(resultadoOperacion);
}

function operacion3(){
	/**
	 * -Si queremos que la siguiente operación de como resultado el número 100, 
	 * ¿dónde colocarías los paréntesis sin cambiar el orden de la operación?
	 * let operacion = 46 + 8 * 2 / 2 + 46;
	 * console.log(operacion);
	 * */
	let operacion = 46 + (8 * 2 / 2) + 46;
	document.write(operacion);
}

function operacion4(){
	/**
	 * -¿Y si queremos que de como resultado 46.33?
	 * */
	let operacion = 46 + 8 * 2 / (2 + 46);
	document.write(operacion);
}