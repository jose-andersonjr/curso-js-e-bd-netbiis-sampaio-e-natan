const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolvida');
    }, 2000);
});

// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log('Error = ', error);
//     });

async function executarPromessa(){
    try {
        const resposta = await promise;
        console.log('resposta =', resposta);
    } catch (error) {
        console.log(error);
    }
}

executarPromessa();