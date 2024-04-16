function Libro(tituloLibro, autorLibro, generoLibro, yearPublicacion, editorial){
    this.tituloLibro = tituloLibro
    this.autorLibro = autorLibro
    this.generoLibro = generoLibro
    this.yearPublicacion = yearPublicacion
    this.editorial = editorial
}

let libro1 = new Libro('Fire & Blood', 'George RR Martin', 'Novela', '2018', 'Bantam Books')

let libro2 = new Libro('A Song of Ice and Fire', 'George RR Martin', 'Novela', '1996', 'Bantam Books')

console.log(libro1)

console.log(libro2)

