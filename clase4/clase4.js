var texto = 'soy un texto';
// console.log(texto.__proto__) // hereda desde String

String
Number
Boolean
null
undefined

// Objetos

function anosEnElFuturo(){
    return this.edad + 2;
}

var persona = {
    edad: 18,
    tieneHijos: undefined,
    apodos: ['Zelda', 'Enlance'],
    cambiarNombre: function(nuevoNombre, edad){
        this.nombre = nuevoNombre;
        // this scope corresponde a persona
    },
    anosEnElFuturo: anosEnElFuturo,
    primerHijo: function(){
        var primerHijo = {
            nombre: 'Goron',
            dameElNombre: function(){
                console.log(this.nombre)
            }
        }
        console.log(primerHijo.dameElNombre())
        // El scope corresponde a primerHijo
    },
    leerThis: function(){
        console.log(this)
    }
}
persona.nombre = 'Link'

// Formas de acceder #1
// console.log('persona.nombre: ',persona.nombre)

// Forma de acceder #2
// console.log("persona['nombre']: ", persona['nombre'])

// Forma de acceder #3
var valorPropiedad = 'nombre';
// console.log('persona[valorPropiedad]: ', persona[valorPropiedad])

// Herencia de objetos en JS

Object.prototype.bar = 1
Object.prototype.bar // 1

var nuevoObjeto = { };
nuevoObjeto.hasOwnProperty('bar') // false -> porque bar viene desde Object y no pertenece a nuevoObjeto

Object.keys(persona) // devuelve un arreglo con las llaves del objeto persona
Object.values(persona) // devuelve un arreglo con los valores del objeto persona
Object.entries(persona) // devuelve un arreglo de arreglos que contienen [llave, valor]

var objeto1 = {
    bar: 1,
    objeto2: {
        bar: 2,
        objeto3: {
            bar: 3
        }
    }
}

// Navegación a un arbol de objetos
objeto1.objeto2.objeto3.bar;

var personaCongelada = Object.freeze(persona);
personaCongelada.nombre = 'Malon'
personaCongelada.nombre // 'Link'
personaCongelada.cambiarNombre('Malon')
personaCongelada.nombre // 'Link'

// Pasar de un Object a un JSON

var personaStringificada = JSON.stringify(persona);
var personaDestringificada = JSON.parse(personaStringificada);

const safeAccess = (object, propertyTreeAsString, defaultValue = undefined) => {
    if (object === undefined || object === null) {
        return defaultValue;
    }
    if (propertyTreeAsString === undefined || propertyTreeAsString === null || propertyTreeAsString === '') {
        return object;
    }
    const propertyArr = propertyTreeAsString.split('.');
    let currProp = object;
    for (let i = 0; i < propertyArr.length; i++){
        const property = propertyArr[i];
        currProp = currProp[property];
        if (currProp === undefined || currProp === null) return defaultValue;
    }
    return currProp;
};

// Arreglos

var elemento3 = 3;
var conjunto = ['elemento1', 'elemento2', elemento3]

Array // prototipo Array o Arreglo
Array(4) // para crear un arreglo con 4 posiciones
Array(1, "2", 'b', -4)

var miFuncion = function(){ console.log('hola función')}
var array = [1, "2", 'b', -4, miFuncion]

var mascotas = ['Perros', 'Gatos', 'Canarios', 'Peces', 'Gatos']
//                  0       1          2          3        4

// llamadaMascota('Perros', 0, mascotas)
// llamadaMascota('Gatos', 1, mascotas)
// llamadaMascota('Canarios', 2, mascotas)
// llamadaMascota('Peces', 3, mascotas)

var contadorGatos = 0;

mascotas.forEach(function(mascota, ){
    // console.log('Mascota: ', mascota, 'es la posición -> ', indiceMascota, ', en el arreglo: ', arrayCompleto)
    if(mascota == 'Gatos'){
         contadorGatos++;
        //  console.log('Me gustan los ' + mascota);
    }else{
        // console.log('No me gustan los ' + mascota);
    }
})

// .push() para agregar cosas al arreglo

mascotas.push('Chinchillas') // 6 por el length del arreglo
mascotas.push({ bar: 1 })
mascotas.push(['hola','chao'])

// .pop() para eliminar el último elemento

mascotas.pop() // devuelve qué elemento fue eliminado del arreglo, eliminó el arreglo ['hola','chao']
mascotas.pop() // devuelve qué elemento fue eliminado del arreglo, eliminó el objeto { bar: 1 }

// .shift() para eliminar el primer elemento

//mascotas.shift() // eliminar el primer elemento y devuelve cuál fue eliminado

var mascotas = ['Perros', 'Gatos', 'Canarios', 'Peces', 'Gaston Gatuso']
//                  0       1          2          3        4

// Para borrar Canarios
// mascotas.splice(2, 1); // 2 es la posición, 1 es la cantidad de elementos a borrar

// Para agregar Chinchillas entre Canarios y Peces

mascotas.splice(3, 0, 'Chinchillas')

// .splice(-1) para eliminar de atrás hacia adelante