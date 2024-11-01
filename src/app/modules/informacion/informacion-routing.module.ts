import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  {
    path:"contactos",component:ContactosComponent
  },
  {
    path:"sobre-nosotros",component:SobrenosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionRoutingModule { }  