interface Unidade {
    nome: string;
}

function teste<T>(objeto: T): T {
    return objeto;
}

// Atribuição de tipo tardia
const u: Unidade = { nome: 'JUNIT' };
console.log(teste<Unidade>(u).nome);

// Generics com array
const notas: Array<number> = [7, 8, 5];

// Generics com classe
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) { }
    abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, string>{
    executar(): string {
        return `Resultado: ${this.operando1 + this.operando2}`;
    }
}
console.log(new SomaBinaria(10, 5).executar());