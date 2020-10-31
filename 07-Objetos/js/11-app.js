const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:true,
    mostrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }

}
const producto2 = { 
    nombre: "tablet",
    precio: 600000,
    disponible:true,
    mostrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }

}


producto.mostrarInfo();
producto2.mostrarInfo();