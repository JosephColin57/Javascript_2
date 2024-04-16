const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  /*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
      3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
      4.- Necesitamos saber la edad promedio de los usuarios
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */
  
  // 1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
          // 1.- pasar por cada propiedad del objeto para sacar el name y last name
          // 2.- tener un array vacio para ingresar la informacion encontrada del onjeto
          // 3.- agregar los valores encontrados en el array vacio
          // 4.- imprimir el array con la informacion
  
  const namesComplete = (users) => {
    const completeNames = []
  
    for(let i = 0; i < users.length; i++){
      const namecomplete = users[i].name + " " + users[i].lastname
      completeNames.push(namecomplete)
    }
    console.log('Esta es la lista con los nombres completos:')
    return completeNames
  }
  console.log(namesComplete(users))
  
  //  2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
  //  3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
            // 1.- Tengo que pasar por cada elemento del objeto y validar el genero
            // 2.- Una vez tenga el genero sacar el name, lastname que corresponda
            // 3.- ya que tenga el nombre y el genero ubicado inyectarlo en un array vacio
  
  const namesGender =  (users, gender) => {
  
    const listName = []
  
    for(let i = 0; i < users.length; i++){
      const user = users[i]
      if(user.gender === gender) {
        listName.push({namecomplete: user.name + " " + user.lastname, gender: user.gender})
      }
    }
      console.log(`Esta es la lista con el genero ${gender}`)
      return listName;
  }
  
  const genero = console.log(namesGender(users, "Female"))
  const genero2 = console.log(namesGender(users, "Male"))
  
  //     4.- Necesitamos saber la edad promedio de los usuarios
            // 1.- para sacar el promedio necesitamos sacar la suma de todos los datos entre el total de los mismos
            // 2.- hacer variable de la suma de la value edad
            // 3.- hacer variable con el total de key edad
            // 4.- hacer division para sacar el promedio de las edades 
  
  const average = (users) => {
    let plusage = 0
  
        for(let i = 0; i < users.length; i++){
        plusage += users[i].age
  }
  
  const totalUsers = users.length
  
  const promedioAge = console.log(`El promedio de edades es : ${plusage / totalUsers}`)
  
  return promedioAge
  }
  
  average(users)
  
  //     5.- Necesitamos saber la mayor edad
  
  const findAgeOld = (users) => {
    let ageOld = 0
  
      for(let i = 0; i < users.length; i++){
        const agenow = users[i].age
        if(agenow > ageOld){
          ageOld = agenow
        }
      }
      return console.log(`La mayor edad es: ${ageOld}`)
  }
  
  findAgeOld(users)
  
  //      6.- Necesitamos saber la menor edad
  
  const findAgeYoung = (users) => {
    let ageYoung = Infinity
  
      for(let i = 0; i < users.length; i++){
        const agenow = users[i].age
        if(agenow < ageYoung){
          ageYoung = agenow
        }
      }
      return console.log(`La mayor edad es: ${ageYoung}`)
  }
  
  findAgeYoung(users)
   