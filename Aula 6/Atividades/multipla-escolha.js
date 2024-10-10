let diaDaSemana = 4;
switch (diaDaSemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Dia da semana inválido');
}

let diaDaSemanaExtenso = 'quarta';

function diaDaSemanaFunction(dia) {
    switch (diaDaSemanaExtenso.toLowerCase()) {
        case 'segunda-feira':
            return 2;
        case 'terça-feira':
            return 3;
        case 'quarta-feira':
            return 4;
        case 'quinta-feira':
            return 5;
        case 'sexta-feira':
            return 6;
        case 'sábado':
            return 7;
        case 'domingo':
            return 1;
        default:
            return 'Dia da semana inválido';
    }
}



console.log(diaDaSemanaFunction(diaDaSemanaExtenso));