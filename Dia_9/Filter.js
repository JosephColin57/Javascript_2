/* El método `filter()` en JavaScript se utiliza para crear un nuevo array con todos los elementos de otro array que cumplan una condición específica proporcionada en forma de función de callback. Aquí te explico cómo funciona:

1. **Recorrido del array original**: `filter()` recorre cada elemento del array original.

2. **Aplicación de la función de callback**: Para cada elemento del array original, `filter()` ejecuta una función de callback que proporcionas como argumento.

3. **Evaluación de la condición**: En cada iteración, la función de callback recibe el elemento actual como argumento. Dentro de esta función, debes escribir la condición que quieres que se cumpla para que el elemento sea incluido en el nuevo array. Si la condición devuelve `true`, el elemento se incluye en el nuevo array. Si devuelve `false`, el elemento se excluye.

4. **Construcción del nuevo array**: `filter()` crea un nuevo array con todos los elementos para los cuales la función de callback devuelve `true`.

5. **Retorno del nuevo array**: Finalmente, `filter()` devuelve el nuevo array con los elementos que cumplen la condición especificada.

Aquí tienes un ejemplo simple que muestra cómo `filter()` funciona en la práctica:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

// Filtrar los números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares); // Output: [2, 4, 6]
```

En este ejemplo, la función de callback `numero => numero % 2 === 0` evalúa si cada número es par (`numero % 2 === 0`). Si es par, la función devuelve `true`, lo que significa que el número se incluirá en el nuevo array `numerosPares`. Si no es par, la función devuelve `false`, y el número se excluye del nuevo array. */

const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  const getLongNames = (dogsArray) => {
    let result = dogsArray.filter((dog, index, arr) => {
      return dog.nombre.length > 3;
    });
    return result;
  };
  
  console.log(getLongNames(canes));
  