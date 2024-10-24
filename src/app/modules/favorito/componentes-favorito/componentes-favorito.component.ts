import { Component} from '@angular/core';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-componentes-favorito',
  templateUrl: './componentes-favorito.component.html',
  styleUrls: ['./componentes-favorito.component.css']
})
export class ComponentesFavoritoComponent {
  constructor (public productoservicio: ProductoService){}



  subirFavorito(producto:any){
    producto.favoritos=!producto.favoritos
  
    this.productoservicio.getProductosFavoritos()
    this.productoservicio.contarProductosFavoritos()
   }
}