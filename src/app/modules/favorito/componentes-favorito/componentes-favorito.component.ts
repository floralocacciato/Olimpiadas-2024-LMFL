import { Component } from '@angular/core';

@Component({
  selector: 'app-componentes-favorito',
  templateUrl: './componentes-favorito.component.html',
  styleUrls: ['./componentes-favorito.component.css']
})
export class ComponentesFavoritoComponent {
  favoritos = ['Artículo 1', 'Artículo 2', 'Artículo 3'];
  nuevoFavorito = '';

  agregarFavorito() {
    if (this.nuevoFavorito) {
      this.favoritos.push(this.nuevoFavorito);
      this.nuevoFavorito = ''; // Limpiar el campo de entrada
    }
  }
}