// Variables

const numDeOrdDia = 17
const ordenesPrev = 19
const diaMes = 12

// Dia Par
const diaPar = () => {
     const moduloDelDia = diaMes % 2;
    moduloDelDia == 0 ? console.log('par') : console.log('impar')
}

// Ajuste de capacidad
const capacity = () => {

    if (numDeOrdDia > ordenesPrev) {

        console.log('Debes incrementar tu capacidad ')
        
    }
    else if (numDeOrdDia == ordenesPrev) {
        console.log('Tu capacidad esta correcta')
    }
    else {
    console.log('Debes reducir tu capacidad')
    } 
}

diaPar()
capacity()
