import { Component, Output, EventEmitter} from '@angular/core';
import { Favorito } from 'src/app/models/favorito';
import { FavoritoService } from '../../services/favorito.service';
import { AuthService } from 'src/app/modules/autentificacion/sevices/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent {
  productos: Favorito[] = [];

  constructor( public servicioFavoritos: FavoritoService,
    public servicioAuth: AuthService) {}

  // Variable local para obtener producto seleccionado
FavoritoSeleccionado!: Favorito;

// Variable para manejar estado de un modal
modalVisible: boolean = false;

stock:number = 0;

//Output sera definido como un nuevo evento
@Output() productoAgregado = new EventEmitter<Favorito>;

  //OBTENEMOS EL ROL e id del usuario para verificar que este logueado correctamente
  ngOnInit(){
    this.servicioAuth.obtenerUid().then(uid=> {
      if (uid) {
        this.servicioAuth.obtenerRol(uid).subscribe(rol=> {
          if(rol=== 'usuario') {
            // Iniciamos el favorito
            this.servicioFavoritos.iniciarFav();

            this.servicioFavoritos.obtenerFavorito().subscribe(producto=> 
              this.productos = producto 
            ); 
          } else {
            console.error("No se detecto el rol del usuario")
          }
        })
      }
    }) 
  }

  quitarFavorito(favorito:Favorito){
    this.servicioFavoritos.borrarFavorito(favorito)
  }

  mostrarVer(info: Favorito){
    // Habilita visibilidad del modal
    this.modalVisible = true;
  
    // Guarda información de un producto elegido por el usuario
    this.FavoritoSeleccionado= info;
  }

  agregarFavorito(info:Favorito){
    this.productoAgregado.emit(info);
  
    const stockDeseado = Math.trunc(this.stock);
      //Controla el stock que desea el comprador
      if (stockDeseado<=0 || stockDeseado > info.stock) {
        Swal.fire({
          title:'Error al agregar el producto',
          text:'El stock ingresado no es valido, por favor ingresar un valor valido',
          icon:'error'
        })
      }else{
        this.servicioFavoritos.crearFavorito(info.producto);
      }
  }

}
