import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {

  EnviarFormulario() {
    // Aquí debería ir el código para enviar el formulario
    console.log('Formulario enviado correctamente');

    // Mostramos el SweetAlert con el mensaje de agradecimiento
    Swal.fire({
      width: '600px',  // Ajusta el ancho del popup
      background: 'linear-gradient(135deg, #8FBC8F, #F5F5DC)',  // Fondo con gradiente suave
      color: '#2F4F4F',  // Color del texto
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
      title: "¡Gracias por tu mensaje!",  // Título de agradecimiento
      text: "Hemos recibido tu mensaje y será atendido lo antes posible. ¡Nos encanta saber de ti!",  // Texto de confirmación
      html: `
        <div class="custom-logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
    <!-- Solo las líneas blancas de las montañas -->

    <!-- Línea blanca para la montaña izquierda -->
    <path d="
        M100,180 
        L170,110 
        L200,140" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca izquierda -->
    
    <!-- Línea blanca para la montaña derecha -->
    <path d="M180,165 L230,110 L270,150" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca derecha -->
    <path d="M250,165 L270,145" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca inferior -->

    <!-- Línea blanca abajo de las montañas -->
    <path d="M100,180 L300,180" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca inferior -->
</svg>


        </div>
        <p style="font-size: 1.1rem; text-align: center; line-height: 1.6;">
          ¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente y nuestro equipo lo revisará en breve. 
          Si tienes alguna otra pregunta o inquietud, no dudes en ponerte en contacto con nosotros nuevamente. 
          Te responderemos lo más pronto posible.
        </p>
        <div style="text-align: center; margin-top: 20px;">
          <strong>¡Te deseamos grandes aventuras al aire libre!</strong>
        </div>
      `,  // Añadimos más información y detalles dentro del modal
      confirmButtonText: 'Cerrar',  // Botón de confirmación
      confirmButtonColor: '#8FBC8F',  // Color del botón
      customClass: {
        popup: 'custom-popup',  // Clase para aplicar el estilo personalizado
        image: 'custom-logo',  // Clase para el logo
        title: 'custom-title',  // Clase para el título
      },
      footer: '<a href="https://www.rutasnomadas.com">Visita nuestro sitio para más aventuras</a>',  // Pie de página con enlace
    });
  }
}
