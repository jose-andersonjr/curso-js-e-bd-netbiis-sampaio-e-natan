const params = new URLSearchParams(window.location.search);
let dados = document.querySelector('#dados-recebidos');

let data = {
    nome: params.get('nome'),   
    email: params.get('email'),   
    mensagem: params.get('mensagem'),   
    manha: params.get('manha') ? 'Disponível' : 'Indisponível',
    tarde: params.get('tarde') ? 'Disponível' : 'Indisponível',
    noite: params.get('noite') ? 'Disponível' : 'Indisponível',
};

let htmlDadosRecebidos = `
    <p><b>Nome:</b> ${data.nome}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Mensagem:</b> ${data.mensagem}</p>
    <p><b>Preferência de horário para contato</b></p>
    <p><b>Manhã:</b> ${data.manha}</p>
    <p><b>Tarde:</b> ${data.tarde}</p>
    <p><b>Noite:</b> ${data.noite}</p>
`;

dados.innerHTML = htmlDadosRecebidos;