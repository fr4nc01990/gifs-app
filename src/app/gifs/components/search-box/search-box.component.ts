import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `

    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="buscarEtiqueta()"
      #etiquetaIngresada
    >  
  `
})
export class SearchBoxComponent {

  @ViewChild('etiquetaIngresada')  //permite acceder al elemento <input> a traves de la referencia
  public etiquetaIngresada!: ElementRef<HTMLInputElement>; //inicia una key que es la referencia al elemento <input>

  constructor ( private gifsService: GifsService) {}

  buscarEtiqueta() { // se llama cuando el usuario presiona "Enter" en el campo de entrada.
    
    const nuevaEtiqueta = this.etiquetaIngresada.nativeElement.value; //Accede al valor actual del campo de entrada utilizando
    
    this.gifsService.buscarEtiqueta(nuevaEtiqueta)        

    this.etiquetaIngresada.nativeElement.value= '';//para limpiar la caja de texto

    


  }
}
