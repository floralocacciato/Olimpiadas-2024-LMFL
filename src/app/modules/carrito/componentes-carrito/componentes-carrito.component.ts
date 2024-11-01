import { Component } from '@angular/core';
import { CarritosService } from '../carritos.service';
import { CrudService } from '../../admin/services/crud.service';
import { Carrito } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-componentes-carrito',
  templateUrl: './componentes-carrito.component.html',
  styleUrls: ['./componentes-carrito.component.css']
})
export class ComponentesCarritoComponent {

  cantidadProductosCarrito:Carrito[]=[];

  coleccionProductos:Producto[] = [];

  
productoSeleccionado!: Producto; // <- recibe valores vacíos


modalVisibleProducto: boolean = false;

  constructor(public productoservicio: CarritosService, public servicioCrud:CrudService){}
 
  ngOnInit(): void {
    this.productoservicio.obtenerProductosCarrito().subscribe(carrito => this.coleccionProductos = carrito);
  }

  obtenerCarrito(){
    this.coleccionProductos.forEach(producto => {
      if (producto.carrito === true) {
        this.cantidadProductosCarrito.push(producto)
      }
    })
  }

// Función para eliminar definitivamente al producto
borrarProducto() {
  // Envía ID del producto eliminado y la ubicación en el almacenamiento de STORAGE
  this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
    .then(respuesta => {
      alert("El producto se ha eliminado correctamente.")
    })
    .catch(error => {
      alert("No se ha podido eliminar el producto \n" + error);
    })
}
// Función para alertar al usuario del producto que desea eliminar
mostrarBorrar(productoSeleccionado: Producto) {
  // abre el modal
  this.modalVisibleProducto = true;

  // toma los valores del producto elegido
  this.productoSeleccionado = productoSeleccionado;
}
}