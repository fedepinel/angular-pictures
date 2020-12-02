import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Picture } from './pictures-list/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureCartService {

  private _listaCompras: Picture[] = [];
  listaCompras: BehaviorSubject<Picture[]> = new BehaviorSubject(this._listaCompras);

  constructor() { }

  agregarAlCarrito(picture: Picture) {
    let item: Picture = this._listaCompras.find((v1) => v1.nombre == picture.nombre);
    //Lo busco y me previene de hacer el mismo push dos veces
    if(!item){
      this._listaCompras.push({ ...picture});
    }else{
      item.cantidad += picture.cantidad;
    }
    console.log(this._listaCompras);
    this.listaCompras.next(this._listaCompras); //Esto es equivalente al emmit de eventos (prestar atencion)
  }

}
