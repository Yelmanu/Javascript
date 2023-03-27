/**
 * 
 */
class vehiculos{
	constructor(valorMarca, valorModelo, valorCilindrada){
		this._marca = valorMarca;
		this._modelo = valorModelo;
		this._cilindrada = valorCilindrada;
	}
	
	get marca(){
		return this._marca;
	}
	set marca(valor){
		this._marca = valor;
	}
	
	get modelo(){
		return this._modelo;
	}
	set modelo(valor){
		this._modelo = valor;
	}
	
	get cilindrada(){
		return this._cilindrada;
	}
	set cilindrada(valor){
		this._cilindrada = valor;
	}
}
class Coche extends vehiculos{
	constructor(valorNumeroPuertas, valorNumeroOcupantes, marca, modelo, cilindrada){
		super(marca, modelo, cilindrada);
		this._numeroPuertas = valorNumeroPuertas;
		this.numeroOcupantes = valorNumeroOcupantes;
	}
	get numeroPuertas(){
		return this._numeroPuertas;
	}
	set numeroPuertas(valor){
		this._numeroPuertas = valor;
	}
}
class Moto extends vehiculos{
	constructor(valorAnioDisenio, valorCarnet, marca, modelo, cilindrada){
		super(marca, modelo, cilindrada);
		this._anioDisenio = valorAnioDisenio;
		this.carnet = valorCarnet;
	}
	get anioDisenio(){
		return this._anioDisenio;
	}
	set anioDisenio(valor){
		this._anioDisenio = valor;
	}
}

var c = new Coche("5", "5", "Audi", "A6", "150");
var m = new Moto("2010", "A", "Kawasaki", "Ninja", "1100");
document.write(c.marca + " " +c.modelo + " " + c.numeroPuertas+ " " + c.numeroOcupantes+ " " + c.cilindrada);
document.write("<br>" + m.marca+ " " + m.modelo+ " " + m.anioDisenio+ " " + m.cilindrada+ " " + m.carnet);

