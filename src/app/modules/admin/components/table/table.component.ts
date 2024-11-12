import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear colección de productos del tipo producto -> lo definimos como un array
  coleccionProductos: Producto[] = [];

  // Variable para manejar el estado de Edición y Eliminación de productos
  modalVisibleProducto: boolean = false;

  // Variable va a tomar el producto que nosotros elijamos
  productoSeleccionado!: Producto; // <- recibe valores vacíos

  nombreImagen!: string; // Obtendrá el nombre de la imagen

  imagen!: string; // Obtendrá la ruta de la imagen

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    // imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    // subscribe -> notifica constantemente los cambios actuales del sistema
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // guarda la información recibida como un nuevo "producto" a la colección
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    // validamos los valores del producto agregado
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        // idProducto no se toma porque es generado por la BD y no por el usuario
        idProducto: '',
        // el resto es tomado con información ingresada por el usuario
        nombre: this.producto.value.nombre!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        // imagen ahora toma la URL generada desde Storage
        imagen: '',
        alt: this.producto.value.alt!
      }

      // Enviamos nombre y url de la imagen; definimos carpeta de imágenes como "productos"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          // Encapsulamos respuesta y envíamos la información obtenida
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              // Ahora método crearProducto recibe los datos del formulario y la URL formateada
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(producto => {
                  alert("Ha agregado un nuevo producto con éxito :)");

                  // Limpiamos formulario para agregar nuevos productos
                  this.producto.reset();
                })
                .catch(error => {
                  alert("Hubo un problema al agregar un nuevo producto :(");

                  this.producto.reset();
                })
            })
        })
    }
  }

  mostrarBorrar(productoSeleccionado: Producto) {
    // abre el modal
    this.modalVisibleProducto = true;
  
    // toma los valores del producto elegido
    this.productoSeleccionado = productoSeleccionado;
  
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    
    swalWithBootstrapButtons.fire({
      title: "Deseas borrar este producto?",
      text: `Producto seleccionado : ${productoSeleccionado.nombre}`,
      icon: "warning",
      imageUrl: productoSeleccionado.imagen,  // Ruta de la imagen del producto
      imageWidth: 100,  // Ajusta el ancho de la imagen si es necesario
      imageHeight: 100, // Ajusta el alto de la imagen si es necesario
      imageAlt: "Product image",
      showCancelButton: true,
      confirmButtonText: "Si, borrar el producto",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen);
  
        swalWithBootstrapButtons.fire({
          title: "Borrado!",
          text: "El producto se ha borrado con exito.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Se ha cancelado la propuesta",
          icon: "error"
        });
      }
    });
  }
  
  // Función para eliminar definitivamente al producto


  // Función para seleccionar el producto a editar
  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;

    // Enviar o "setear" los nuevos valores y reasignarlos a las variables
    // El ID no se vuelve a enviar ni se modifica, por ende no lo llamamos
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      // imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  editarProducto() {
    let datos: Producto = {
      // Solo el ID toma y deja igual su valor
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      /* Imagen toma información desde el servicio, no del formulario */
      imagen: this.productoSeleccionado.imagen,
      alt: this.producto.value.alt!
    }

    // Verificamos que el usuario ingrese una nueva imagen o no
    if (this.imagen) {
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              // Actualizamos URL de la imagen en los datos del formulario
              datos.imagen = url;

              // Actualizamos los datos desde el formulario de edición
              this.actualizarProducto(datos);

              // Vaciamos casillas del formulario
              this.producto.reset();
            })
            .catch(error => {
              alert("Hubo un problema al subir la imagen :( \n" + error);

              this.producto.reset();
            })
        })
    } else {
      /*
        Actualizamos formulario con los datos recibidos del usuario, pero sin modificar la
        imagen ya existente en Firestore y Storage
      */
      this.actualizarProducto(datos);
    }
  }

  // ACTUALIZA la información ya existente de los productos
  actualizarProducto(datos: Producto) {
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {
        alert("El producto fue modificado con éxito.");
      })
      .catch(error => {
        alert("Hubo un problema al modificar el producto.");
      })
  }

  // Método para CARGAR IMÁGENES
  cargarImagen(event: any) {
    // Variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];

    // Variable para crear un nuevo objeto de tipo "archivo" o "file" y poder leerlo
    let reader = new FileReader();

    if (archivo != undefined) {
      /*
        Llamamos a método readAsDataUrl para leer toda la información recibida.
        Enviamos como parámetro el archivo porque será el encargado de tener la info. 
        ingresada por el usuario
      */
      reader.readAsDataURL(archivo);

      // Definimos qué haremos con la información mediante función flecha
      reader.onloadend = () => {
        let url = reader.result;

        // Verificamos que la URL sea existente y diferente a "nula"
        if (url != null) {
          // Definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name;

          // Definimos ruta de la imagen según URL recibida en formato cadena (string)
          this.imagen = url.toString();
        }
      }
    }
  }
}