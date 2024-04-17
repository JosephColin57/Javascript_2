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