const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:false,
    informacion: {
        medidas:{
            peso: '1kg',
            medida:'1m'
        },
        fabricacion:{
            pais:'china'
        }
    }


}

console.log(producto.informacion.fabricacion.pais);