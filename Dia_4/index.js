const phrase = 'La mejor forma de predecir el futuro es creandolo'

// 1.- Saber cuántos caracteres tiene la frase

const caracteres = (str) => console.log(`Tu frase tiene ${str.length} caracteres`)

caracteres(phrase)

// 2.- Saber cuántas letras tiene la frase

let letras = (str) => {
    let letra = str.split('').filter((caracter) => {
        return (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')
})
    return console.log(`Tu frase tiene ${letra.length} letras`)
}

letras(phrase)

// 3.- Saber cuántas palabras tiene la frase

const palabras = (str) => console.log(`Tu frase tiene ${str.split(" ").length} palabras`)

palabras(phrase)

// 4.- Obtener la misma frase pero en mayúsculas

const mayus = (str) => console.log(`Asi se ve en MAYUSCULAS: ${str.toUpperCase()}`)

mayus(phrase)

// 5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"

let reemplazar = (str) => console.log(`Asi se ve reemplazando las 'a' por '4': ${str.replace(/a/g, 4)}`)

reemplazar(phrase)
