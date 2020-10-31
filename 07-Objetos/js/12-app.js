
// object literal
const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:true,
   

}

//object constructor

function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 ', 433);
console.log(producto2);