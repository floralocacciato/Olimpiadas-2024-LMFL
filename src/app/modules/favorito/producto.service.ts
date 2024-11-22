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

  constructor() {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      this.productos = JSON.parse(favoritosGuardados);
      this.actualizarFavoritos();
    }
  }
  // Metodo para contar productos favoritos
  productosFavoritos: any[] = [];




  setProductos(productos: Producto[]) {
    this.productos = productos;

    // Si hay favoritos guardados, actualiza los productos con el estado correspondiente
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      const favoritosIds = JSON.parse(favoritosGuardados).map((p: Producto) => p.idProducto);
      this.productos.forEach(producto => {
        producto.favoritos = favoritosIds.includes(producto.idProducto);
      });
    }

    this.actualizarFavoritos();
  }




  subirFavorito(producto: Producto) {
    producto.favoritos = !producto.favoritos; // Cambia el estado de favorito
    this.actualizarFavoritos(); // Actualiza la lista de favoritos
  }


  private actualizarFavoritos() {
    const favoritos = this.productos.filter(producto => producto.favoritos);
    this.favoritosSubject.next(favoritos); // Emite la nueva lista de favoritos

    // Guarda la lista de favoritos en localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }


}
