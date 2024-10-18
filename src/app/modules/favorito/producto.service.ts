import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
ProductosFavoritos: any;
  
 
  constructor() { }

  productos: any[] = [


    {
      nombre: "Risport Ambra Elite + Roll Line Evo ",
      descripcion: "Bota Risport Ambra Elite, Indice de Rigidez 60, Plancha Roll Line Evo",
      img: "../../assets/img/libre-ambraelite-evo.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      precio: 784.00,
      id: 1,
    },

    {
      nombre: "Risport Mercurio + Roll Line Evo",
      descripcion: "Bota Risport Mercurio, Indice de Rigidez 65, Plancha Roll Line Evo ",
      img: "../../assets/img/libre-mercurio-evo.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      precio: 854.00,
      id: 2,
    },
   ]

}
