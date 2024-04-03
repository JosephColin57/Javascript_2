const dia = 2

const diaParOImpar = () => {
    // Es para guardar el modulo del dia
    const moduloDelDia = dia % 2; // 0 y 1
    // Si el dia es par ENTONCES imprima 'el dia es par'      // de lo contrario 'el dia es impar 
    moduloDelDia == 0 ? console.log(`El dia ${dia} es par`) : console.log(`El dia ${dia} es Impar`)
}

diaParOImpar()