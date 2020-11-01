const producto = { 
    nombre: "Monitor 20 Pulgadas",
    precio: 400000,
    disponible:false,

}

//destructuring
const {nombre, precio, disponible} = producto;


//destructuring en arreglos

const numero = [10,20,30,40,50];

const [, , ,tercero] = numero;


console.log(tercero);

const [primero, ...segundo] = numero;

console.log(segundo);