// Comienzo del scope


function cuadrado(numero){
    return numero * numero;
}

function formatearNombre(nombre, apellido){
    return nombre + ' ' + apellido;
}

function perimetroCirculo(radio){
    return Math.PI * radio * 2;
}

function areaCirculo(area){
    return Math.floor(Math.PI * (area**2));
}

function numeroAleatorio() {
    return Math.random();
}

function llamadaVoid(){

}

function llamadaNoVoid(){
    return 'hola';
}

function fechaActual(){
    var fechaActual = new Date();
    var regex = RegExp('/', 'g')
    return fechaActual.toLocaleDateString().replace(regex,'-');
}

function fechaYHoraActual(){
    return new Date().toLocaleString();
}

var funcionDeclarativa = function() {
    metodo1()
    metodo2()
    return;
    metodo3() // son inalcanzables
    metodo4() // son inalcanzables
    metodo5() // son inalcanzables
}

// Función auto ejecutable
// (
// function(){
//     console.log('hola')
//     return false;
// }
// )()

// Curry Functions, Closures o Nested Functions (Funciones Anidadas)

function suma(a){
    return function(b){
        return a + b;
    };
}

function multiplica(a){ // a = 10
    return function(b){
        return a * b;
    };
}

function carroDeCompras() {
    var carroActual = [];

    function modificarCarro(item, accion){
        if(accion == "agregar"){
            carroActual.push(item)
        }
        if(accion == "sacar"){
            carroActual.pop()
        }
    }

    return {
        ver: carroActual,
        agregar: function(item) {
            modificarCarro(item, "agregar")
        },
        sacar: function(){
            modificarCarro(null, "sacar");
        }
    }
}

function contador(contadorInicial){
    return function (incremento){
        return contadorInicial = contadorInicial + incremento;
    }
}

function contadorAutomatico(contadorInicial){
    return function(){
        return ++contadorInicial;
    }
}


// No es closure

function metodo1(){
    function metodoInterno(){
        console.log('No es closure')
    }

    metodoInterno();
}

// Es closure

function metodo2(){
    function metodoInterno(){
        console.log('Es closure')
    }

    return metodoInterno;
}


// Hoisting

// Tipos de declaraciones

var declaracionDeVariable = false;
function declaracionDeFuncion() {}

function ejemploHoisting(){
    var a;
    var variableInterna;

    function ejemplo1(a){
        console.log('ejemplo1: ', a)
    }
    
    a = 2;

    ejemplo1();


    console.log('variableInterna: ', variableInterna)

    variableInterna = 0;
}

var x = 10;

function test(){
    var x;
    if(x > 20){
        x = 50;
    }

    console.log(x)
}

function Pokemon(nombre, tipo){
    this.nombre = nombre;
    this.tipo = tipo;
}

var pikachu = new Pokemon('Pikachu', 'electrico')

Pokemon.prototype.nombre = function(){
    return this.nombre;
}

// Condicionales

function condicional(a, b){
    if(a > b){
        console.log('a es mayor que b')
    }
    else if(a < b){
        console.log('a es menor que b')
    }else{
        console.log('a es igual que b')
    }
}

function estaConectado(){
    return Boolean('connected');
}

function evaluarNombre(nombre){
    return nombre ? nombre : 'Sin nombre'
}

function evaluarNombreSimplificado(nombre){
    return nombre && true
}

function sinSwitch(valor){
    if(valor == 0){
        console.log('Es 0');
    }
    else if(valor == 2){
        console.log('Es 2');
    }
    else if(valor == 3){
        console.log('Es 3');
    }
    else if(valor == 4){
        console.log('Es 4');
    }else {
        console.log('Es '+valor)
    }
}

function conSwitch(valor){
    switch(valor){
        case 0: console.log('Es 0'); return;
        case 1: console.log('Es 1');
        case 2: console.log('Es 2');
        case 3: console.log('Es 3'); break;
        case 4: console.log('Es 4'); break;
        default: console.log('Es '+valor);
    }
}