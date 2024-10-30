import { Component } from '@angular/core';
import { ProductoService } from '../../favorito/producto.service';
import { CrudService } from '../../admin/services/crud.service';
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-componentes-carrito',
  templateUrl: './componentes-carrito.component.html',
  styleUrls: ['./componentes-carrito.component.css']
})
export class ComponentesCarritoComponent {

  cantidadProductosCarrito:Carrito[]=[];
  constructor(public productoservicio: ProductoService, public servicioCrud:CrudService){}
 
  ngOnInit(): void {
    this.servicioCrud.obtenerProductosCarrito('carrito').subscribe(carrito => this.cantidadProductosCarrito = carrito);
  }

}