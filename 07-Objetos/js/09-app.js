"use strict";

const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:true,

}

// metodo para congelar objectos y no pueda agregar propiedades al objecto pero si puedes modificarla
Object.seal(producto);

producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);


console.log(Object.isSealed(producto));