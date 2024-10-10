document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const idade = parseInt(document.getElementById('idade').value);
    const termos = document.getElementById('termos').checked;
    const resultado = document.getElementById('resultado');

    if (idade >= 18 && termos) {
        window.location.href = '../templates/atv05.1-bem-vindo-ao-site-de-apostas.html';
    } else {
        resultado.textContent = 'Você não pode acessar o site.';
    }
});