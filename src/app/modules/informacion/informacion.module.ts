import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactosComponent,
    SobrenosotrosComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatGridListModule,
    FormsModule

  ],
  exports: [
    MatGridListModule,
    FormsModule
  ]

})
export class InformacionModule { }
