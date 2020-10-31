const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:false,

}



producto.disponible = true;

delete producto.precio;
console.log(producto);