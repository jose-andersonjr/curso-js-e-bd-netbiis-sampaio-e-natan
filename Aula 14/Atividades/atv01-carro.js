class Carro{
    marca;
    modelo;
    #velocidade = 0;

    #aumentarVelocidade(incremento){
        if(incremento <= 0){
            throw new Error('O carro não pode acelerar diminuindo a velocidade');
        }
        this.#velocidade += incremento;
    }

    #diminuirVelocidade(decremento){
        if(decremento <= 0){
            throw new Error('O decremento deve ser positivo para frear');
        }
        this.#velocidade -= decremento;
    }

    acelerar(incremento){
        return this.#aumentarVelocidade(incremento);
    }

    frear(decremento){
        return this.#diminuirVelocidade(decremento);
    }
        
    get velocidade(){
        return `O carro está na velocidade de ${this.#velocidade} km/h`;
    }

}

let carro = new Carro();
console.log(carro.velocidade);
carro.acelerar(10);
console.log(carro.velocidade);
carro.frear(5);
console.log(carro.velocidade);