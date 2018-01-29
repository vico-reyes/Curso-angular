import { Component } from '@angular/core';

// El siguiente es un decorador, que sirve para dar funcionalidad extra a una clase
// indica propiedades básicas 
@Component({
	selector: 'fruta',
	templateUrl:'./fruta.Component.html'
	
})

export class FrutaComponent{
	// propiedades publicas, pero puede ser private o protected (visibilidad)
	public nombre_componente = 'Componete de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string ;
	public edad:number = 28;
	public mayorDeEdad:boolean = true;
	public trabajos:Array<any> = ['22', 'Albañil', 'Fontanero']

	// contructor es lo primero que se ejecuta dentro de una clase
	constructor(){
		this.nombre= "Yaravi";
		console.log(this.nombre);
		console.log(this.trabajos);

		this.holaMundo(this.nombre);

	}

	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad(45);
		console.log(this.nombre + " " +this.edad);

		// variables y alcance
		var uno = 8;
		var dos = 15;
		// si se define con let, tendrá ese valor dentro del ese bloque unicamente (su alcance)
		// si se define var es de manera global
		if (uno === 8){
			let uno = 3;
			var dos= 88;
			console.log("Dentro de IF:" +uno);
		}
		console.log("Fuera del IF:" +uno);
	}

	cambiarNombre (){
		this.nombre = 'Juan Lopez';
	}

	cambiarEdad (edad){
		this.edad = edad;
	}


	holaMundo (nombre){
		alert('Hola mundo soy '+ nombre);
	}
}