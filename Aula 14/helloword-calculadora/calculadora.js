export class Calculadora{
    static somar(a, b){
        return a + b;
    }

    static subtrair(a, b){
        return a - b;
    }

    static multiplicar(a, b){
        return a * b;
    }

    static dividir(a, b){
        return a / b;
    }


}

export class CalculadoraCientifica extends Calculadora{

    static potencia(a, b){
        return Math.pow(a, b);
    }

    static raiz(a, b){
        return Math.sqrt(a, b);
    }

    static log(a, b){
        return Math.log(a, b);
    }
}

export default Calculadora;