/* En JavaScript, el equivalente al bucle `foreach` sería utilizar el método `forEach()` que está disponible en arrays. Este método te permite ejecutar una función de callback en cada elemento del array. Aquí hay algunos casos comunes en los que puedes usar `forEach()` en JavaScript:

1. **Iterar sobre un array**: Cuando necesitas realizar una operación en cada elemento de un array, puedes usar `forEach()` para recorrerlo y ejecutar la operación en cada elemento.


    const numeros = [1, 2, 3, 4, 5];
    numeros.forEach(numero => {
        console.log(numero);
    });


2. **Manipulación de elementos del DOM**: Puedes usar `forEach()` para iterar sobre una colección de elementos del DOM y realizar operaciones en cada uno de ellos, como agregar eventos o modificar su contenido.

    const elementos = document.querySelectorAll('.mi-clase');
    elementos.forEach(elemento => {
        elemento.style.color = 'red';
    });

3. **Operaciones de filtrado o búsqueda**: Puedes utilizar `forEach()` para buscar un elemento específico en un array o filtrar elementos según ciertos criterios.

    const numeros = [1, 2, 3, 4, 5, 6];
    const numeroBuscado = 3;
    let encontrado = false;
    numeros.forEach(numero => {
        if (numero === numeroBuscado) {
            encontrado = true;
        }
    });
    if (encontrado) {
        console.log("El número " + numeroBuscado + " fue encontrado.");
    } else {
        console.log("El número " + numeroBuscado + " no fue encontrado.");
    }

4. **Operaciones de transformación**: Puedes utilizar `forEach()` para transformar elementos de un array o realizar operaciones en cada elemento.

    const numeros = [1, 2, 3, 4, 5];
    const cuadrados = [];
    numeros.forEach(numero => {
        cuadrados.push(numero * numero);
    });
    console.log("Cuadrados de los números:", cuadrados);

En resumen, `forEach()` en JavaScript es útil cuando necesitas iterar sobre un array y realizar una operación simple en cada elemento, sin necesidad de mantener un control explícito del índice o la posición del elemento. */