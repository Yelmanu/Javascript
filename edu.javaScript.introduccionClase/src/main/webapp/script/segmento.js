/**
 * 
 */

 class segmento{
	 constructor(a, b){
		 this.a = a;
		 this.b = b;
	 }
	 get codigoSegmento(){
	 return this.calculoSegmento;
 	}
 
 	calculoSegmento(){
		 return this.a-this.b;
	 }
 }
 
 let tamanyoSegmento = new segmento(10, 9);
 document.write(tamanyoSegmento);