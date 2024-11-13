import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritoComponent } from './components/favorito/favorito.component';


@NgModule({
  declarations: [
    FavoritoComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
