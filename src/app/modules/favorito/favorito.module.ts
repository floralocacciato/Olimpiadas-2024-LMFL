import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritoRoutingModule } from './favorito-routing.module';
//componentes locales

import { ComponentesFavoritoComponent } from './componentes-favorito/componentes-favorito.component';
import { PagesFavoritoComponent } from './pages-favorito/pages-favorito.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
 
@NgModule({
  declarations: [
    ComponentesFavoritoComponent,
    PagesFavoritoComponent
  ],
  imports: [
    CommonModule,
    FavoritoRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports:[
    ComponentesFavoritoComponent,
    PagesFavoritoComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class FavoritoModule { }
