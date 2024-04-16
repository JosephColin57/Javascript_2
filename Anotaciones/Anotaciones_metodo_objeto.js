/* En JavaScript, los objetos son fundamentales y se utilizan para representar datos y estructuras de manera flexible. Aquí tienes algunos de los métodos de objetos más comunes y ampliamente utilizados:

1. **Object.keys()**: Devuelve un array de las propiedades enumerables de un objeto.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   console.log(Object.keys(obj)); // Salida: ["a", "b", "c"]
   ```

2. **Object.values()**: Devuelve un array de los valores de las propiedades enumerables de un objeto.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   console.log(Object.values(obj)); // Salida: [1, 2, 3]
   ```

3. **Object.entries()**: Devuelve un array de pares clave-valor de todas las propiedades enumerables de un objeto.
   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   console.log(Object.entries(obj)); // Salida: [["a", 1], ["b", 2], ["c", 3]]
   ```

4. **Object.assign()**: Copia los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.
   ```javascript
   const obj1 = { a: 1, b: 2 };
   const obj2 = { b: 3, c: 4 };
   const mergedObj = Object.assign({}, obj1, obj2);
   console.log(mergedObj); // Salida: { a: 1, b: 3, c: 4 }
   ```

5. **Object.hasOwnProperty()**: Devuelve un booleano indicando si el objeto tiene la propiedad especificada como propiedad propia (no heredada).
   ```javascript
   const obj = { a: 1, b: 2 };
   console.log(obj.hasOwnProperty('a')); // Salida: true
   console.log(obj.hasOwnProperty('toString')); // Salida: false (toString es una propiedad heredada)
   ```

6. **Object.freeze()**: Congela un objeto, lo que significa que no se pueden agregar, eliminar o modificar propiedades existentes del objeto.
   ```javascript
   const obj = { a: 1, b: 2 };
   Object.freeze(obj);
   obj.c = 3; // No tiene ningún efecto en el objeto congelado
   console.log(obj); // Salida: { a: 1, b: 2 }
   ```

7. **Object.create()**: Crea un nuevo objeto con el prototipo especificado y las propiedades dadas.
   ```javascript
   const protoObj = { a: 1 };
   const obj = Object.create(protoObj, {
       b: {
           value: 2
       }
   });
   console.log(obj); // Salida: { b: 2 }
   ```

Estos son solo algunos de los métodos más comunes que se utilizan para trabajar con objetos en JavaScript. Hay muchos otros métodos y técnicas disponibles para manipular y trabajar con objetos de manera efectiva. */