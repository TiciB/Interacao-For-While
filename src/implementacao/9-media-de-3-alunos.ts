function mediaNotas(notaAluno1: number[], notaAluno2: number[], notaAluno3: number[]): void {
    let soma1: number = 0
    let soma2: number = 0
    let soma3: number = 0

    //Estruturas de repetição para percorrer os array e somar os valores dentro deles
    for(let i = 0; i < notaAluno1.length; i++){
        soma1 += notaAluno1[i]
    }

    for(let j = 0; j < notaAluno2.length; j++){
        soma2 += notaAluno2[j]
    }

    for(let z = 0; z < notaAluno3.length; z++){
        soma3 += notaAluno3[z]
    }
//Calculo das médias dos alunos
    let mediaAluno1 = soma1/notaAluno1.length
    let mediaAluno2 = soma2/notaAluno2.length
    let mediaAluno3 = soma3/notaAluno3.length

//Condicionais para aprovaão reprovação do aluno
    
        if(mediaAluno1 >= 7){
            console.log("Aluno 1: Passou");
            
        }else if(mediaAluno1 >= 4 ){
            console.log("Aluno 1: Recuperação");
                
        }else{
            console.log("Aluno 1: Reprovado");
           
        }

        if(mediaAluno2 >= 7){
            console.log("Aluno 2: Passou");
            
        }else if(mediaAluno2 >= 4 ){
            console.log("Aluno 2: Recuperação");
                
        }else{
            console.log("Aluno 2: Reprovado");
           
        }

        if(mediaAluno3 >= 7){
            console.log("Aluno 3: Passou");
        
        }else if(mediaAluno3 >= 4 ){
            console.log("Aluno 3: Recuperação");
                
        }else{
            console.log("Aluno 3: Reprovado");
           
        }
}
let aluno1: number[] = [8, 7, 9];
let aluno2: number[] = [5, 6, 5]; 
let aluno3: number[] = [3, 4, 2]; 

console.log(mediaNotas(aluno1, aluno2, aluno3))


