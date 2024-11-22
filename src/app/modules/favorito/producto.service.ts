import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from 'src/app/models/producto';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 private productos: any[] = []; 

 private favoritosSubject = new BehaviorSubject<Producto[]>([]); // Emisor de favoritos
  favoritos$ = this.favoritosSubject.asObservable(); // Observable para componentes

  constructor( ) { }
// Metodo para contar productos favoritos
productosFavoritos: any[] = [];




setProductos(productos: Producto[]) {
  this.productos = productos;
  this.actualizarFavoritos(); // Inicializar lista de favoritos
}




subirFavorito(producto: Producto) {
  producto.favoritos = !producto.favoritos; // Cambiar estado de favorito
  this.actualizarFavoritos(); // Emitir cambios en la lista de favoritos
}

private actualizarFavoritos() {
  const favoritos = this.productos.filter(producto => producto.favoritos);
  this.favoritosSubject.next(favoritos); // Actualizar observable
}



}
