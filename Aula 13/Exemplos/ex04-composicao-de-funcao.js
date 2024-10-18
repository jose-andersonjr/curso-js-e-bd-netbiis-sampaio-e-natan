function calcularSalario(salarioBase, percentDesconto, percentBonus){
    const desconto = getValor(salarioBase, percentDesconto);
    const bonus = getValor(salarioBase, percentBonus);
    return salarioBase - desconto + bonus;
}

function getValor(valor, porcentagem){
    return valor * (porcentagem / 100);
}

console.log(calcularSalario(100, 5, 20));