function contarPalavras(frase){
    let qtdPalavras = frase.split(' ').length;
    console.log(`A frase possui ${qtdPalavras} palavra(s)`);
}

let frase = 'Eu gosto muito de JavaScript';
contarPalavras(frase);