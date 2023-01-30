function ejercicio1(){
	function alumno(nombre, apellidos, edad){
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.edad = edad;
	}
	var alumnoUno = new alumno('Regino', 'Fdez', 31);

	document.write(typeof(alumnoUno));
	document.write(typeof(alumnoUno) === 'object');

	document.write(alumnoUno instanceof Object);
	document.write(alumnoUno instanceof alumno);
}

