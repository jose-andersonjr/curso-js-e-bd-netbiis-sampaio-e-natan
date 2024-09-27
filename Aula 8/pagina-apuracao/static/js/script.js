// Agora é com você! Comece com o mesmo script do exercício prático 1

const candidatos = [
    {
        nome: 'Guilherme Boulos',
        votos: 0,
        numeroUrna: 1
    },
    {
        nome: 'Ricardo Nunes',
        votos: 0,
        numeroUrna: 2
    },
    {
        nome: 'Pablo Marçal',
        votos: 0,
        numeroUrna: 3
    }
]
let divNulos = document.querySelector('#votos-nulos');
let nulos = 0;

const ulCandidatos = document.querySelector('#candidatos');

function renderizarCandidatos() {
    ulCandidatos.innerHTML = '';
    candidatos.forEach(candidato => {
        ulCandidatos.innerHTML += `
            <li>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos} votos</span>
            </li>`;
    });
    divNulos.textContent = nulos;

}

function votaCandidato(){
    let inputVoto = document.querySelector('#numero-candidato'); 
    let numeroVotado = inputVoto.value;
    let candidatoIndex = candidatos.findIndex(candidato => candidato.numeroUrna == numeroVotado);
    
    if(candidatoIndex != -1){
        candidatos[candidatoIndex].votos += 1;
    }else{
        nulos += 1;
    }
    renderizarCandidatos();
}

renderizarCandidatos();