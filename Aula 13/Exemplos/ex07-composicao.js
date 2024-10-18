class Endereco {
    constructor(params) {
        this.cep = params.cep;
        this.rua = params.rua;
        this.numero = params.numero;
        this.cidade = params.cidade;
        this.uf = params.uf;
    }

    mostrarEndereco() {
        return `Endereço: ${this.rua}, ${this.numero}, ${this.cidade} - ${this.uf}, ${this.cep}`;
    }
}

class Pessoa {
    constructor(params) {
        this.nome = params.nome;
        this.idade = params.idade;
        if(params.endereco instanceof Endereco){
            this.endereco = params.endereco;
        }else{
            throw new Error('O endereço deve ser uma instância de classe Endereço');
        }
    }

    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos. Moro em ${this.endereco.mostrarEndereco()}`;
    }
}

const pessoa1 = new Pessoa({
    nome: 'João',
    idade: 20,
    endereco: {
        cidade: 'São Paulo',
        uf: 'SP',
        cep: '12345-678',
        rua: 'Rua 1',
        numero: 123
    }
});

console.log(pessoa1.apresentar())