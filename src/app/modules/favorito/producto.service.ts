import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productos: any[] = []; 
  constructor( ) { }
// Metodo para contar productos favoritos
productosFavoritos: any[] = [];
productosCarrito: any[] = [];

producto:any[]=[];
getProductosCarrito(){
  this.productosCarrito = this.productos.filter(producto => producto.carrito === true);
}
// Metodo para contar productos Carrito
cantidadProductosCarrito: number = 0;
contarCarrito() {
  this.cantidadProductosCarrito = this.productos.filter(producto => producto.carrito === true).length;
}


getProductosFavoritos() {
  this.productosFavoritos = this.productos.filter(producto => producto.favoritos === true);

}

// Metodo para contar productos fvoritos
cantidadProductosFavoritos: number = 0;
contarProductosFavoritos() {
  this.cantidadProductosFavoritos = this.productos.filter(producto => producto.favoritos === true).length;
  // this.cantidadProductosFavoritos= this.cursosFavoritos.length
}



}
