import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//archivo de rutas del modulo
import { AdminRoutingModule } from './admin-routing.module';

//componentes LOCAL
import { TableComponent } from './components/table/table.component';

//Componente de VISTA
import { AdminComponent } from './pages/admin/admin.component';

// Componente de MATERIAL
import { MatIconModule } from '@angular/material/icon';

// Paqueterías de formularios y formularios reactivos de ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//servicio
import { CrudService } from './services/crud.service';


@NgModule({
  declarations: [
    TableComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule, //agregamos el servicio al modulo
  ],
  exports: [
    TableComponent,
    AdminComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
