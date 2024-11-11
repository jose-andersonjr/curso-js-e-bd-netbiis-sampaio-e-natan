import db from '../configs/dbConfig.js';

export function listarCandidatos() {
    return db.data.candidatos;
}

export function pegarCandidatoPorID(id) {
    return db.data.candidatos.find(candidato => candidato.id == id);
}

export function criarCandidato(candidato) {
    candidato.id = Date.now();
    candidato.votos = 0;
    db.data.candidatos.push(candidato);
    db.write();
    return true;
}

export function editarCandidato(candidato) {
    const index = db.data.candidatos.findIndex(c => c.id == candidato.id);
    db.data.candidatos[index] = candidato;
    db.write();
    return true;
}

export function excluirCandidato(id) {
    const index = db.data.candidatos.findIndex(c => c.id == id);
    db.data.candidatos.splice(index, 1);
    db.write();
    return true;
}

export function votar(numero) {
    const index = db.data.candidatos.findIndex(c => c.numero == numero);
    if (db.data.candidatos[index]) {
        db.data.candidatos[index].votos += 1;
        console.log(db.data.candidatos[index]);
        db.write();
        return true;
    } else {
        return false;
    }
}

export function reiniciarVotacao(){
    db.data.candidatos.forEach(c => {
        c.votos = 0;
    });
    db.write();
    return true;
}