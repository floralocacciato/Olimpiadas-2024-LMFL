import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CardComponent } from './components/card/card.component';
import { CardSeccionComponent } from './components/card-seccion/card-seccion.component';
import { KayakComponent } from './pages/kayak/kayak.component';
import { EscaladaComponent } from './pages/escalada/escalada.component';
import { PescaComponent } from './pages/pesca/pesca.component';
import { CiclismoComponent } from './pages/ciclismo/ciclismo.component';
import { EsquiComponent } from './pages/esqui/esqui.component';
import { TirolesaComponent } from './pages/tirolesa/tirolesa.component';
import { ParacaidismoComponent } from './pages/paracaidismo/paracaidismo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardKayakComponent } from './components/card-kayak/card-kayak.component';
import { CardCiclismoComponent } from './components/card-ciclismo/card-ciclismo.component';
import { CardEscaladaComponent } from './components/card-escalada/card-escalada.component';
import { CardEsquiComponent } from './components/card-esqui/card-esqui.component';
import { CardParacaidismoComponent } from './components/card-paracaidismo/card-paracaidismo.component';
import { CardPescaComponent } from './components/card-pesca/card-pesca.component';
import { CardTirolesaComponent } from './components/card-tirolesa/card-tirolesa.component';
import { CardInicioComponent } from './components/card-inicio/card-inicio.component';


@NgModule({
  declarations: [
    CardComponent,
    CardSeccionComponent,
    KayakComponent,
    EscaladaComponent,
    PescaComponent,
    CiclismoComponent,
    EsquiComponent,
    TirolesaComponent,
    ParacaidismoComponent,
    TodosComponent,
    CarruselComponent,
    CardKayakComponent,
    CardCiclismoComponent,
    CardEscaladaComponent,
    CardEsquiComponent,
    CardParacaidismoComponent,
    CardPescaComponent,
    CardTirolesaComponent,
    CardInicioComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
