class ContaBancaria {
    #saldo = 0;

    #verificarSaldo(valor){
        if (valor <= 0){
            throw new Error ('Valor inválido para depósito!');
        }
        return true;
    }

    depositar(valor){
        if (valor <= 0){
            throw new Error('Valor inválida para depósito!');
        }
        this.#saldo += valor;
        
    }

    sacar(valor){
        if(valor > this.#saldo){
            throw new Error('Saldo insuficiente');
        }

        if(valor <= 0){
            throw new Error('Valor inválido para saque!');
        }
        this.#saldo -= valor;
    }

    get saldo(){
        return 'Saldo: ' + Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(this.#saldo);
    }

    set saldo(valor){
        if(valor <= 0){
            throw new Error('Valor inválido para saldo');
        }

        this.#saldo = valor;
    }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.saldo);
conta.sacar(50);
console.log(conta.saldo);

conta.saldo = 100;
console.log(conta.saldo);