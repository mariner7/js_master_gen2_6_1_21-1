// Fetch

// Verbos
// GET -> traer informacion
// POST -> crear informacion / traer información
// PUT -> actualizar información
// DELETE -> borrar información


// fetch('url', {method: 'GET'}).then()

function llamarFetch(){
    var url = 'https://600f446a6c21e1001704e970.mockapi.io/clase6';
    fetch(url, { method: 'GET' })
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(respuesta){
            console.log('segundo then: ',respuesta)
        });
}

async function llamarFetchAsync(){
    var url = 'https://600f446a6c21e1001704e970.mockapi.io/clase6';
    var respuesta = await fetch(url, { method: 'GET' });
    var respuestaParseada = await respuesta.json();
    console.log(respuestaParseada);
}

function api1(){
    var url = 'https://600f446a6c21e1001704e970.mockapi.io/clase6';
    return fetch(url);
}
function api2(){
    var url = 'https://600f446a6c21e1001704e970.mockapi.io/clase6_2';
    return fetch(url);
}
function api3(){
    var url = 'https://600f446a6c21e1001704e970.mockapi.io/clase6_3';
    return fetch(url);
}

function parseIntoJson(respuesta){
    return respuesta.json();
}

// Promise.all

async function callApis(){
    var [
        respuesta1,
        respuesta2,
        respuesta3,
    ] = await Promise.all([api1(), api2(), api3()]);

    var [
        respuestaParseada1,
        respuestaParseada2,
        respuestaParseada3,
    ] = await Promise.all([
        parseIntoJson(respuesta1),
        parseIntoJson(respuesta2),
        parseIntoJson(respuesta3),
    ]);

    console.log({ respuestaParseada1, respuestaParseada2, respuestaParseada3 })
}

// Promise.race()

async function callRace(){
    var primeroEnResponder = await Promise.race([
        api1(),
        api2(),
        api3(),
    ])

    console.log(primeroEnResponder.url)
}

// Promise.resolve()

async function resolver(){
    var respuesta = await Promise.resolve('hola');

    console.log(respuesta)
}