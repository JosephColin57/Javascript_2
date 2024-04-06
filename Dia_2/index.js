const calculadoraIMC = (peso, altura) => {
    const imc = peso / (altura**2)
    console.log(`Tu IMC es: ${imc}`)
    return imc
}

const estadoIMC = (calculadoraIMC) => {
    if(isNaN(calculadoraIMC)) {
        console.log('Error: Los valores iniciales no son validos.')
    } else if(calculadoraIMC < 18.5) {
        console.log('Bajo Peso')
    } else if ( calculadoraIMC < 24.9 ) {
        console.log('Peso Saludable')
    } else if (calculadoraIMC < 29.9) {
        console.log('Sobrepeso')
    } else {
        console.log('Obesidad')
    }
}

const peso = 90
const altura = 1.70

const imc = calculadoraIMC(peso, altura)

estadoIMC(imc)

