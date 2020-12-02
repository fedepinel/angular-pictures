import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicturesListComponent } from './pictures-list/pictures-list.component';

import { FormsModule } from '@angular/forms';
import { PicturesAboutComponent } from './pictures-about/pictures-about.component';
import { PicturesPictureComponent } from './pictures-picture/pictures-picture.component';
import { PicturesCartComponent } from './pictures-cart/pictures-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesListComponent,
    PicturesAboutComponent,
    PicturesPictureComponent,
    PicturesCartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
