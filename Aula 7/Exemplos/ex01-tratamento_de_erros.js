let numero = 10;
let numero2 = null;

// Classes de Erro
try {
    // TypeError
    console.log(numero.toUpperCase());
    
    // ReferenceError
    console.log(teste);
    
    console.log(numero2.toUpperCase());

} catch (error) {
    console.log('Ocorreu um erro =', error.message);
} finally {
    console.log('Finalizou o bloco try catch');
}

