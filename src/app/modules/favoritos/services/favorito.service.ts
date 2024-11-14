import { Injectable } from '@angular/core';
import { CrudService } from '../../admin/services/crud.service';
import { AuthService } from '../../autentificacion/sevices/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Favorito } from'src/app/models/favorito';
import { Producto } from 'src/app/models/producto';
import { map } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  favorito:Favorito = {
    idFavorito: '',
    producto: {
      idProducto: '',
      nombre: '',
      precio: 0,
      descripcion: '',
      categoria: '',
      imagen: '',
      alt: '',
      stock: 0,
    },
    stock: 0
  }

  private favoritosColeccion: AngularFirestoreCollection<Favorito>

  private uid: string | null = null;

  constructor(private servicioAuth:AuthService,
    private servicioFirestore:AngularFirestore,
    public servicioRutas: Router) { 
      //Creamos un subcoleccion dentro de la coleccion de usuarios y le damos ese valor a favoritosColeccion
    this.favoritosColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/favoritos`);
    }

    iniciarFav(){
    
      this.servicioAuth.obtenerUid().then(uid => {
        //Obtenemos el ID del usuario para la subcoleccion
  
        
        this.uid = uid
  
        //Diferenciacion en base al id del usuario
        if(this.uid === null){
  
          console.error('No se obtuvo el UID. Intente iniciar sesion');
          
          this.servicioRutas.navigate(['/inicio-sesion']);
        }else{
          this.favoritosColeccion= this.servicioFirestore.collection(`usuarios/${this.uid}/favoritos`);
  
          console.log(this.uid)
        }
      });
    }

    obtenerFavorito(){
      return this.favoritosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
    }

    crearFavorito(producto:Producto){
      try {
        //Creamos un ID para el pedido que sera subido
        const idFavorito = this.servicioFirestore.createId();
  
        //Reemplazamos los valores de pedido por los valores que obtuvimos
        this.favorito.idFavorito = idFavorito;
        this.favorito.producto = producto;
  
        this.favoritosColeccion.doc(idFavorito).set(this.favorito);

      } catch (error) {
        Swal.fire({
          title:'¡Oh no!',
          text:'Ha ocurrido un error al agregar a favorito su producto',
          icon:'error'
        })
      }
    } 

    borrarFavorito(favorito:Favorito){
      try {
        this.favoritosColeccion.doc(favorito.idFavorito).delete();
  
        Swal.fire({
          text:'Ha borrado su favorito con exito',
          icon:'info'
        })
        
      } catch (error) {
        Swal.fire({
          text:'Ha ocurrido un error: n/'+error,
          icon:'error'
        })
      }
    }

}
