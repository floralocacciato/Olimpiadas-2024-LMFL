import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesCarritoComponent } from './componentes-carrito/componentes-carrito.component';
import { PagesCarritoComponent } from './pages-carrito/pages-carrito.component';


const routes: Routes = [
  {
    path:"",component:ComponentesCarritoComponent
},
{
  path:"carrito",component:PagesCarritoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
