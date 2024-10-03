import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

const routes: Routes = [

  {
    path:"contacto",component:ContactosComponent
  },
  {
    path:"sobrenosotros",component:SobrenosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionRoutingModule{ }
