/**
 * 
 */

function cambiaColor(colorin){
	/**
	 * RECIBE: Un color
	 * DEVUELVE: Ese color usado como color de fondo de la página
	 */
 	document.bgColor = colorin 
 
}

function cambiaTitulo(texto){ 
	/**
	 * RECIBE: Un texto
	 * DEVUELVE: El texto usado como título de la página
	 */
    document.title = texto 
 
}

function cambiaColorTexto(text){
	/**
	 * RECIBE: Uno o varios textos 
	 * DEVUELVE: El texto/los textos, pero cambiado de color
	 */
	document.fgColor = text
}

function verUltimaModificacion(){
	/**
	 * RECIBE: Nada
	 * DEVUELVE: La fecha en la que fue modificado por última vez el documento
	 */
	alert(document.lastModified)
	
}