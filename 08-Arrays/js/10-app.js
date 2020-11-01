const carrito = [
    {nombre: 'Celular', precio:1000},
    {nombre: 'Televisor', precio:3000},
    {nombre: 'Tablet', precio:600},
    {nombre: 'Audifonos', precio:30},
    {nombre: 'Teclado', precio:40},
    {nombre: 'Mouse', precio:70},
]


//Es para crear un nuevo arreglo 
const nuevoArreglo = carrito.map( function(producto) {
    return`${producto.nombre} - precio: ${producto.precio}`;
})


carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})

console.log(nuevoArreglo);