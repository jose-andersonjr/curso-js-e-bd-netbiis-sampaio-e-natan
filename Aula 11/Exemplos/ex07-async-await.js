const promiseAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {id: 1, nome: 'Guilherme'},
            {id: 2, nome: 'Boulos'}
        ]);
    }, 2000);
});

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            nome: 'Guilherme',
            sobrenome: 'Boulos',
            numeroCampanha: 50
        });
    }, 2000);
});

async function retornarCandidatosCompleto(){
    const listaCandidatos = await promiseAPI;
    const candidato = await promise;

    const candidatoCompleto = `${listaCandidatos[0].id} - ${candidato.nome} ${candidato.sobrenome} - ${candidato.numeroCampanha}`;
    return candidatoCompleto;
}

retornarCandidatosCompleto()
    .then(result => {
        console.log(result);
    })