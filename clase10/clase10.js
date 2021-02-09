/**
 * Clases
 */

class PersonaInsegura {
    nombre = 'Sin nombre establecido'
    edad = 0

    constructor({ nombre = 'Sin Nombre', edad = 0 }){
        this.nombre = nombre;
        this.edad = edad;
    }

    obtenerNombre = () => this.nombre
    definirNombre = nuevoNombre => this.nombre = nuevoNombre

    getEdad = () => this.edad
    setEdad = nuevaEdad => this.edad = nuevaEdad
}

const Persona = (function(){
    const _nombre = new WeakMap(); // el _ se refiere a que no va a ser accesible
    const _edad = new WeakMap();

    class PersonaSegura {
        constructor({ nombre, edad }){
            _nombre.set(this, nombre);
            _edad.set(this, edad);
        }

        getNombre = () => _nombre.get(this)
        setNombre = nuevoNombre => _nombre.set(this, nuevoNombre)

        getEdad = () => _edad.get(this)
        setEdad = nuevaEdad => _edad.set(this, nuevaEdad)
    }

    return PersonaSegura;
}());

/**
 * Clases estáticas
 */

class Api {
    static baseUrl = 'https://escalab-6b3e3.firebaseio.com/pets.json'
    static fetchData = async () => {
        const response = await fetch(Api.baseUrl)
        const parsedResponse = await response.json();
        Api.listaMascota = parsedResponse
        return parsedResponse;
    }
    static listaMascota = []

    baseUrl = 'sin url'
}

class Utils {
    static nombreClase = 'Utils'
    static calcularCuadrado = numero => numero * numero
    static PI = Math.PI
    static perimetroRectangulo = ({ ladoA = 1, ladoB = 1 }) => ladoA * ladoB

    static decirHola = ({nombre, apellido}) => `Hola ${nombre} ${apellido}`
} 

Utils.perimetroRectangulo({ ladoB: 10, ladoA: 2 })
Utils.decirHola({ apellido: 'orellana', nombre: 'julio'})


/**
 * Herencia
 */

class Mamifero {
    esMamifero = false
    constructor(esMamifero){
        this.esMamifero = esMamifero
    }

    hola = () => console.log('Hola Mamifero')
}

class Animal extends Mamifero {
    edad = 0
    raza = ''
    especie = ''
    tipo = ''
    valor = null
    sonido = undefined

    constructor({
        edad,
        raza,
        especie,
        tipo,
        esMamifero,
        sonido,
    }){
        super(esMamifero)
        this.edad = edad
        this.raza = raza
        this.especie = especie
        this.tipo = tipo
        this.sonido = sonido
    }

    getEdad = () => this.edad
    setEdad = nuevaEdad => this.edad = nuevaEdad

    getRaza = () => this.raza
    setRaza = nuevaRaza => this.raza = nuevaRaza

    getEspecie = () => this.especie
    setEspecie = nuevaEspecie => this.especie = nuevaEspecie

    getTipo = () => this.tipo
    setTipo = nuevoTipo => this.tipo = nuevoTipo

    devolverValor = (valor1, valor2) => this.valor = (valor1 + valor2)

}

class Mascota extends Animal {
    nombre = ''
    constructor({ nombre, edad, raza, sonido, especie, tipo, esMamifero}){
        super({ edad, raza, especie, tipo, esMamifero, sonido})
        this.nombre = nombre
    }

    getNombre = () => this.nombre;
    setNombre = nuevoNombre => this.nombre = nuevoNombre
}

const mascota1 = new Mascota({
    nombre: 'Charlotte',
    edad: 1,
    raza: 'felina',
    especie: 'gatuna',
    tipo: 'blanco negro',
    esMamifero: true,
})

class ListaMascota {
    lista = []

    traerMascotas = async () => {
        const respuesta = await Api.fetchData();
        const mascotas = respuesta.map( data => {
            const esMamifero = data.tipo === 'mamifero';
            const mascota = new Mascota({
                nombre: data.nombre,
                edad: data.edad,
                especie: data.especie,
                raza: data.raza,
                tipo: data.tipo,
                esMamifero,
            })
            return mascota;
        })
        this.lista = mascotas;
    }
}