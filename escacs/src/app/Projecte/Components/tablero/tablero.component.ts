import { Component } from '@angular/core';
import { Tablero } from '../../Model/Implementations/Tablero/Tablero';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Casilla } from '../../Model/Implementations/Casilla/Casilla';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
tablero!: Tablero;
  constructor() {}

  ngOnInit(): void {
    this.tablero = new Tablero();
  }



  onDrop(event: CdkDragDrop<any>) {
    console.log("willyrex");
    console.log(event);
  
    // Obtener la imagen que se soltó
    const droppedImage = event.item.element.nativeElement;
  
    // Verificar si el elemento tiene un contenedor válido
    if (!event.container) {
      console.log("No se puede mover");
      return;
    }
  
    if (event.previousContainer === event.container) {
      console.log("No se puede mover");
      // Si la imagen se soltó en el mismo contenedor, no hacer nada
      return;
    }
  
    console.log("Se ha soltado");
  
    // Eliminar la imagen del contenedor anterior
    event.previousContainer.data.splice(event.previousIndex, 1);
  
    // Agregar la imagen al nuevo contenedor
    event.container.data.splice(event.currentIndex, 0, droppedImage);
  }
}
