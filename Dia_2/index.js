const calculadoraIMC = (peso, altura) => {
    const imc = peso / (altura**2)
    console.log(`Tu IMC es: ${imc}`)
    return imc
}

const estadoIMC = (calculadoraIMC) => {
    if(isNaN(calculadoraIMC)) {
        console.log('Error: Los valores iniciales no son validos.')
    } else if(calculadoraIMC < 18.5) {
        console.log('Tu estado es: Bajo Peso')
    } else if ( calculadoraIMC < 24.9 ) {
        console.log('Tu estado es: Peso Saludable')
    } else if (calculadoraIMC < 29.9) {
        console.log('Tu estado es: Sobrepeso')
    } else {
        console.log('Tu estado es: Obesidad')
    }
}

estadoIMC(calculadoraIMC(90, 1.70))