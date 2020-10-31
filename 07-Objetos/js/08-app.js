"use strict";

const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:true,

}

// metodo para congelar objectos y no puedas ser modificados
Object.freeze(producto);

//producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);


//Saber si el objecto esta congelado
console.log(Object.isFrozen(producto));