var objeto = {
    propiedad1: 'propiedad1',
    propiedad1: false,
    propiedad2: 30,
    propiedad3: function(){
        console.log('propiedad que retorna una funcion')
    }
}

var arreglo = [1,1,1,2,false,2,'hola',3,null, undefined, {}]

// Problema de referencia:

var variable1 = 'a'
var variable2 = variable1;

variable2 = 'b'
variable1 // es 'a'

// referencia en objetos

var variable1 = { a: 1 }; // 0xaaBB
var variable2 = variable1; // 0xaaBB

variable2.a = 2;

// SET

var arreglo = [1,1,2,2,2,3,3,'hola', 'hola', false, false, 1,1]

var miSet = new Set(arreglo) // volvemos los elementos únicos del arreglo
var nuevoArreglo = Array.from(miSet);

var objeto1 = { a: 1 }
var objeto2 = { a: 2 }

var arreglo2 = [1,1,2,2, objeto1, objeto2, objeto1]
var miSet2 = new Set(arreglo2) // volvemos los elementos únicos del arreglo
var nuevoArreglo2 = Array.from(miSet2);


// SCOPE

this // hace referencia al global object

function foo(){
    console.log(this)
}

var objeto = {
    propiedad1: 'hola',
    foo: function(){
        console.log(this)
    }
}

var nombre = 'Chrome';
var apellido = 'Window';

var persona = {
    nombre: 'Julio',
    apellido: 'Orellana',
    nombreCompleto: function(){
        return function(){
            return this.nombre + ' ' + this.apellido;
        }
    },
    nombreCompletoSolucion1: function(){
        var self = this;
        this // -> hace referencia contexto persona
        return function(){
            this // -> hace referencia global objeto
            return self.nombre + ' ' + self.apellido;
        }
    },
    nombreCompletoSolucion2: function(){
        function nombreCompleto(){
            return this.nombre + ' ' + this.apellido;
        }
        return nombreCompleto.bind(this);
    }
}

var imprimirNombreCompleto = persona.nombreCompleto();
var imprimirNombreCompleto1 = persona.nombreCompletoSolucion1();
var imprimirNombreCompleto2 = persona.nombreCompletoSolucion2();

// .bind() para entregar un contexto a una función

var persona = {
    nombre: 'Julio',
    apellido: 'Orellana',
}

var funcion1 = function(){
    return this.nombre + ' ' + this.apellido;
}

var nuevaFuncionBind = funcion1.bind(persona); // entrega referencia

// .call

var funcion2 = function(variable1, variable2){
    console.log('variables: ', variable1, variable2);
    return this.nombre + ' ' + this.apellido;
}

// funcion2.call(persona, 1, 2) // context y variables separadas por coma

// .apply

var funcion3 = function(variable1, variable2){
    console.log('variables: ', variable1, variable2);
    return this.nombre + ' ' + this.apellido;
}

// funcion3.apply(persona, [false, 'hola'])