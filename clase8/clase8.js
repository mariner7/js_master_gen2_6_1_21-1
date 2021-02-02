// Funciones normales

function darSaludoNormal(parametro1, parametro2){
    // contexto es window
    return 'hola' + parametro1 + parametro2;
}

const miFuncion = function(){
    return "soy anonima"
}

const miFuncionFlecha = () => {} // definición

const darSaludoFlecha = (parametro1, parametro2) => {
    const saludar = `hola ${parametro1}, ${parametro2}`
    return saludar;
}

const darSaludoFlechaResumido = (parametro1, parametro2) => 
    `hola ${parametro1}, ${parametro2}`
        .toUpperCase()

const decirEdad = (edad) => `Tu edad es ${edad}`

const esMayor = (valor1, valor2) => valor1 > valor2
const esMayorTernario = (valor1, valor2) => valor1 > valor2 ? 'Si' : 'No'

const obj = {
    var1: {
        var2: {
            var3: 3
        }
    }
}

// Optional Chaining Operator
const accederAVar3 = (obj) => obj?.var1?.var2?.var3

const accederAVar3Desestructuracion = ({ 
    var1: { 
        var2: { 
            var3
        }
    }
}) => var3

accederAVar3Desestructuracion(obj)

const cuadrado = lado => lado * lado

// No funciona el return directo con un switch case
const switchCase = (valor) => {
    switch(valor){
        case 1: return 'El valor es 1';
        case 2: return 'El valor es 2';
        default: return `El valor es ${valor}`;
    }
}

// THIS implicito

var nombre = 'Chrome'
var apellido = 'Window'


// Contexto de window

const persona = {
    nombre: 'Julio',
    apellido: 'Orellana',
    lista: ['perros', 'gatos', 'canarios'],
    nombreCompleto: function(){
        console.log('Nombre Completo: ', this.nombre, this.apellido)
        return function(){
            // Pierde el contexto
            console.log(`${this.nombre} ${this.apellido}`)
        }
    },
    nombreCompletoBind: function(){
        return function(){
            console.log(`${this.nombre} ${this.apellido}`)
        }.bind(this)
    },
    nombreCompletoSelf: function(){
        const self = this;
        // Contexto actual: persona
        return function(){
            // Contexto actual: window
            console.log(`${self.nombre} ${self.apellido}`)
        }
    },
    nombreCompletoFlecha: function(){
        // Contexto actual: persona
        return () => console.log(`${this.nombre} ${this.apellido}`)
    },
    llamarNombre: function() {
        console.log(this)
        return this.nombre
    },
    dameElPerro: function(){
        // contexto persona
        this.lista.forEach((elementoDeLaLista) => {
            if(this.lista.includes('perros')){
                console.log(elementoDeLaLista);
            }
        })
    }
}

const funcionVacia = () => {}

function llamarLista(nombre, edad, callback = () => {}) {
    callback();

    return `${nombre} ${edad}`
}

// Métodos de Array

const proteina = ["hamburguesa vacuno", "hamburguesa cerdo", "hamburguesa pollo", "hamburguesa lentejas", "not burger", "hamburguesa quinoa", "hamburguesa meatless", "mechada", "pollo", "churrasco"]

const sauce = ["mayonesa", "ketchup", "mostaza", "bbq", "salsa ajo", "salsa verde", "aji pebre", "not mayo"]

const ingredients = ["lechuga", "tomate", "cebolla", "cebolla caramelizada", "palta", "tocino", "champiñones", "porotos verdes", "huevo", "queso cheddar", "pepinillos", "ají amarillo", "ají verde"]

const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]


// FILTER .filter(), filtra el arreglo segun el condicional

const lista = ["1", "2" , 2, false];

lista.filter(item => item === "1");
lista.filter(item => item === "2");
lista.filter(item => typeof item === 'string');
lista.filter(item => item == 2);

const hijos = {
    hijo1: 'juan',
    hijo2: 'juanita',
    hijo3: 'andres'
}

Object.values(hijos).filter(hijo => hijo.startsWith('juan'))

// Trabajando con sandwichOrders.js

const filtrarOrdenes = () => {
    console.time('Inicio Filtro de Ordenes')

    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.bread === 'bagette'
    )

    console.timeEnd('Inicio Filtro de Ordenes')

    console.log(resultado)
}

const filterOrdersByBread = (bread) => sandwichOrders.filter(
    sandwichOrder => sandwichOrder.bread === bread
)

const filterOrdersByType = ({ type = '', filter = ''}) => sandwichOrders.filter(sandwichOrder => sandwichOrder[type] === filter)

const bagette = filterOrdersByType({ type: 'bread', filter: 'bagette'}).length;
const brioche = filterOrdersByType({ type: 'bread', filter: 'brioche'}).length;
const pita = filterOrdersByType({ type: 'bread', filter: 'pita'}).length;
const marraqueta = filterOrdersByType({ type: 'bread', filter: 'marraqueta'}).length;
const hallulla = filterOrdersByType({ type: 'bread', filter: 'hallulla'}).length;


// Enhanced objects literals
const nuevaOrden = {
    bagette,
    brioche,
}

console.table({ bagette, brioche, pita, marraqueta, hallulla })

// MAP .map() retorna un arreglo del mismo largo del arreglo original
                                                    // (elementoActual, indice, arregloCompleto)
const getSandwichOrdersIds = () => sandwichOrders.map(sandwichOrder => sandwichOrder.id)
const getSandwichOrdersDates = () => sandwichOrders.map(sandwichOrder => sandwichOrder.ordered)

// el forEach no retorna nada
const getSandwichOrdersForEach = () => sandwichOrders.forEach(sandwichOrder => sandwichOrder.ordered)

// REDUCE .reduce() return información reducida

const numbers = [1,2,3,4,5]

const sumNumberCallback = (acumulativo, elementoActual) => acumulativo + elementoActual
const sumNumbers = () => numbers.reduce(sumNumberCallback, 0)

// ordenar ordenes por día

/**
 * {
 *   "13-10-2020": [
 *      {orden1},
 *      {orden2},
 *   ],
 *   "14-10-2020": [
 *      {orden3},
 *   ],
 *   ...
 * }
 */

const ordersByDate = (dates, currentItem) => {
    const copyDates = {...dates};
    const { ordered } = currentItem;
    const { [ordered]: currentDateList = [] } = dates;
    dates[ordered] = [...currentDateList, currentItem]
    return dates;
}

const orderSandwichOrdersByDate = () => sandwichOrders.reduce(
    ordersByDate, {}
)

// FIND .find()

const findOrderOfBreads = (id) => {
    const result = filterOrdersByType({ type: 'bread', filter: 'bagette'})
                    .find(sandwichOrder => sandwichOrder.id === id)

    if(result){
        return 'Encontrado!'
    }

    return 'No Encontrado'

}

// EVERY .every() evalúa que todos los elementos cumplan con la condición

sandwichOrders.every(sandwichOrder => sandwichOrder.ordered) // true

// SOME .some() evalúa que algunos de los elementos cumplan con la condición

sandwichOrders.some(sandwichOrder => sandwichOrder.ordered)



// REPASO DESESTRUCTURACIÓN

const persona1 = {
    nombre: 'julio',
    gustos: ['juegos ps4', 'ver netflix', 'comer'],
    trabajo: {
        cargo: 'desarrollador',
        locacion: {
            ciudad: undefined,
            tipoEmpresa: ['grande', 'moderna'],
        }
    }
}

// Optional chaining operator
const ciudad = persona1?.trabajo?.locacion?.ciudad;
const { 
    gustos: [primerElemento, ...resto],
    trabajo: {
        locacion: {
            ciudad: miCiudad = 'No hay ciudad Definida',
            tipoEmpresa: [_, tipoEmpresa2]
        }
    },
} = persona1;

