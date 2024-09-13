import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes locales
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';

//componentes importados de material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

//rutas generales de todos los modulos
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    AppRoutingModule,
    MatDividerModule
  ], 
  exports: [
    FooterComponent,
    NavbarComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class SharedModule { }
