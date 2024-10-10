import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { ComponentesCarritoComponent } from './componentes-carrito/componentes-carrito.component';
import { PagesCarritoComponent } from './pages-carrito/pages-carrito.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ComponentesCarritoComponent,
    PagesCarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    MatGridListModule
  ],
  exports: [ComponentesCarritoComponent,
     PagesCarritoComponent,
     MatGridListModule]
})
export class CarritoModule { }
