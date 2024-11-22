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

  detalle:Producto= {
    idProducto: '',
    nombre: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    imagen: '',
    alt: '',
    favoritos: false,
    carrito: false,
    stock: 0
  };
//carrito
productos: Producto[] = [];
  coleccionProductosCarrito: Carrito[] = [];
  contadorCarrito: number = 0;

//favorito contador
  contadorFavoritos: number = 0;

  // productos
  productosFavoritos: Producto[] = [];
  coleccionFavoritos: Producto[] = [];


  breakpoints = {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1440: { slidesPerView: 6 }
  };


  constructor(public productoservicio: ProductoService, public servicioCrud: CrudService, public servicioCarrito:CarritosService) { }



  subirFavorito(producto: Producto) {
    this.productoservicio.subirFavorito(producto); // Actualiza en el servicio de favoritos
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

      // Obtener los productos desde el servicio CRUD
    this.servicioCrud.obtenerProducto().subscribe(productos => {
      this.productos = productos; // Guardar productos locales
      this.productoservicio.setProductos(this.productos); // Actualizar en el servicio global
    });
  }

  mostrarProducto(producto:Producto){
    this.detalle = producto
  }
  

}


