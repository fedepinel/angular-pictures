import { Component, OnInit } from '@angular/core';
import { PictureCartService } from '../picture-cart.service';
import { PictureDataService } from '../picture-data.service';
import { Picture } from './picture';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {

  pictures: Picture[] = [
    {
      miniatura : "assets/img/logano.jpg",
      nombre : "Joey Logano",
      resolucion : "1450 x 500",
      precio : 200,
      stock: 350,
      promocion : true,
      cantidad : 0,
    },
    {
      miniatura : "assets/img/rally.jpg",
      nombre : "Ford fiesta rally",
      resolucion : "960 x 612",
      precio : 320,
      stock : 200,
      promocion : false,
      cantidad : 0,
    },
    {
      miniatura : "assets/img/fordferrari.jpg",
      nombre : "Ford vs Ferrari",
      resolucion : "960 x 383",
      precio : 500,
      stock : 0,
      promocion : false,
      cantidad : 0,
    }
  ]

  constructor(private cart: PictureCartService, private picturesDataService: PictureDataService) { }

  ngOnInit(): void {
  }

  agregarAlCarrito(picture): void{
    this.cart.agregarAlCarrito(picture);
    //Resta del stock las que compre el usuario y luego las reinicia a cero para la siguiente compra
    picture.stock -= picture.cantidad;
    picture.cantidad = 0;
  }

  maximoAlcanzado(m: String){
    alert(m);
  }

}
