let vogais = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
function contarVogais(frase){
    for(let char of frase){
        console.log(char);
        if(vogais.includes(char.toLowerCase())){
            count++;
        }
    }
    console.log(count);
}

let frase = 'Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III';
contarVogais(frase);