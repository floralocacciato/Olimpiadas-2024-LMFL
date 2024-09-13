import { Component } from '@angular/core';

//importamos la interfaz de producto
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public info: Producto[];
  constructor() {
    this.info = [
      {
        idProducto: "",
        nombre: "",
        precio: 0,
        descripcion: "",
        categoria: "",
        imagen: "",
        alt:""
      },
      {
        idProducto: "",
        nombre: "",
        precio: 0,
        descripcion: "",
        categoria: "",
        imagen: "",
        alt:""
      },
      {
        idProducto: "",
        nombre: "",
        precio: 0,
        descripcion: "",
        categoria: "",
        imagen: "",
        alt:""
      },
      {
        idProducto: "",
        nombre: "",
        precio: 0,
        descripcion: "",
        categoria: "",
        imagen: "",
        alt:""
      },
    ]
  }
}
