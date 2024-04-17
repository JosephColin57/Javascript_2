/* El método `reduce()` en JavaScript se utiliza para reducir los elementos de un array a un único valor, aplicando una función acumuladora en cada elemento del array. Aquí te explico cómo funciona:

1. **Inicialización del acumulador**: El método `reduce()` toma una función de callback y un valor inicial como argumentos. El valor inicial se utiliza como el valor inicial del acumulador. Si no se proporciona un valor inicial, el primer elemento del array se utilizará como el valor inicial del acumulador y el proceso de reducción comenzará desde el segundo elemento.

2. **Iteración sobre el array**: `reduce()` recorre cada elemento del array, en orden.

3. **Aplicación de la función de callback**: Para cada elemento del array, la función de callback se ejecuta y recibe dos argumentos: el valor acumulado hasta el momento y el elemento actual del array. La función de callback puede realizar alguna operación en estos dos valores y devolver un nuevo valor acumulado.

4. **Actualización del acumulador**: El valor devuelto por la función de callback se convierte en el nuevo valor acumulado, que se pasa a la siguiente iteración de la función de callback.

5. **Retorno del valor acumulado final**: Una vez que se han recorrido todos los elementos del array, `reduce()` devuelve el valor acumulado final.

Aquí tienes un ejemplo simple que muestra cómo `reduce()` funciona en la práctica:

```javascript
const numeros = [1, 2, 3, 4, 5];

// Sumar todos los números del array
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

En este ejemplo, la función de callback `(acumulador, numero) => acumulador + numero` suma el valor acumulado (`acumulador`) con cada número del array (`numero`). El valor inicial del acumulador es `0`, por lo que la suma comienza desde `0`. Al final de la iteración, el valor acumulado final (la suma de todos los números) se devuelve como resultado. */

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
  
  /*let newCanes = {
      vacunados:[{...vacunado:true}],
      noVacunados:[{...vacunado:false}]
  }*/
  
 /*  const transformData = (dogsArray) => {
    let newData = {
      vacunados: [],
      noVacunados: [],
    };
    dogsArray.forEach((dog) => {
      dog.vacunado
        ? (newData.vacunados = [...newData.vacunados, dog])
        : [...newData.noVacunados, dog];
    });
    return newData;
  }; */
  
  //transformData(canes);
  
  const reduceData = (dogsArray) =>
    dogsArray.reduce(
      (accum, current) =>
        current.vacunado
          ? { ...accum, vacunados: [...accum.vacunados, current] }
          : { ...accum, noVacunados: [...accum.noVacunados, current] },
      {
        vacunados: [],
        noVacunados: [],
      }
    );
  
  console.log(reduceData(canes));
  
  /*
      si el perro esta vacunado, tenemos que regresar todo lo que ya teniamos en el acumulador, y además la propiedad "vacunados" modificada con todos los perros vacunados que ya habiamos encontrado, más el nuevo perro que acabamos de encontrar
  */
  