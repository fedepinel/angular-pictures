import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Picture } from '../pictures-list/picture';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  //El picture en minuscula es como llamo a la etiqueta en el componenete principal
  @Input()
  //De esta forma es reutilizable
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maximoAlcanzado: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  //Ahora las funciones se agregan direectamentee en el componente del input
  aumentarCantidad(): void{
    if (this.cantidad < this.max && this.max > 0) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maximoAlcanzado.emit("Se alcanzo el maximo");
    }
  }
  reducirCantidad(): void{
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  //Arreglar Bug al comprar fotos
  modificacionCantidad(event): void{
    if(event.key >=1 && event.key <=9){
      //arreglar por que toma el primer numero
      if(event.target.value > this.max){
        event.target.value = this.max;
        this.cantidadChange.emit(this.cantidad);
      }
    }
  }
}
