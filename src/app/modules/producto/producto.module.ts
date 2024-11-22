import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CardComponent } from './components/card/card.component';
import { CardSeccionComponent } from './components/card-seccion/card-seccion.component';
import { CardEscaladaComponent } from './components/card-escalada/card-escalada.component';
import { EscaladaComponent } from './pages/escalada/escalada.component';
import { CardCiclismoComponent } from './components/card-ciclismo/card-ciclismo.component';
import { CardKayakComponent } from './components/card-kayak/card-kayak.component';
import { CardEsquiComponent } from './components/card-esqui/card-esqui.component';
import { CardParacaidismoComponent } from './components/card-paracaidismo/card-paracaidismo.component';
import { CardPescaComponent } from './components/card-pesca/card-pesca.component';
import { CardTirolesaComponent } from './components/card-tirolesa/card-tirolesa.component';
import { BuceoComponent } from './pages/buceo/buceo.component';
import { CiclismoComponent } from './pages/ciclismo/ciclismo.component';
import { EsquiComponent } from './pages/esqui/esqui.component';
import { KayakComponent } from './pages/kayak/kayak.component';
import { ParacaidismoComponent } from './pages/paracaidismo/paracaidismo.component';
import { PescaComponent } from './pages/pesca/pesca.component';
import { TirolesaComponent } from './pages/tirolesa/tirolesa.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardAlpinismoComponent } from './components/card-alpinismo/card-alpinismo.component';
import { AlpinismoComponent } from './pages/alpinismo/alpinismo.component';


@NgModule({
  declarations: [
    CardComponent,
    CardSeccionComponent,
    CardEscaladaComponent,
    EscaladaComponent,
    CardCiclismoComponent,
    CardKayakComponent,
    CardEsquiComponent,
    CardParacaidismoComponent,
    CardPescaComponent,
    CardTirolesaComponent,
    BuceoComponent,
    CiclismoComponent,
    EsquiComponent,
    KayakComponent,
    ParacaidismoComponent,
    PescaComponent,
    TirolesaComponent,
    TodosComponent,
    CarruselComponent,
    CardAlpinismoComponent,
    AlpinismoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
