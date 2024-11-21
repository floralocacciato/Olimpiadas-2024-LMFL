import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-ciclismo',
  templateUrl: './card-ciclismo.component.html',
  styleUrls: ['./card-ciclismo.component.css']
})
export class CardCiclismoComponent {
  // Colección de todos los productos
  coleccionProductos: Producto[] = [];

  // Colección de sólo productos de categoría "Juguetes"
  coleccionCiclismo: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  //Booleano para manejar la visibilidad de "Ultima Compra"
  compraVisible:boolean = false;

  //Directivas para comunicarse con el componente padre
  @Input() productoReciente: string = '';

  //Output sera definido como un nuevo evento
  @Output() productoAgregado = new EventEmitter<Producto>;

  stock:number = 0;

  constructor(public servicioCrud: CrudService, 
    public servicioCarrito: CarritoService
  ) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      // mostrar la colección actual de juguetes
      this.mostrarProductoCiclismos();
    })
  }

  // Función para filtrar los productos que sean del tipo "juguetes"
  mostrarProductoCiclismos() {
    // forEach: itera la colección
    this.coleccionProductos.forEach(producto => {
      // Si la categoría del producto es igual a "juguetes", se enviará a la 
      // colección de juguetes específicada

      if (producto.categoria === "ciclismo") {
        // .push: sube o agrega un item a una colección
        this.coleccionCiclismo.push(producto);
      }
    })
  }

  // Muestra información completa de un producto elegido por el usuario
  mostrarVer(info: Producto) {
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }

  agregarProducto(info:Producto){
    this.productoAgregado.emit(info);

    this.compraVisible = true;

    const stockDeseado = Math.trunc(this.stock);

    //Controla el stock que desea el comprador
    if (stockDeseado<=0 || stockDeseado > info.stock) {
      Swal.fire({
        title:'Error al agregar el producto',
        text:'El stock ingresado no es valido, por favor ingresar un valor valido',
        icon:'error'
      })
    }else{
      this.servicioCarrito.crearPedido(info,stockDeseado);
    }
  }
}