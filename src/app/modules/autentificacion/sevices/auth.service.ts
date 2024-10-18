import { Injectable } from '@angular/core';
//Servicio de autentificacion de firebase

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';


// Observará los cambios
import { Observable } from 'rxjs';
// Itera la colección leyendo su información actual
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



   // Propiedad privada para manejo del rol del usuario
   private rolUsuario: string | null = null;


  constructor(
    private auth: AngularFireAuth,
    private servicioFireStore: AngularFirestore
  ) { }

  //funcion para tomar UID
  async obtenerUid() {
    //Genera una promesa, y la constante la va a capturar
    const user = await this.auth.currentUser;
    //si el usuario no respeta la estructura de la interfaz,
    //Si tuvo problemas para el registro- ej: mal internet
    if (user == null) {
      return null;
    }
    else {
      return user.uid
    }

  }
  //funcion para obtener ID

  //funcion que busca un usuario en la coleccionde 'usuarios' cuyo correo electronico coincida con el valor proporcionado
  async obtenerUsuario(email: string) {
    
    return this.servicioFireStore.collection("usuarios", ref => ref.where("email", '==', email)).get().toPromise()

  }

  // FUNCIÓN PARA RECUPERAR ROL DE USUARIO
  obtenerRol(uid: string): Observable <string | null> {
    /*
      Retornamos del servicio de Firestore la colección de usuarios, buscando por UID
      Observamos cambios en valores, mapeamos al documento de 'usuario' e identificamos
      el atributo de rol (aún si este es nulo)
    */
    return this.servicioFireStore.collection('usuarios').doc(uid).valueChanges()
    .pipe(map((usuario: any) => usuario ? usuario.rol : null));
  }
  // Obtiene el rol de la primera función y lo asigna a la propiedad privada local
  enviarRolUsuario(rol: string){
    this.rolUsuario = rol;
  }
  // Obtiene el rol y lo retorna (ya sean alfanumericos o nulos)
  obtenerRolUsuario(): string | null {
    return this.rolUsuario;
  }

  //Funcion para registro
  registrar(email: string, password: string) {


    //retoma nueva info de email y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password);

  }
  //Funcion para Inicio de sesion
  IniciarSesion(email: string, password: string) {
    //Validar el email y contraseña
    return this.auth.signInWithEmailAndPassword(email, password);


  }
  // Función para CERRAR SESIÓN
  cerrarSesion() {
    // Devolver una promesa vacía
    return this.auth.signOut();
  }
}
