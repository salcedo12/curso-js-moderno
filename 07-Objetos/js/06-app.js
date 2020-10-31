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


const {nombre} = producto; 

const {informacion, informacion: {fabricacion, fabricacion: {pais} }  } = producto;


console.log(informacion);
console.log(fabricacion);
console.log(pais);