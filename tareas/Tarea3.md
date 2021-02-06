# Tarea 3

Hola a todos! les dejo la tarea para que la revisen. Recuerden que la tarea va con algunas **2** décimas para la evaluación final.

Para la tarea seguiremos utilizando el json de **sandwichOrders.js** que se encuentra en la **clase 8**

Recuerden solo utilizar **let o const** de ahora en adelante, ya no más ~~var~~

# Crear las siguientes funciones flecha

##
- Función que me permita encontrar todas las ordenes que contengan de **ingredients** lechuga y palta

- Función que me permita encontrar una orden a través del id y que me devuelva un **string** con el siguiente formato de ejemplo: `La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette)`. En caso de no encontrar nada a través del id, el mensaje, a modo de ejemplo, deberá ser: `No se encontró la orden con id (800)`
  - Las palabras encerradas en paréntesis corresponden a información que debe venir desde la búsqueda.
  - Usar **destructuración** [-> Documentación <-](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment)

- Función que me permita encontrar una orden a través del id y que me indique si la orden incluye `pepinillos` entre sus **ingredients**, debería devolver un `true|false` como respuesta.

- Función que me permita encontrar todas las orden que se hicieron en un día en específico, es decir, si yo coloco **20-10-2020**, la función me debería devolver: `Se encontraron N ordenes para la fecha 20-10-2020`.

- Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina `not burger` y de ingredients `cebolla caramelizada`

## Ejercicio dificil

No es obligatorio que lo completen pero les servirá para entender como funciona `.reduce()`

- Función que me devuelva un objeto, con la cantidad correspondiente de ordenes por cada `bread`:

   - Deben usar `.reduce()`
   - La lista de ingredientes es la siguiente: 
   ```js
    const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]
   ```
   - Resultado de la operación para que puedan evaluar:
   ```js
   Result:
   {
       hallulla: 335,
       marraqueta: 438,
       bagette: 628,
       brioche: 257,
       pita: 342
   }
   ```
   