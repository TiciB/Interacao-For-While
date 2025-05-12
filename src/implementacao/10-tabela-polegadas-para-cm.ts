function tabelaConversao(arrayNumber: number[]): {}[] {
    // arrayNumber = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let tabela: {polegada: number, centímetro: number}[] = []

    for(let i = 0; i < arrayNumber.length; i++){
        let numeroEmPolegadas = arrayNumber[i];
        let polegadasEmCentímetros = numeroEmPolegadas * 2.54;
        tabela.push({polegada: numeroEmPolegadas, centímetro: polegadasEmCentímetros})
    }

    return tabela;
}

console.log(tabelaConversao([1, 2 ,3]));
console.log(tabelaConversao([1, 2 ,3 ,4 ,5]));
console.log(tabelaConversao([1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

/*
A tabela gerada para polegadas de 1 a 3 seria:
1 pol = 2.54 cm
2 pol = 5.08 cm
3 pol = 7.62 cm
A tabela gerada para polegadas de 1 a 5 seria:
1 pol = 2.54 cm
2 pol = 5.08 cm
3 pol = 7.62 cm
4 pol = 10.16 cm
5 pol = 12.7 cm
*/