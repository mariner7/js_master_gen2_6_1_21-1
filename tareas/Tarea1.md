# Tarea 1

Hola a todos! les dejo la tarea para que la revisen. Recuerden que la tarea va con algunas 2 décimas para la evaluación final.

## IMPORTANTE

La tarea deben desarrollarla en su repositorio personal, si no saben ocupar git para subirlo, me comentan y les ayudo. Me deben compartir el enlace de su repositorio con la tarea, no acepto `.zip` o algún otro formato ya que me toma más tiempo revisarlo ya que debo descargarlo. Solo aceptaré enlaces al repositorio.


TAREA:

1. Escribir una función a la que se pasa como parámetro un número entero y devuelve como resultado un texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

2. Según este string `"abcdefghijklmnñopqrstuvwxyz"`, hacer una función que recibe un parámetro (un caracter o una letra), y la función me debe devolver en qué posición en la cadena del string se encuentra el caracter entregado como argumento. Para realizar esto deben buscar en el prototipo `String`.

    Les dejé algunos ejemplos en el repositorio de la `clase1.js`

    Ejemplo:

    ```js
    posicionEnString('e') 
    => 4
    ```

3. Hacer una función que reciba un precio, y este me devuelva el precio con impuesto de `0.19%`. Si yo ingreso `1000` a la función, me debería retornar con el formato `"El precio con impuesto es de $1190"`

4. Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, por ejemplo:

    var dadoJulio = nuevoDado('julio')

    Y que la respuesta de dadoJulio() sea:

    dadoJulio() -> "Julio tiró un dado y salió 6"
    dadoJulio() -> "Julio tiró un dado y salió 3"
    dadoJulio() -> "Julio tiró un dado y salió 5"

    Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6).

5. Generar un prototipo llamado `Persona` que va a recibir 2 argumentos (nombre completo y edad). El prototipo debe tener un método que sea `guardarEnLocalStorage` y `guardarEnSessionStorage`, estos métodos deben guardar nombre completo y edad en el local storage y session storage. Al guardar estos elementos, deben visualizarse a través del debugger de chrome o de algún otro browser. 
