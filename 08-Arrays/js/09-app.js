const carrito = [
    {nombre: 'Celular', precio:1000},
    {nombre: 'Televisor', precio:3000},
    {nombre: 'Tablet', precio:600},
    {nombre: 'Audifonos', precio:30},
    {nombre: 'Teclado', precio:40},
    {nombre: 'Mouse', precio:70},
]




for(let i=0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})