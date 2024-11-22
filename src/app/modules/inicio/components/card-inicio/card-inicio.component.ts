import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card-inicio',
  templateUrl: './card-inicio.component.html',
  styleUrls: ['./card-inicio.component.css']
})
export class CardInicioComponent {
producto: any;
subirFavorito(arg0: any) {
throw new Error('Method not implemented.');
}
 // PROPIEDAD PÚBLICA (TIPO ARRAY)
 public info: Producto[];

detalle:Producto= {
  idProducto: '',
  nombre: '',
  precio: 0,
  descripcion: '',
  categoria: '',
  imagen: '',
  alt: '',
  favoritos: false,
  carrito: false,
  stock: 0
};

coleccionProductosCarrito: Producto[] = [];


mostrarProducto(producto:Producto){
  this.detalle = producto
}


 constructor(){
   this.info = [
     {
       nombre: "silla neo",
       imagen: "https://firebasestorage.googleapis.com/v0/b/olimpiadas--2024.appspot.com/o/productos%2Fsilla1.jfif?alt=media&token=b1a70a88-8f0c-4944-83d1-f31abf0ba791",
       alt: "Un chanchito",
       idProducto: '',
       precio: 0,
       descripcion: '',
       categoria: 'paracaidismo',
       favoritos: false,
       stock: 0,
       carrito: false
     },
     {
       nombre: "kayak",
       imagen: "https://firebasestorage.googleapis.com/v0/b/olimpiadas--2024.appspot.com/o/productos%2Frocker-one.webp?alt=media&token=7300f5e3-78a5-454d-a3c0-0a36e2177fb6",
       alt: "Un caballo",
       idProducto: '',
       precio: 0,
       descripcion: '',
       categoria: 'kayak',
       favoritos: false,
       stock: 0,
       carrito: false
     },
     {
       nombre: "casquito",
       imagen: "https://firebasestorage.googleapis.com/v0/b/olimpiadas--2024.appspot.com/o/productos%2Fcasco1.webp?alt=media&token=705a854a-6dc2-414a-bbb7-114d89ef5411",
       alt: "Un carpincho",
       idProducto: '',
       precio: 0,
       descripcion: '',
       categoria: 'ciclismo',
       favoritos: false,
       stock: 0,
       carrito: false
     },
     {
       nombre: "casquito",
       imagen: "https://firebasestorage.googleapis.com/v0/b/olimpiadas--2024.appspot.com/o/productos%2Fcasco1.webp?alt=media&token=705a854a-6dc2-414a-bbb7-114d89ef5411",
       alt: "Un carpincho",
       idProducto: '',
       precio: 0,
       descripcion: '',
       categoria: 'pesca',
       favoritos: false,
       stock: 0,
       carrito: false
     },
     {
       nombre: "casquito",
       imagen: "https://firebasestorage.googleapis.com/v0/b/olimpiadas--2024.appspot.com/o/productos%2Fcasco1.webp?alt=media&token=705a854a-6dc2-414a-bbb7-114d89ef5411",
       alt: "Un carpincho",
       idProducto: '',
       precio: 0,
       descripcion: '',
       categoria: 'tirolesa',
       favoritos: false,
       stock: 0,
       carrito: false
     }
   ]
 }
}
