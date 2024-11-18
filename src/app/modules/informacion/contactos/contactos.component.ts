import { Component, HostListener } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  nombre: string = ''; // Nombre del usuario
      email: string = '';  // Email del usuario
      tema: string = '';   // Tema del mensaje
      texto: string = '';  // Contenido del mensaje
    

      gridCols = 2;

      @HostListener('window:resize', ['$event'])
      onResize(event: Event) {
        this.updateGridCols();
      }
    
      ngOnInit() {
        this.updateGridCols();
      }
    
      updateGridCols() {
        const width = window.innerWidth;
        if (width <= 768) {
          this.gridCols = 1; // Una columna para pantallas pequeñas
        } else {
          this.gridCols = 2; // Dos columnas para pantallas grandes
        }
      }
    
      getGridCols(): number {
        return this.gridCols;
      }

  EnviarFormulario() {
    // Aquí debería ir el código para enviar el formulario
    console.log('Formulario enviado correctamente');
  
    
     
        // Validar si todos los campos están completados
        if (this.nombre.trim() === '' || this.email.trim() === '' || this.tema.trim() === '' || this.texto.trim() === '') {
          Swal.fire({
            icon: 'error',  // Ícono de error
            title: 'Oops...',
            text: 'Todos los campos son obligatorios. Por favor, complétalos.',
            background: '#FDEDEC',  // Fondo en tono de error
            color: '#C0392B',       // Texto en rojo
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#C0392B',
          });
        } else {
          // Si todos los campos están completos, muestra el mensaje de éxito
          Swal.fire({
            width: '600px',  // Ajusta el ancho del popup
            background: 'linear-gradient(135deg, #2B3A42, #34495E)',  // Fondo con un gradiente de azul marino apagado
            color: '#F5F5DC',  // Texto en beige para contraste
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
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
            html: `
              <div class="custom-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
                  <!-- Logo o gráficos -->
<!-- Solo las líneas blancas de las montañas -->
<path d="M100,180 L170,110 L200,140" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca izquierda -->
<path d="M180,165 L230,110 L270,150" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca derecha -->
<path d="M250,165 L270,145" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca inferior -->
<path d="M97,180 L300,180" fill="none" stroke="#836c53" stroke-width="8"/> <!-- Línea blanca inferior -->
</svg>
                <p style="
                  font-size: 1.5rem; 
                  margin-top: 15px; 
                  color: #F5F5DC; 
                  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5); 
                  font-weight: bold;
                  letter-spacing: 1.5px;">
                  <em>Rutas Nómadas lo tendrá en cuenta</em>
                </p>
              </div>
              <p style="font-size: 1.1rem; text-align: center; line-height: 1.6; color: #F5F5DC;">
                ¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente y nuestro equipo lo revisará en breve. 
              </p>
            `,  
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#5F819D',
            footer: '<a href="https://www.rutasnomadas.com" style="color: #5F819D;">Visita nuestro sitio para más aventuras</a>',
          });
        }
      }
    }
    
    
  
  
