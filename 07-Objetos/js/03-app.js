const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:false,

}

//agregar algo al objeto

producto.imagen = 'imagen.jpg';

//eliminar producto

delete producto.disponible;
console.log(producto);