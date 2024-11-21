import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesFavoritoComponent } from './componentes-favorito/componentes-favorito.component';
import { PagesFavoritoComponent } from './pages-favorito/pages-favorito.component';

const routes: Routes = [
{
    path:"",component:ComponentesFavoritoComponent
},
{
  path:"favorito",component:PagesFavoritoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritoRoutingModule { }
