'use strict';

const carrito =[];


const producto = {
    nombre:'Monitor 32 Pulgadas',
    precio: 400
}


const producto2 = {
    nombre:'Celular',
    precio: 800
}
const producto4 = {
    nombre:'Celular 2',
    precio: 1100
}


carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);


const producto3 = {
    nombre:'Teclado',
    precio: 80
}

    carrito.unshift(producto3);
    console.table(carrito);

    //eliminar ultimo elemento del arreglo

    //carrito.pop();
    //console.table(carrito);

    //eliminar primer elemento del arrelgo
    //carrito.shift();
    //console.table(carrito);

    //forma para borrar un elemento especifico
    carrito.splice(2,1)
    console.table(carrito);