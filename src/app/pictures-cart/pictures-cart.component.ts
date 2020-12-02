import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { PictureCartService } from '../picture-cart.service';
import { Picture } from '../pictures-list/picture';

@Component({
  selector: 'app-pictures-cart',
  templateUrl: './pictures-cart.component.html',
  styleUrls: ['./pictures-cart.component.scss']
})
export class PicturesCartComponent implements OnInit {

  listaCompras$: Observable<Picture[]>;
  constructor(private cart: PictureCartService) {
    this.listaCompras$ = cart.listaCompras.asObservable();
   }

  ngOnInit(): void {
  }

}
