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
import { CarouselComponent } from './components/carousel/carousel.component';
import { InformacionComponent } from './components/informacion/informacion.component';

//componente de swiper con angular
import { SwiperModule } from 'swiper/angular';

import {MatIconModule} from '@angular/material/icon';
import { CardInicioComponent } from './components/card-inicio/card-inicio.component';
import { CardOfertasComponent } from './components/card-ofertas/card-ofertas.component';

@NgModule({
  declarations: [
    CardComponent,
    InicioComponent,
    CarouselComponent,
    InformacionComponent,
    CardInicioComponent,
    CardOfertasComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    //componente de swiper
    SwiperModule,
    MatIconModule,

  ],
  exports: [
    CardComponent,
    InicioComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class InicioModule { }
