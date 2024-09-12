import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//archivo de rutas del modulo
import { AutentificacionRoutingModule } from './autentificacion-routing.module';

//componentes del modulo autentificacion 
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro/registro.component';

//componentes de material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

// componentes de angular
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    //material
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    //angular 
    FormsModule
  ], 
  exports: [
    InicioSesionComponent,
    RegistroComponent, 
    //material
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    //angular 
    FormsModule
  ]
})
export class AutentificacionModule { }
