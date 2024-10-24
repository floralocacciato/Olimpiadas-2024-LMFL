import { Component, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/modules/favorito/producto.service';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  productos: Producto[] = [];
producto: any;
  constructor (public productoservicio: ProductoService, public servicioCrud:CrudService){}

 

 subirFavorito(producto:any){
  producto.favoritos=!producto.favoritos

  this.productoservicio.getProductosFavoritos()
  this.productoservicio.contarProductosFavoritos()
 }
 
 coleccionProductos:Producto[]=[];
 

 ngOnInit(): void {
  // subscribe -> notifica constantemente los cambios actuales del sistema
  this.servicioCrud.obtenerProducto().subscribe(producto => {
   
    // guarda la información recibida como un nuevo "producto" a la colección
    this.coleccionProductos = producto;
  })
}
}


