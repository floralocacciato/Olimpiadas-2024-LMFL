import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritoRoutingModule } from './favorito-routing.module';
//componentes locales

import { ComponentesFavoritoComponent } from './componentes-favorito/componentes-favorito.component';
import { PagesFavoritoComponent } from './pages-favorito/pages-favorito.component';


@NgModule({
  declarations: [
    ComponentesFavoritoComponent,
    PagesFavoritoComponent
  ],
  imports: [
    CommonModule,
    FavoritoRoutingModule
  ]
})
export class FavoritoModule { }
