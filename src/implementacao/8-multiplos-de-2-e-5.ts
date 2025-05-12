function analiseMultiplos(numeros:number[]):void {
    let i: number = 0
    let contador1: number = 0
    let contador2: number = 0
    for (i = 0; i < numeros.length; i++){
         const numero = numeros[i];

        if(numeros[i] === -1){
            break;
        }
        if(numeros[i] % 2 == 0 && numeros[i] % 3 == 0){
            contador1++
        
        }
        if(numeros[i] % 2 == 0 && numeros[i] % 5 == 0){
            contador2++
       
        }

    }
    console.log(`${contador1} numero(s) múltiplo(s) de 2 e 3` );
    console.log(`${contador2} numero(s) múltiplo(s) de 2 e 5` );   
}

//let lista:number[] = [10, 15, 30, -1];
//let lista:number[] = [6, 12, 20, 25, -1];
//let lista:number[] = [10, 15, 30, -1];
console.log(analiseMultiplos(lista));