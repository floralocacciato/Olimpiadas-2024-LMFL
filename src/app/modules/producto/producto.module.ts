import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CardComponent } from './components/card/card.component';
import { CardSeccionComponent } from './components/card-seccion/card-seccion.component';


@NgModule({
  declarations: [
    CardComponent,
    CardSeccionComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
