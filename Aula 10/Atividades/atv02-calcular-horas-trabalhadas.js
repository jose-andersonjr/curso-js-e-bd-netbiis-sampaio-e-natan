function calcularHorasTrabalhadas(horaEntrada, horaSaida) {
    const entrada = new Date('1970-01-01 ' + horaEntrada);
    const saida = new Date('1970-01-01 ' + horaSaida);
    const diferencaEmMilissegundos = saida - entrada;
    const diferencaEmMinutos = diferencaEmMilissegundos / 60000;
    const horas = Math.floor(diferencaEmMinutos / 60);
    const minutos = diferencaEmMinutos % 60;
  
    return `${horas} hora(s) e ${minutos} minuto(s)`;
  }
  
  const horaEntrada = "08:30";
  const horaSaida = "17:15";
  const resultado = calcularHorasTrabalhadas(horaEntrada, horaSaida);
  console.log(resultado);