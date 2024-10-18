import { Component} from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-componentes-favorito',
  templateUrl: './componentes-favorito.component.html',
  styleUrls: ['./componentes-favorito.component.css']
})
export class ComponentesFavoritoComponent {


  constructor(public productoservicio: ProductoService) {}


  subirFavorito(producto:Producto){
    producto.favoritos=!producto.favoritos

    this.productoservicio.ProductosFavoritos()
    this.productoservicio.ProductosFavoritos()
  }
  
}