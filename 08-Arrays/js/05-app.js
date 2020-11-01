'use strict';


//imperativa 
const carrito =[];


const producto = {
    nombre:'Monitor 32 Pulgadas',
    precio: 400
}


const producto2 = {
    nombre:'Celular',
    precio: 800
}

//agregar un elemento al arreglo
carrito.push(producto2);
carrito.push(producto);


const producto3 = {
    nombre:'Teclado',
    precio: 80
}

//agrega el elemento al inicio del arreglo y corre los demas elementos 
carrito.unshift(producto3);

console.table(carrito);