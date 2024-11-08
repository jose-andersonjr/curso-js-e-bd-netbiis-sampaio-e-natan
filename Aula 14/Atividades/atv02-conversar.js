class Conversor{
    static metrosParaQuilometros(metros){
        return metros/1000;
    }

    static quilometrosParaMetros(quilometros){
        return quilometros * 1000;
    }
}

let metros = 4000;
let quilometros = 3;

console.log(`Convertendo ${metros}m para quilometros: ${Conversor.metrosParaQuilometros(metros)}km`);
console.log(`Convertendo ${quilometros}km para metros: ${Conversor.quilometrosParaMetros(quilometros)}m`);