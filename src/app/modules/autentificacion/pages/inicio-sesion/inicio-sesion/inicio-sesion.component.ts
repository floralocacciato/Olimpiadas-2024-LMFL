import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../../sevices/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  //Defino la variable hide
  hide = true
  usuarioIngresado: any;
  // Constructor que declara las variables provenientes de los componentes AuthService,FirestoreService y Router y las declara como publicas

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }




  //declaro variables que va a usar el usuario
  usuarios: Usuario = {

    uid: '', // atributos tipo '' = reciben valores indefinidos,

    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }


  //CREAR UNA COLECCION QUE SOLO RECIBE OBJETOS DEL TIPO USUARIOS
  coleccionUsuarios: Usuario[] = [];
  //creo la funcion de inicio de sesion que va a utilizar 

  //Declaro la funcion y le asigno el tipo async


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


  async IniciarSesion() {

    //declaro una constante llamada "credenciales" que viene de la colección de usuarios
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    try {
      //Obtenemos el usuario desde la BD -> Cloud FireStore
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);
      //! -> si es diferente
      // empty -> metodo de firebase para marcar algo si s vacio 
      if (!usuarioBD || usuarioBD.empty) {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        this.LimpiarInputs();
        return
      }
      /*Primer documento (registro) en la coleccion de usuarios que se obtiene desde la base de datos
      

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


      if (hashPassword !== usuarioData.password) {
       Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({
            title: "¡Buen trabajo!",
            text: "¡Se pudo registrar con éxito! :)",
            icon: "success"
          });
          this.servicioRutas.navigate(['/inicio-sesion'])
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          this.LimpiarInputs();

        })

    }
    catch (error) {
      this.LimpiarInputs
    }

  }

  LimpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      password: this.usuarios.password = '',
      rol: this.usuarios.rol = '',
      email: this.usuarios.email = ''

    }
  }
}
