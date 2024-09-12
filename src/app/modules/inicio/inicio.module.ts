import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//vista-pagina-interfaz del usuario 
import { InicioComponent } from './pages/inicio/inicio.component';
//componentes locales
import { CardComponent } from './components/card/card.component';

//componentes que importamos desde materias
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CardComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    CardComponent,
    InicioComponent
  ]
})
export class InicioModule { }
