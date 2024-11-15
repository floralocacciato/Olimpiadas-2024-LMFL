import { Component } from '@angular/core';
import { ProductoService } from 'src/app/modules/favorito/producto.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 

  constructor(public productosServicio:ProductoService ) {}

  
  }

