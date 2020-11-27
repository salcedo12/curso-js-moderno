inciarApp();


function inciarApp(){
    console.log('Iniciando app..');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAtenticado('pablo');
}

function usuarioAtenticado(usuario){
    console.log('Atenticando usuario... espere..');
    console.log(`Usuario autenticado exitosamente. ${usuario} `);
}