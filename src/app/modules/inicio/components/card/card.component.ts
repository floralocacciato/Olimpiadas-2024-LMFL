import { Component, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/modules/favorito/producto.service';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { CarritosService } from 'src/app/modules/carrito/carritos.service';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Carrito } from 'src/app/models/carrito';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {


//carrito
  producto: any;
  coleccionProductosCarrito: Carrito[] = [];
  contadorCarrito: number = 0;

//favorito contador
  contadorFavoritos: number = 0;

  // productos
  productosFavoritos: Producto[] = [];
  coleccionFavoritos: Producto[] = [];
  constructor(public productoservicio: ProductoService, public servicioCrud: CrudService, public servicioCarrito:CarritosService) { }



  subirFavorito(producto: any) {
    producto.favoritos = !producto.favoritos

    this.productoservicio.getProductosFavoritos()
    this.productoservicio.contarProductosFavoritos()
  }

  agregarProducto(producto:Producto) {
  this.servicioCarrito.getProductosCarrito(producto)
    
  }
 ngOnInit(): void {
    // subscribe -> notifica constantemente los cambios actuales del sistema
    this.servicioCrud.obtenerProducto().subscribe(producto => {

      // guarda la información recibida como un nuevo "producto" a la colección
      this.coleccionFavoritos = producto;

    })
     // subscribe -> notifica constantemente los cambios actuales del sistema
   this.servicioCrud.obtenerProducto().subscribe((producto) => {

    // guarda la información recibida como un nuevo "producto" a la colección
    this.coleccionProductosCarrito = producto;

  })
  }
  

}


