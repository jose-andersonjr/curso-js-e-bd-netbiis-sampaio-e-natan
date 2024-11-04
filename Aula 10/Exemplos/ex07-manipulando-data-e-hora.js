const dataAtual = new Date();
const diaEmMilissegundos = 24 * 60 * 60 * 1000;

const dataExpiracao = new Date(dataAtual.getTime() + 5 * diaEmMilissegundos);

dataExpiracao.setHours(0, 0, 0);
dataExpiracao.setDate(5); 
dataExpiracao.setMonth(5);
dataExpiracao.setFullYear(2022); 
dataExpiracao.setMinutes(30); 
dataExpiracao.setSeconds(15); 
console.log(dataExpiracao);