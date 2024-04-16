/* En JavaScript, los métodos de strings más utilizados incluyen una variedad de funciones para manipular y trabajar con cadenas de texto. Aquí tienes algunos de los métodos más comunes:

1. **length**: Devuelve la longitud de la cadena.
   ```javascript
   const str = "Hola Mundo";
   console.log(str.length); // Salida: 10
   ```

2. **indexOf()** y **lastIndexOf()**: Devuelven la posición de la primera y última ocurrencia de una subcadena, respectivamente.
   ```javascript
   const str = "Hola Mundo";
   console.log(str.indexOf('Mundo')); // Salida: 5
   console.log(str.lastIndexOf('o')); // Salida: 7
   ```

3. **charAt()** y **charCodeAt()**: Devuelven el carácter en una posición específica y su código ASCII.
   ```javascript
   const str = "Hola Mundo";
   console.log(str.charAt(0)); // Salida: "H"
   console.log(str.charCodeAt(0)); // Salida: 72
   ```

4. **substring()**, **slice()**, y **substr()**: Extraen una parte de la cadena.
   ```javascript
   const str = "Hola Mundo";
   console.log(str.substring(0, 4)); // Salida: "Hola"
   console.log(str.slice(0, 4)); // Salida: "Hola"
   console.log(str.substr(5, 5)); // Salida: "Mundo"
   ```

5. **toLowerCase()** y **toUpperCase()**: Convierten la cadena a minúsculas y mayúsculas, respectivamente.
   ```javascript
   const str = "Hola Mundo";
   console.log(str.toLowerCase()); // Salida: "hola mundo"
   console.log(str.toUpperCase()); // Salida: "HOLA MUNDO"
   ```

6. **trim()**: Elimina los espacios en blanco al principio y al final de la cadena.
   ```javascript
   const str = "   Hola Mundo   ";
   console.log(str.trim()); // Salida: "Hola Mundo"
   ```

7. **split()**: Divide la cadena en un array de subcadenas, utilizando un separador especificado.
   ```javascript
   const str = "Hola Mundo";
   console.log(str.split(' ')); // Salida: ["Hola", "Mundo"]
   ```

Estos son solo algunos de los métodos más utilizados en JavaScript para manipular cadenas de texto. Hay muchos más disponibles en la documentación oficial de JavaScript. */