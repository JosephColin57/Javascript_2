/* El método `.map()` en JavaScript se utiliza para transformar los elementos de un array aplicando una función a cada uno de ellos, y luego devuelve un nuevo array con los resultados de dichas transformaciones. Aquí tienes la sintaxis básica:
 */

/* const nuevoArray = arrayOriginal.map(function(elementoActual, indice, arregloOriginal) {
    // Transformar el elemento actual y devolver el resultado
    return resultadoTransformado;
}); */


/* - `arrayOriginal`: El array sobre el cual deseas iterar y transformar sus elementos.
- `elementoActual`: El elemento actual del array durante la iteración.
- `indice` (opcional): El índice del elemento actual en el array.
- `arregloOriginal` (opcional): El array que está siendo recorrido.

La función que pasas como argumento al método `.map()` se ejecuta una vez por cada elemento del array. Puedes hacer cualquier tipo de transformación que desees en cada elemento y devolver el resultado de esa transformación. El método `.map()` luego devuelve un nuevo array que contiene todos los resultados de las transformaciones.

Aquí tienes un ejemplo de cómo usar `.map()` para duplicar cada número en un array:
 */

const numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = numeros.map((numero) => {
    let num = numero * 2;
    return num
})

console.log(numerosDuplicados)


/* En este ejemplo, la función de callback multiplica cada número por 2 y devuelve el resultado. El nuevo array `numerosDuplicados` contendrá los números originales, pero cada uno duplicado. */