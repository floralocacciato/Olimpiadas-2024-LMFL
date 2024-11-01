import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritosService {
  private productosCollection: AngularFirestoreCollection<Producto>
  productos: any[] = []; 
  productosCarrito: Producto[] = [];


  constructor( database: AngularFirestore) {  this.productosCollection = database.collection('producto');}

  obtenerProducto(){
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
  }
  obtenerProductosCarrito(){
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
  }
  getProductosCarrito(product:Producto){
    const productoEncontrado = this.productos.find(prod => prod.idProducto === product.idProducto);
  
    return productoEncontrado.carrito = true;
  }
  // Metodo para contar productos Carrito
  cantidadProductosCarrito: number = 0;
  contarCarrito() {
    this.cantidadProductosCarrito = this.productos.filter(producto => producto.carrito === true).length;
  }
  
}
