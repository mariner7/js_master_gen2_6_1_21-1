// ES6

// Programación funcional

// -> función pura - ayuda al memoize

/**
 * @function multiplicar
 * @param {*} a primer valor a multiplicar
 * @param {*} b segundo valor a multiplicar
 * @return el resultado
 */
function multiplicar(a,b){
    if(a > 5){
        return a * b;
    }

    return 0;
}


// -> función impura

function saludo(nombre){
    var saludo = "Hola "+ nombre + " hoy es " + new Date().toISOString();
    return saludo;
}

function llamarConsole(){
    console.log('hola');
}

// Encuesta

var height = 50;

function calcularAltoImpura(valorAltoBase){
    return valorAltoBase * height;
}

function calcularAltoPura(valorAltoBase, height){
    return valorAltoBase * height;
}

// Mutabilidad

var persona = {
    nombre: 'Link',
    edad: 15,
}

function sumarEdadEn1(persona){
    persona.edad = persona.edad + 1;
    console.log(persona)
}

function nuevaPersona(persona){
    var nuevaPersona = {
        nombre: persona.nombre,
        edad: persona.edad + 1,
    };

    return nuevaPersona;
}

var arreglo = [1,2,3,4,'hola']

function nuevoArreglo(arreglo){
    var nuevoArreglo = arreglo.slice(2);
    return nuevoArreglo;
}

/**
 * 
 *  LET y CONST
 * 
 */

 function tryVar(){
     const x = 5;

     if(x == 5){
        const x = 10;
     }

     console.log(x)
 }
 
 let nombreLet = 'Link';

 const objetoConst = {};  // con const no se puede cambiar la definición, pero si mutar lo interno
 const arregloConst = []; // con const no se puede cambiar la definición, pero si mutar lo interno
 const miFuncion = function(){}

 // triple ===

 1 == 1 // true
 1..toString() == '1' // true
 // [,,] == "," -> true porque [,,].toString() -> ","

 1 === '1' // false (correcto)
 // [,,] === "," -> false (correcto)

 /**
  * 
  * Parámetros por default y String Literales
  * 
  */

//  const nombre = 'Julio Orellana'
//  const profesion = 'Desarrollador'
//  const edad = 31
//  const gustos = ['Guild Wars 2', 'Legend of Zelda']

 const armarFicha = function(
     nombre,
     profesion = '(Sin Profesion)',
     edad = '(Sin Edad)',
     gustos = '(Sin Gustos)', // parámetros por default
     metodo = function(){},
    ){

    metodo();

    return ` 
        Nombre: ${nombre},
        Profesión: ${profesion},
        Edad: ${edad},
        gustos: ${gustos}
    `; // String literales
 }

 /**
  * 
  * Spread Operator (...)
  * 
  */

const texto = "texto";
const textoArreglo = [...texto] // genera un arreglo con ['t','e',..etc]
const textoObjeto = {...texto} // genera un objeto con {0: 't', 1: 'e', ..etc}


// Spread en Objetos

const propiedades = { a: 'a', c: '5' }
const masPropiedades = { b: 'b', c: 'c' }

const nuevaPropiedad = { 
    ...propiedades,
    d: 'd',
    c: '10',
} // {a: "a", c: "10", d: "d"}

// Spread en Arreglos


const misMascotas = ['conejos', 'gatos', 'peces']
const masMascotas = ['perros', 'canarios', 'peces']

const nuevoArregloSpread = [...masMascotas, 'osos', ...misMascotas]

const funcionSpread = function(a,b,...restoDeVariables){
    console.log(a,b, restoDeVariables)
}

/**
 * 
 * Desestructuracion -> desestructuring
 * 
*/

// Desestructuración objeto y Desestructuración de arreglos

const desarrollador = {
    nombre: 'Julio Orellana',
    profesion: {
        titulo: 'Ingeniería en Informática',
        cargo: 'Desarrollador',
    },
    edad: 32,
    gustos: ['Guild Wars 2', 'Legends of Zelda', 'Genshin Impact'],
}


const {
    nombre,
    profesion: {
        titulo,
        cargo = '(Sin cargo)',
    },
    gustos: [primerElemento, ...resto],
    ...restoDeObjetos
} = desarrollador;

console.log(nombre, cargo)

const mascota1 = {
    nombreMascota: 'Charlotte',
    edad: 1
}

const mascota2 = {
    nombreMascota: 'Luna',
    edad: 1
}

const { nombreMascota: nombreMascota1 } = mascota1;
const { nombreMascota: nombreMascota2 } = mascota2;

const funcionDesestructurada = function(
    { nombreMascota, edad },
    { nombreMascota: nombreMascota2, edad: edad2 },
    ...restoDeObjetos){
    console.log(nombreMascota, edad)
    console.log(nombreMascota2, edad2)
    console.log(restoDeObjetos)
}

// funcionDesestructurada(mascota1, mascota2, mascota1)

function drawResult({ id, name, picture, hobbies}){
    const getTime = new Date().getTime();
    document.getElementById('box').innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center">
            <div>${id}</div>
            <div>${name}</div>
            <image src="${picture}?${getTime}"/>
            <div>
                Hobbies: ${hobbies}
            </div>
        </div>
    `
}

async function callApi(id){ // es pura o impura?
    const response = await fetch(`https://escalab-6b3e3.firebaseio.com/javascript/${id}.json`);
    const parsedResponse = await response.json();
    console.log(parsedResponse)
    drawResult(parsedResponse)
}