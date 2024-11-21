import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KayakComponent } from './pages/kayak/kayak.component';
import { EscaladaComponent } from './pages/escalada/escalada.component';
import { CiclismoComponent } from './pages/ciclismo/ciclismo.component';
import { EsquiComponent } from './pages/esqui/esqui.component';
import { ParacaidismoComponent } from './pages/paracaidismo/paracaidismo.component';
import { PescaComponent } from './pages/pesca/pesca.component';
import { TirolesaComponent } from './pages/tirolesa/tirolesa.component';
import { TodosComponent } from './pages/todos/todos.component';
import { BuceoComponent } from './pages/buceo/buceo.component';
const routes: Routes = [
  {
    path:"kayak",component: KayakComponent
  },
  {
    path:"escalada",component: EscaladaComponent
  },
  {
    path:"ciclismo",component: CiclismoComponent
  },
  {
    path:"esqui",component: EsquiComponent
  },
  {
    path:"paracaidismo",component: ParacaidismoComponent
  },
  {
    path:"pesca",component: PescaComponent
  },
  {
    path:"buceo",component: BuceoComponent
  },
  {
    path:"tirolesa",component: TirolesaComponent
  },
  {
    path:"todos",component: TodosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }