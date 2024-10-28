function substituirPalavra(frase, palavra, novaPalavra){
    console.log('Frase anterior =', frase);
    frase.replaceAll(palavra, novaPalavra);
    let novaFrase = frase.replaceAll(palavra, novaPalavra);
    console.log('Nova frase =', novaFrase);
}

let frase = 'Eu gosto de JavaScript';
substituirPalavra(frase, 'JavaScript', 'Python');