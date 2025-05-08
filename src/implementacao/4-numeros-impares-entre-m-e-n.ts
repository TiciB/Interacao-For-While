function mostrarImparesEntreMeN(primeiroNumero: number, segundoNumero: number): number[] {
    let numerosNoIntervalo: number [] = [];

    for (let index = primeiroNumero; index < segundoNumero; index++) {
        if(index % 2 === 1){
            numerosNoIntervalo.push(index)
        }
    }
    return numerosNoIntervalo
}


console.log(mostrarImparesEntreMeN(2, 10));
console.log(mostrarImparesEntreMeN(3, 10));
console.log(mostrarImparesEntreMeN(2, 5));
