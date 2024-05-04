let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];
  
    //   1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
        //   1.- Crear una funcion flecha para tener los nombres de las personas
        //   2.- Usar map ya que se tiene que crear una lista nueva
        //   3.- Usar template string para concatenar los 2 indices de la matriz donde viene el nombre y apellido
    const nameComplete = (array) => array.map(person => `${person[0]} ${person[1]}`)

    console.log(nameComplete(data))

    //    2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista        
        const findAge = () => {
        
        let edades = data.map(persona => persona[2])
        
            let mayorEdad = edades.reduce((mayor, edad) => (mayor > edad ? mayor : edad), edades[0])
            let menorEdad = edades.reduce((menor, edad) => (menor < edad ? menor : edad), edades[0])

            return {mayor:mayorEdad, menor:menorEdad}
        }

        const {mayor, menor} = findAge()

console.log("La mayor edad es:", mayor)
console.log("La menor edad es:", menor)
    

// 3.- Necesitamos reestructurar la data para que quede de la siguiente forma
  
    const restructuringData = array => {
        let restructuring = array.map( person => {
            return {
                name:person[0],
                lastname:person[1],
                age:person[2]
            }
        })
        return restructuring
    }

    const result = restructuringData (data)
    console.log(result)

// Traduccion

/* En la función reestructurarData, se toma un parámetro array que representa los datos originales que se van a reestructurar. Se crea una variable llamada restructuredData para almacenar el resultado de la iteración sobre el array original utilizando el método map().

Dentro del callback de map(), cada elemento del array se representa como persona. Para cada persona, se crea un objeto con tres propiedades:

name: Se asigna el valor del primer elemento del array (persona[0]), que corresponde al nombre.
lastname: Se asigna el valor del segundo elemento del array (persona[1]), que corresponde al apellido.
age: Se asigna el valor del tercer elemento del array (persona[2]), que corresponde a la edad.
Finalmente, la función retorna la variable restructuredData, que contiene la nueva estructura de datos, donde cada elemento es un objeto con las propiedades name, lastname y age, representando los datos reestructurados.

Esta función proporciona una forma clara y eficiente de transformar el formato de los datos originales en un formato más adecuado para su uso posterior.

 */