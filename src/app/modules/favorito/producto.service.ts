import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productos: any[] = []; 
  constructor() { }
// Metodo para contar productos favoritos
productosFavoritos: any[] = [];
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
