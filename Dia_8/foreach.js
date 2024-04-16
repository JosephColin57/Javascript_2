// Foreach

/*En JavaScript, el método `forEach()` es una forma conveniente de iterar sobre todos los elementos de un array. Aquí tienes la sintaxis básica:

```javascript
array.forEach(function(elemento, indice, arreglo) {
    // Hacer algo con el elemento
});
```

- `array`: El array sobre el cual deseas iterar.
- `elemento`: El elemento actual del array durante la iteración.
- `indice` (opcional): El índice del elemento actual en el array.
- `arreglo` (opcional): El array que está siendo recorrido.

El método `forEach()` recibe como argumento una función de callback que se ejecuta una vez por cada elemento del array. Esta función puede tener hasta tres argumentos:

1. `elemento`: El elemento actual del array.
2. `indice` (opcional): El índice del elemento actual en el array.
3. `arreglo` (opcional): El array sobre el cual se está iterando.

Aquí tienes un ejemplo de cómo usar `forEach()`:

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero, indice) {
    console.log(`El elemento en el índice ${indice} es ${numero}`);
});
```

Este código imprimirá:

```
El elemento en el índice 0 es 1
El elemento en el índice 1 es 2
El elemento en el índice 2 es 3
El elemento en el índice 3 es 4
El elemento en el índice 4 es 5
```

Nota que puedes elegir usar o no los argumentos opcionales (`indice` y `arreglo`) dependiendo de tus necesidades. Por ejemplo, si solo necesitas el elemento actual, puedes definir la función de callback con un solo parámetro (`elemento`).  */

let koders = ['yair', 'maria', 'akira'];

koders.forEach((item, index, array) => {
    console.log('El elemento actual del array', item);
    console.log('El índice del elemento actual en el array', index);
    console.log('El array sobre el cual se está iterando', array);
    let firstletter = item.charAt(0);
    console.log('La primer Letra del Item', firstletter);
})


