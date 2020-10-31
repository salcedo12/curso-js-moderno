const hola = 'yeah perdonen'

console.log(hola);

//reemplaza la palabra que queremos
console.log(hola.replace('perdonen', '"'));

//slice para cortar
console.log(hola.slice(2, 7));
console.log(hola.slice(6));

//alternativa mas inteligente a slice
console.log(hola.substring(5,8))

const name = 'Daniel';
console.log(name.substring(0,1));
console.log(name.charAt(0));