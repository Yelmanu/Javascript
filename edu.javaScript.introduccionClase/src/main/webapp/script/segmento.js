/**
 * 
 */

 class segmento{
	 constructor(inicio, fin){
		 this.inicio = inicio;
		 this.fin = fin;
	 }
	 
	 calculoSegmento(){
		 return this.inicio-this.fin;
	 }
 
 }
 
 var cacho = new segmento(5, 15);
 let tamanyoSegmento = cacho.calculoSegmento();
 console.log(tamanyoSegmento);