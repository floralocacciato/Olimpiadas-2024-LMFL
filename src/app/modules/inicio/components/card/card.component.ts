import { Component, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent  {
  favoritos = ['Artículo 1', 'Artículo 2', 'Artículo 3'];
  nuevoFavorito = '';

  agregarFavorito() {
    if (this.nuevoFavorito) {
      this.favoritos.push(this.nuevoFavorito);
      this.nuevoFavorito = ''; // Limpiar el campo de entrada
    }
  }
}
