import { Component, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/modules/favorito/producto.service';

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


  constructor (public productoservicio: ProductoService){}

  subirFavorito(producto: Producto){
    producto.favoritos=!producto.favoritos

   }
}


