import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesAboutComponent } from './pictures-about/pictures-about.component';
import { PicturesPictureComponent } from './pictures-picture/pictures-picture.component';

//Rutas, el path me lleva al por defecto en este caso declarado pictures que es el principal
//Y despues cada path me lleva al componente que le declaro abajo
const routes: Routes = [
  {
    path: '',
    redirectTo: 'pictures',
    pathMatch: 'full'
  },
  {
    path: 'pictures',
    component: PicturesPictureComponent
  },
  {
    path: 'about',
    component: PicturesAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
