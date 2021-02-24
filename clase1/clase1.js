var variable_string = "soy un texto"
var variable_number = -1 // number
var variable_float = 0.3 // number
var variable_boolean = false
var variable_null = null
var variable_undefined = undefined


// Lo que hace el Engine
// var variable_string = "soy un texto"

/** Internamente Javascript lo que hace es llamar
** a un prototipo de tipo en base a la asignación
** new String para textos
** new Number para números
** new Boolean para booleanos
** undefined y null no son prototipos
**/

}
// var variable_string = new String("soy un texto")
// var variable_number = new Number(-1)
// var variable_boolean = new Bool(false)
//var variable_null = new Null() ERROR
//var variable_undefined = new Undefined() ERROR


// Prototipos JS

// Number

var numero = 1
numero.toFixed(0) // 1
numero.toFixed(1) // 1.0
numero.toString() // "1"

// Boolean

Boolean(0)          // false
Boolean('')         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(1)          // true
Boolean(-1)         // true
Boolean(999)        // true
Boolean('hola')     // true

// String

var texto = "La Magia de Javascript"
texto.startsWith('La') // true
texto.endsWith('Javascript') // true
texto.indexOf('Magia') // 3
texto.includes('Javascript') // true
texto.toUpperCase() // "LA MAGIA DE JAVASCRIPT"
texto.charAt(3) // M
texto.replace('de', 'con') // "La Magia con Javascript"
texto.concat(' en el código') // "La Magia con Javascript en el código"
