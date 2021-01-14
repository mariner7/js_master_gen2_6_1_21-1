function obtenerNombre(primerNombre, apellido){
    return primerNombre + ' ' + apellido;
}

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.obtenerNombreCompleto = function(){
    return this.nombre + ' ' + this.apellido;
}

var persona1 = new Persona('Julio', 'Orellana', 32);

// Iteraciones

// FOR

for(var inicial = 0; inicial <= 10; inicial++){
    console.log('incremental', inicial)
}

for(var inicial = 10; inicial >= 0; inicial--){
    console.log('decremental', inicial)
}

// While

// && condicional and
// || condicional or

var inicial = 0;
while(inicial < 10){
    console.log('while incremental ', inicial);
    inicial++;
}

inicial = 0;
do {
    console.log('do while incremental ', inicial)
    inicial++;
}while(inicial < 10);