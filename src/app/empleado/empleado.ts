export class Empleado {

	// Esto se haria en cualquier lenguaje de programación
	/*
	public nombre: string;
	public edad:number;

	constructor (nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}
	*/

	// Para hacerlo en angular
	constructor(
		public nombre: string,
		public edad: number,
		public cargo:string,
		public contratado:boolean
		){}
}