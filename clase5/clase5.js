function bloqueador(){
    console.log('inicio');
    var i = 0;
    var start = new Date();
    while(i < 2500000000){ i++}
    var end = new Date();
    console.log('fin sincronía ', end - start, ' ms');
}

var promise = new Promise(function(resolve, reject){
    resolve({ codigo: 200 })
});

// promise.then(function(resultado){
//     console.log('then 1: ',resultado)
//     return 30
// }).then(function(resultado){
//     console.log('then 2:', resultado)
// })

// promise.catch(function(error){
//     console.log('error: ', error)
// })

console.log('1ra ejecución');
new Promise(function(resolve){
    resolve();
}).then(function(){
    console.log('2da ejecución')
})
console.log('3ra ejecución')

// Error común

function llamarPromesa(){
    var resultado;

    var promise = new Promise(function(reject){
        reject('promesa_resuelta')
    })

    promise.then(function(respuestaPromesa){
        resultado = respuestaPromesa
        console.log('respuestaPromesa: ', respuestaPromesa)
    });
    
    console.log(resultado);
}

// Async Await

async function llamarPromesaAsync(){
    var resultado;
    var promise = new Promise(function (resolve){
        resolve(40)
    })

    resultado = await promise;
    
    console.log(resultado);
}

// FETCH

// GET/POST/PUT/DELETE

function probarFetch(){
    fetch('https://5f79f3e1e402340016f935ed.mockapi.io/js_return_1', { method: 'GET' })
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(data){
            console.log(data)
        })
}

async function probarFetchAsync(){
    var respuesta = await fetch('https://5f79f3e1e402340016f935ed.mockapi.io/js_return_1', { method: 'GET' })
    var resultado = await respuesta.json();
    console.log(resultado)
}