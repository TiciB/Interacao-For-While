function mostrarNumerosEntreMeN(primeiroNumero: number, segundoNumero: number): number[] {
    let numerosNoIntervalo: number [] = [];

    for (let index = primeiroNumero; index < segundoNumero; index++) {
        if(index % 2 === 1){
            numerosNoIntervalo.push(index)
        }
    }
    return numerosNoIntervalo
}

// console.log(mostrarNumerosEntreMeN(2, 10));
// console.log(mostrarNumerosEntreMeN(3, 10));
// console.log(mostrarNumerosEntreMeN(2, 5));

