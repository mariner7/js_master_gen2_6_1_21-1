
// Timers

// setTimeout(función callback, tiempo);

console.log('inicio')
setTimeout(function(){
    console.log('hola 1 segundos');
}, 2000)

// setInterval(function(){
//     console.log('Me ejecuto cada 1 segundo!', new Date());
// }, 1000)

// Tercer argumento
var variable1 = 200;
var variable2 = 'hola';

setTimeout(function(valor1, valor2){
    console.log(valor1, valor2);
}, 2000, variable1, variable2)

// Carrera

function quienPrimero(){

    // Macrotask (prioridad más baja)
    setTimeout(function(){
        console.log('timeout');
    }, 0);

    // Microtask (prioridad más alta)
    Promise.resolve(true).then(function(){
        console.log('promise');
    });

    /**
     * Resultado:
     *  promise
     *  timeout
     */
}

function promiseLoop(){
    Promise.resolve(0).then(function(){
        console.log('promise loop')
        promiseLoop();
    });
}

function timeoutLoop(){
    setTimeout(function(){
        console.log('timeout loop')
        timeoutLoop();
    }, 0);
}

function buscarAlgo(){
    console.log('cargando...');

    var promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('listo!')
        }, 5000);
    })

    promise.then(function(respuesta){
        console.log(respuesta);
    })
}


// Cancelar Timers

var timeout = setTimeout(function(){ console.log('hola')}, 10000);

clearTimeout(timeout);

var interval = setInterval(function(){ console.log('hola2')}, 2000);

clearInterval(interval);

var timeTimeout;
function startTime(){
    var today = new Date();
    var horas = today.getHours();
    var minutos = today.getMinutes();
    var segundos = today.getSeconds();
    minutos = agregarCero(minutos);
    segundos = agregarCero(segundos)
    document.getElementById('clock').innerHTML = horas + ":" + minutos + ":" + segundos
    timeTimeout = setTimeout(startTime, 500)
}

function stopTime(){
    clearTimeout(timeTimeout)
}

function agregarCero(valor){
    if(valor < 10){
        return '0' + valor;
    }
    return valor;
}

// Manejo de Excepciones

try{ 
    console.log(variableInexistente)
} catch(error) {
    // alert('Ha ocurrido un error!')
    console.log(error)
}

function a(){
    b();
}

function b(){
    c();
}

function c(){
    throwMyException('hola')
}


function throwMyException(variable){
    try{
        if(variable == 'hola'){
            throw 'fallé'
        }
    }catch(error){
        console.log(error)
    }
}



function aa(){
    throwMyCustomException();
}

function throwMyCustomException(){
    try{
        throw Error('fallé con Error')
    }catch(error){
        console.log(error)
    }
}

function exceptionType(variable){
    // TypeError
    // RangeError
    // ReferenceError

    try{
        // throw new Error('hola')
        // Number.toFixed()
        // new Array(invalidVariable) -> invalidVariable no existe
        // new Array(Math.pow(2,40)) -> el rango es invalido

        if(value == 1){
            Number.toFixed()
        }else if(value == 2){
            new Array(invalidVariable)
        }else if(value == 3){
            new Array(Math.pow(2,40))
        }else if(value == 4){
            throw new Error('custom error')
        }
    }catch(error){
        if(error instanceof TypeError){
            console.log('Type Error')
        }
        if(error instanceof ReferenceError){
            console.log('Reference Error')
        }
        if(error instanceof RangeError){
            console.log('Range Error')
        }

        console.log(typeof error)
    }
}

function usandoFinally(){
    try{
        throw new Error('fallé!')
    }catch(error){
        console.log(error)
    }finally{
        console.log('Fin loading!')
    }
}


async function callTryCatch(){
    var loading = document.getElementById('loading');
    loading.innerHTML = "Cargando..."

    function api1(){
        var url = 'https://600f446a6c21e1001704e90.mockapi.io/clase6';
        return fetch(url);
    }

    try{
        var respuesta = await api1(); 
        console.log('respuesta: ', respuesta);

    }catch(error){
        console.warn('warn: ', error)
    }finally{
        loading.innerHTML = 'Listo!'
    }
}

function testingError(){

    console.log("1");

    throw new Error('Fallé')

    console.log("2")
}