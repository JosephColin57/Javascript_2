const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
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
      pais: "México",
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
      pais: "Colombia",
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
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  


//         1.- Necesito conocer la edad promedio de todos los perros

      const average = (can) => {
        let plusage = 0
      
            canes.forEach((can) => {
                plusage += can.edad
            })
      
      const totalCanes = canes.length
      
      const promedioAge = console.log(`El promedio de edades es : ${plusage / totalCanes}`)
      
      return promedioAge
      }
      
      average(canes)

    //         2.- Necesito obtener una lista de perros basados en el país al que pertenecen
        // 1.- usar map ya que se necesita otra lista
        // 2.- ingresar al pais

        const countryDog = (canes, pais) => canes.filter((cane) => cane.tipo === "Perro" && cane.pais === pais)
            
        
        const dogNacionality = countryDog(canes, "México")
        console.log('Perros en México:', dogNacionality)

        //       3.- Necesito una lista de los códigos postales de los perros
        
        const zpDog = (canes) => {
            return canes
              .filter((cane) => cane.tipo === "Perro")
              .map((cane) => cane.direccion.codigoPostal);
          };

        const infoZPDog = zpDog(canes)
        console.log("Códigos postales de los perros:", infoZPDog)

 //       4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos

