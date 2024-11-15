import { Component } from '@angular/core';
import { ProductoService } from 'src/app/modules/favorito/producto.service';
import { CarritosService } from 'src/app/modules/carrito/carritos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public productoservicio: ProductoService, public servicioCarrito: CarritosService){}
  logueado = true; // variable booleana para el botón de Registro e Inicio de Sesión
  deslogueado = false; // variable booleana para el botón de Cerrar Sesión


  // Cambia los valores de logueado y deslogueado para ocultar los primeros y mostrar el último
  iniciar(){
    this.logueado = false;
    this.deslogueado = true;
  }
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alterna el estado del menú
  }

}