function extrairIniciais(frase){
    let iniciais = frase.split(' ')
        .map(palavra => palavra[0])
        .join('.')
        .concat('.');
    console.log('iniciais =', iniciais);
}

let frase = 'Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III';
extrairIniciais(frase);