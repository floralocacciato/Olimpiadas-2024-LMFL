import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {

  EnviarFormulario() {

    // Aquí debería ir el código para enviar el formulario
    // Puede utilizar una librería como 'ng-bootstrap' o 'formly-bootstrap' para este propósito
    console.log('Formulario enviado correctamente');



    Swal.fire({
      width: '600px',  // Ajusta el ancho si es necesario
      background: '#f6f4f3',  // Color de fondo que combina con el color deseado
      color: '#ffffff',  // Opcional: color de texto para contraste (puedes ajustarlo)
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
          animate__backInDown
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      },
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "./../../../../../assets/logo.jpg",
      imageWidth: 500,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    
  }
}