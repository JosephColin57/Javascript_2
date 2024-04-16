const phrase = 'La mejor forma de predecir el futuro es creandolo'

// 1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
//   (quiero saber la longitud de la segunda palabra)
//   si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error

const palabra = (str, indice) => {
    let palabras = str.split(" ")

    if (indice >= palabras.length || indice < 0) {
        console.log('Lo siento, el índice que estás buscando no existe, inténtalo de nuevo.');
    } else {
        console.log(`La longitud de la palabra en el índice ${indice} es: ${palabras[indice].length}`);
    }
}
palabra(phrase, 8)


    // 2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada

const eliminarPalabra = (str, indice) => {
    let palabra = str.split(" ")

    palabra.splice(indice, 1)

    return console.log(`La nueva frase seria: ${palabra.join(" ")}`)
}

eliminarPalabra(phrase, 4)


    // 3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas

const eliminarCortas = (str) => {
    let palabra = str.split(" ")

    let palabras = palabra.filter(palabra => palabra.length > 3)

    return console.log(`La frase nueva seria: ${palabras.join(" ")}`)
} 

eliminarCortas(phrase)


    // 4.- Se requiere obtener la frase, pero escrita en orden invertido

    const invertido = (str) => {
        let palabra = str.split("")
        let palabrasInvertidas = palabra.reverse()

        return console.log(`La frase seria: ${palabrasInvertidas.join("")}`)
    }

invertido(phrase)

