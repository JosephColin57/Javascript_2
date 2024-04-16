const someString = 'The evil that men do';

const contadorVocales = (str) => {
    const listaVocal = /[AEIOUaeiouÁÉÍÓÚáéíóú]/g;
    let phraselength = str.length
    let total = 0;

    for(let i = 0; i < phraselength; i++){
        let esVocal = listaVocal.test(str.charAt(i));
        if(esVocal){
            total++;
        }
    }
    return total;
};

let test1 = contadorVocales(someString);

console.log(test1)
