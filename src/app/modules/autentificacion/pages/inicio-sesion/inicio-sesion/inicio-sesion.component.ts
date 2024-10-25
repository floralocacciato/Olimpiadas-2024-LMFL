import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../../sevices/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }


    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }



    // Repetitiva para recorrer la colección local
    for(let i = 0; i < this.coleccionusuarioIngresadoLocal.length; i++){
      // Constante que guarde la información de la posición actual de los objetos
      const usuarioLocal = this.coleccionusuarioIngresadoLocal[i];

      
      Comparando uno por uno los atributos del objeto local con el que ingresa el 
      usuario 
      if(usuarioLocal.nombre === credenciales.nombre && 
        usuarioLocal.apellido === credenciales.apellido && 
        usuarioLocal.email === credenciales.email && 
        usuarioLocal.rol === credenciales.rol && 
        usuarioLocal.password === credenciales.password
      ){
        // Notificamos al usuario su correcto ingreso
        alert("Iniciaste sesión correctamente :)");
        // Paramos la función
        break;
      } else {
        alert("No se pudo iniciar sesión :(");
        break;
      }
    }*/


      */
      const usuarioDoc = usuarioBD.docs[0];

      /**
       * Extrae los datos del documento en forma de un objeto y se específica como de tipo 
       * "Usuario" -> haciendo referencia a nuestra interfaz de Usuario.
       */
      const usuarioData = usuarioDoc.data() as Usuario;

      // Hash de la contraseña ingresada por el usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if(hashedPassword !== usuarioData.password){
        Swal.fire({
          text: "Contraseña incorrecta",
          icon: "error"
        })


    }
  }
}
