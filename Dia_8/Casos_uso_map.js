/* El método `map()` en JavaScript se utiliza para transformar los elementos de un array y crear un nuevo array con los resultados de aplicar una función a cada elemento del array original. Aquí hay algunos casos comunes en los que puedes usar `map()` en JavaScript:

1. **Transformación de elementos**: Puedes usar `map()` para aplicar una función a cada elemento de un array y obtener un nuevo array con los resultados de esa función.

    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    const cuadrados = numeros.map(numero => numero * numero);
    console.log("Cuadrados de los números:", cuadrados);
    ```

2. **Modificación de objetos**: Si tienes un array de objetos y necesitas modificar ciertas propiedades de cada objeto, puedes usar `map()` para crear un nuevo array con los objetos modificados.

    ```javascript
    const personas = [
        { nombre: 'Juan', edad: 30 },
        { nombre: 'María', edad: 25 },
        { nombre: 'Pedro', edad: 35 }
    ];
    const personasConMayusculas = personas.map(persona => ({
        nombre: persona.nombre.toUpperCase(),
        edad: persona.edad
    }));
    console.log("Personas con nombres en mayúsculas:", personasConMayusculas);
    ```

3. **Extracción de datos**: Si necesitas extraer ciertos datos de un array de objetos, puedes usar `map()` para crear un nuevo array con los datos deseados.

    ```javascript
    const personas = [
        { nombre: 'Juan', edad: 30 },
        { nombre: 'María', edad: 25 },
        { nombre: 'Pedro', edad: 35 }
    ];
    const nombres = personas.map(persona => persona.nombre);
    console.log("Nombres de las personas:", nombres);
    ```

4. **Manipulación de elementos del DOM**: Puedes usar `map()` para generar una colección de elementos del DOM basada en un array de datos.

    ```javascript
    const nombres = ['Juan', 'María', 'Pedro'];
    const elementosHTML = nombres.map(nombre => `<li>${nombre}</li>`);
    const listaHTML = `<ul>${elementosHTML.join('')}</ul>`;
    document.getElementById('lista').innerHTML = listaHTML;
    ```

En resumen, `map()` en JavaScript es útil cuando necesitas transformar los elementos de un array de una manera más compleja que simplemente recorrerlos, ya que te permite aplicar una función a cada elemento y obtener un nuevo array con los resultados de esa función. */