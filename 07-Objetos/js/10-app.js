const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:true,

}

const medidas = {
    peso:'1kg',
    medida:'1m'
}

console.log(producto);
console.log(medidas);

//primera forma de unir objectos
const resultado = Object.assign(producto, medidas);



// otra forma se llama spread operator  o rest operator
const resultado2 = {...producto, ...medidas}


console.log(resultado);
console.log(resultado2);