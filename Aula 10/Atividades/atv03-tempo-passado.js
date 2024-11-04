function tempoPassadoDesdeData(data) {
    const agora = new Date();

    if (data > agora) {
        throw new Error('A data fornecida não pode ser no futuro.');
    }

    const diferencaEmMilissegundos = agora - data;
    const segundos = Math.floor(diferencaEmMilissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const minutosRestantes = minutos % 60;
    const horasRestantes = horas % 24;

    return `${dias} dias, ${horasRestantes} horas e ${minutosRestantes} minutos`;
}

const dataPassada = new Date(2023, 9, 14);
try {
  const tempoPassado = tempoPassadoDesdeData(dataPassada);
  console.log(tempoPassado);
} catch (error) {
  console.error(error.message);
}