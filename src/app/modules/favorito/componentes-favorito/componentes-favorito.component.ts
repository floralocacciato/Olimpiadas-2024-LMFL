import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../admin/services/crud.service';

@Component({
  selector: 'app-componentes-favorito',
  templateUrl: './componentes-favorito.component.html',
  styleUrls: ['./componentes-favorito.component.css']
})
export class ComponentesFavoritoComponent implements OnInit {
  productos: Producto[] = [];
  coleccionFavoritos: Producto[] = [];

  constructor(public productoservicio: ProductoService, public servicioCrud: CrudService) {}

  ngOnInit(): void {
    // Suscribirse para obtener la lista de productos
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.productos = producto; // Almacena los productos
      this.filtrarFavoritos(); // Filtra los favoritos
    });
  }

  subirFavorito(producto: Producto) {
    // Cambia el estado de favorito
    producto.favoritos = !producto.favoritos;

    // Actualiza la colección de favoritos
    this.filtrarFavoritos(); // Filtra nuevamente para actualizar la lista de favoritos
  }

  // Método para filtrar los productos favoritos
  filtrarFavoritos() {
    this.coleccionFavoritos = this.productos.filter(producto => producto.favoritos);
  }
}