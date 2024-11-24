export class Tarea {
    constructor(
        public id: number,
        public titulo: string,
        public minutos: number,
        public seleccionada: boolean = false,  // Agregar un campo para indicar si la tarea está seleccionada o no. Inicialmente, se establece en false.  // Constructor para la clase Tarea.
        public destacada: boolean = false,  // Agregar un campo para indicar si la tarea está completada o no. Inicialmente, se establece en false.  // Agregar un método para marcar la tarea como completada.  // Agregar un método para marcar la tarea como no completada.  // Agregar un método para eliminar la tarea.  // Agregar un método para editar el
    ){}
}