import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from 'src/app/models/producto';

// Decorador Injectable para permitir la inyección de este servicio en otros componentes o servicios
@Injectable({
  providedIn: 'root' // Este servicio estará disponible de forma global en la aplicación
})
export class ProductoService {
  private productos: any[] = []; // Lista completa de productos en el sistema

  // BehaviorSubject para mantener y emitir los favoritos
  private favoritosSubject = new BehaviorSubject<Producto[]>([]); 
  favoritos$ = this.favoritosSubject.asObservable(); // Observable que permite a los componentes suscribirse a los cambios en la lista de favoritos

  constructor() {
    // Al iniciar, intenta recuperar los favoritos guardados en localStorage
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      // Si existen favoritos guardados, los parsea y asigna a la lista de productos
      this.productos = JSON.parse(favoritosGuardados);
      this.actualizarFavoritos(); // Actualiza la lista de favoritos
    }
  }

  // Lista para contar los productos favoritos, aunque no parece utilizada en este código
  productosFavoritos: any[] = [];

  /**
   * Método para asignar los productos al servicio.
   * También sincroniza los productos con los favoritos guardados en localStorage.
   */
  setProductos(productos: Producto[]) {
    this.productos = productos; // Asigna la lista completa de productos

    // Verifica si hay favoritos guardados en localStorage
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      // Obtiene los IDs de los productos marcados como favoritos
      const favoritosIds = JSON.parse(favoritosGuardados).map((p: Producto) => p.idProducto);

      // Marca como favoritos los productos que coincidan con los IDs guardados
      this.productos.forEach(producto => {
        producto.favoritos = favoritosIds.includes(producto.idProducto);
      });
    }

    this.actualizarFavoritos(); // Actualiza la lista de favoritos
  }

  /**
   * Método para alternar el estado de favorito de un producto.
   * Si el producto estaba marcado como favorito, lo desmarca; si no, lo marca.
   */
  subirFavorito(producto: Producto) {
    producto.favoritos = !producto.favoritos; // Alterna el estado de favorito
    this.actualizarFavoritos(); // Actualiza la lista de favoritos
  }

  /**
   * Método privado que actualiza la lista de favoritos y la almacena en localStorage.
   */
  private actualizarFavoritos() {
    // Filtra los productos para quedarse solo con los favoritos
    const favoritos = this.productos.filter(producto => producto.favoritos);

    // Emite la nueva lista de favoritos a través del BehaviorSubject
    this.favoritosSubject.next(favoritos);

    // Guarda la lista de favoritos en localStorage para persistencia
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
}
