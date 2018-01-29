import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'

})

export class EmpleadoComponent{
	public titulo= 'Componente empleado';

	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor (){
		this.empleado = new Empleado('Marta Valencia', 52, 'Trabajadora Social', true);
		this.trabajadores = [
		new Empleado('Yaravi Reyna', 28, 'Ingeniero', false),
		new Empleado('Victor Reyes', 28, 'Ingeniero', true),
		new Empleado('Ranferi Reyna', 23, 'Enfermeria', false)
		];

		this.trabajador_externo = true;
		this.color ='blue';
		this.color_seleccionado= '#ccc';
	}

	ngOnInit(){
		//console.log(this.empleado);
		//console.log(this.trabajadores);

	}

	cambiarExterno (valor){
		this.trabajador_externo = valor;
	}

	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}
}