const wiiii = "                             No                            ";

console.log(wiiii);
console.log(wiiii.length);

//borrar vacios al principio
console.log(wiiii.trimStart());

//borrar vacios al final
console.log(wiiii.trimEnd());

//para ambos lados a la vez se pueden colocar metodos en cadena
console.log(wiiii.trimStart().trimEnd());

//o el metodo antiguo
console.log(wiiii.trim());