/**
 * 
 */
class Punto {
  
  constructor ( x , y ){
    this.x = x;
    this.y = y;
    _nombre = "punto";
  }

  set nombre(valorNombre){
       if(valorNombre == "hola"){
              valorNombre = "adios";
       }
       this._nombre = valorNombre;    
  }

  get nombre(){
        return this._nombre;
  }

  distancia ( a , b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt ( dx * dx + dy * dy );
  }
}
function paco(){
	let instancia = new Punto();
	let nombre = instancia.nombre("hola");
	document.write(nombre);
	document.write("kk");
}
