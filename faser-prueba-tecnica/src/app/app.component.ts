import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	nuevoTitulo: string = '';
	nuevaDuracion: number | null = null;
	tareas: Array<{ id: number; titulo: string; minutos: number; seleccionada: boolean; destacada: boolean }> = [];
	siguienteId: number = 5;
	ordenAscendente: boolean = true;
    ordenCampo: string = 'titulo';
	constructor(
        public service: AppService,
	) { }
	
	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	agregarTarea() {
		if (this.nuevoTitulo && this.nuevaDuracion) {
		  this.tareas.push({ 
			id: this.siguienteId++, // Asignar un ID único
			titulo: this.nuevoTitulo, 
			minutos: this.nuevaDuracion,
			seleccionada: false ,
			destacada: false,  // Agregar una opción para marcar la tarea como destacada o no. Inicialmente, se establece en false.  // Agregar un método para marcar la tarea como destacada.  // Agregar un método para marcar la tarea como no destacada.  // Agregar un método para eliminar la tarea destacada.  // Agregar un
		  });
		  this.nuevoTitulo = '';
		  this.nuevaDuracion = null;
		}
	  }
	  eliminarTareas() {
		this.tareas = this.tareas.filter((tarea) => !tarea.seleccionada);
	  }
	  ordenar(campo: string) {
		if (this.ordenCampo === campo) {
		  this.ordenAscendente = !this.ordenAscendente;
		} else {
		  this.ordenCampo = campo;
		  this.ordenAscendente = true;
		}
	
		this.tareas.sort((a, b) => {
		  if (a[campo] < b[campo]) {
			return this.ordenAscendente ? -1 : 1;
		  }
		  if (a[campo] > b[campo]) {
			return this.ordenAscendente ? 1 : -1;
		  }
		  return 0;
		});
	  }
	
	  ordenarAleatorio() {
		for (let i = this.tareas.length - 1; i > 0; i--) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [this.tareas[i], this.tareas[j]] = [this.tareas[j], this.tareas[i]];
		}
	  }
}
