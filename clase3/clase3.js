var variableExterna = 'externa';

function llamarFunction(){
    var variableInterna = 'interna';
    
}

// Window

// window.closed
// window.history
// window.innerHeight
// window.innerHeight
// window.innerWidth
// window.outerWidth
// // métodos window
// window.alert()
// window.prompt()

// Location

// location.href -> url completa
// location.protocol -> protocolo http o https
// location.hostname -> dominio
// location.seach -> variables después del ?

// métodos location

// location.reload() -> recargar la página
// location.toString() -> la url en string
// location.assign() -> cambiar de página

// Document

// document.getElementById('elementoUnico')
// document.getElementsByClassName('elementoBase')

// document.querySelector('.elementoBase')
// document.querySelectorAll('.elementoBase')

function definirContador(){
    var contador = 0;
    return function(){
        return contador++;
    }
}

var elementos = document.querySelectorAll('.elementoBase')

var contador = definirContador();

var llamarContador = function(){
    console.log(contador())
}

function agregarListeners(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].addEventListener(
            'click',
            llamarContador,
            true
        );
    }
    console.log('Listeners Agregados')
}

function eliminarListeners(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].removeEventListener(
            'click',
            llamarContador,
            true
        )
    }
    console.log('Listeners Eliminados')
}


// Local Storage (tiene persistencia)

function guardarVariable(valor){
    localStorage.setItem(valor, valor)
}

function leerVariableGuardada(key){
    var localStorageValue = localStorage.getItem(key);
    console.log(localStorageValue)
}

function eliminarVariableGuardada(key){
    localStorage.removeItem(key)
}

function limpiarTodoLocalStorage(){
    localStorage.clear()
}

// Session Storage (solo vive hasta que la página se cierra)

function guardarVariableSession(valor){
    sessionStorage.setItem(valor, valor)
}

function leerVariableGuardadaSession(key){
    var sessionStorageValue = sessionStorage.getItem(key);
    console.log(sessionStorageValue)
}

function eliminarVariableGuardadaSession(key){
    sessionStorage.removeItem(key)
}

function limpiarTodoSessionStorage(){
    sessionStorage.clear()
}