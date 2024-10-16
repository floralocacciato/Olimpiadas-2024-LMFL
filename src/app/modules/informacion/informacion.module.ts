import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    ContactosComponent,
    SobrenosotrosComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatGridListModule
  ],
  exports: [
    MatGridListModule
  ]

})
export class InformacionModule { }
