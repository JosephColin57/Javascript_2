/* Los arrays son una parte fundamental de JavaScript y hay una serie de métodos incorporados que son ampliamente utilizados para manipular y trabajar con ellos. Aquí tienes algunos de los métodos de array más comunes:

1. **push()** y **pop()**: Añaden y eliminan elementos al final del array, respectivamente.
   ```javascript
   const array = [1, 2, 3];
   array.push(4);
   console.log(array); // Salida: [1, 2, 3, 4]
   array.pop();
   console.log(array); // Salida: [1, 2, 3]
   ```

2. **shift()** y **unshift()**: Eliminan y añaden elementos al principio del array, respectivamente.
   ```javascript
   const array = [1, 2, 3];
   array.unshift(0);
   console.log(array); // Salida: [0, 1, 2, 3]
   array.shift();
   console.log(array); // Salida: [1, 2, 3]
   ```

3. **concat()**: Combina dos o más arrays.
   ```javascript
   const array1 = [1, 2];
   const array2 = [3, 4];
   const newArray = array1.concat(array2);
   console.log(newArray); // Salida: [1, 2, 3, 4]
   ```

4. **slice()**: Extrae una porción del array, sin modificar el original.
   ```javascript
   const array = [1, 2, 3, 4, 5];
   const slicedArray = array.slice(1, 3);
   console.log(slicedArray); // Salida: [2, 3]
   ```

5. **splice()**: Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos.
   ```javascript
   const array = [1, 2, 3, 4, 5];
   array.splice(2, 1, 'a', 'b');
   console.log(array); // Salida: [1, 2, 'a', 'b', 4, 5]
   ```

6. **forEach()**: Ejecuta una función proporcionada una vez para cada elemento del array.
   ```javascript
   const array = [1, 2, 3];
   array.forEach(item => {
       console.log(item); // Salida: 1, 2, 3
   });
   ```

7. **map()**: Crea un nuevo array con los resultados de llamar a una función para cada elemento del array.
   ```javascript
   const array = [1, 2, 3];
   const mappedArray = array.map(item => item * 2);
   console.log(mappedArray); // Salida: [2, 4, 6]
   ```

Estos son solo algunos de los métodos más comunes que se utilizan para manipular arrays en JavaScript. Hay muchos otros métodos disponibles que pueden ser útiles según el caso de uso específico. */