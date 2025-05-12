function somarNumerosEntreMeN(numeroM: number, numeroN: number): number {
    let numerosNoIntervalo: number[] = []
    let soma: number = 0
    for(let i = numeroM; i <= numeroN; i++){
        numerosNoIntervalo.push(i)
        soma += i
    }
    return soma;
}

// console.log(somarNumerosEntreMeN(1,5)); // tem que dar 15
// console.log(somarNumerosEntreMeN(10,15)); // 75
// console.log(somarNumerosEntreMeN(3,6)); // 18


/*
Para a entrada M = 1 e N = 5, a saída deve ser: 15 (pois 1 + 2 + 3 + 4 + 5 = 15).
Para a entrada M = 10 e N = 15, a saída deve ser: 75 (pois 10 + 11 + 12 + 13 + 14 + 15 = 75).
Para a entrada M = 3 e N = 6, a saída deve ser: 18(pois 3+4+5+6=18).
*/