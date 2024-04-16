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

// 1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
const ageCan = canes.map(cane => ({
    ...cane,
    edad: cane.edad * 7 // Convertir la edad a años perrunos
}));

console.log(ageCan)

// 2.- Necesitamos conocer la cantidad de canes que ya estan vacunados

let countVacunne = 0

canes.forEach((cane) => {
    if(cane.vacunado) {
        countVacunne++
    }
})

console.log(`Cantidad de canes vacunados: ${countVacunne}`)

// 3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
        // "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal}"
    
        const addressCan = canes.map(cane => `${cane.nombre}: ${cane.direccion.calle} #${cane.direccion.numero}, ${cane.direccion.colonia}, ${cane.direccion.codigoPostal}`)
        
        console.log(addressCan)

//  4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
    // 1.- primero hacer variable porque necesitamos hacer la suma de las edades de todos los objetos
    // 2.- pasar por cada elemento y sumarlo y asignarlo en la variable creada para la suma 
    // 3.- hacer el length con la propiedad edad
    // 4.- operacion y resultado

    let plusAge = 0

    canes.forEach((cane) => {
        plusAge += cane.edad
    })

    let totalAge = canes.length

    const averageAge = plusAge / totalAge

    console.log(`La edad promedio de los canes en años humanos es: ${averageAge}`)

//     5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")

const canesVacunne = canes.map(cane => ({
    ...cane,
    vacunado: cane.vacunado ? "Si" : "No"
}));

console.log(canesVacunne)

//     6.- Necesitamos una nueva lista con únicamente el nombre de cada can

const namesCanes = canes.map(cane => cane.nombre)

console.log(namesCanes)