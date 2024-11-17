export interface Producto {
    idProducto: string;
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    imagen: string;
    alt: string;
    favoritos:boolean;
    stock: number
    carrito:boolean;
} 