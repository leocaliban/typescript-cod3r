class Produto {
    private _peso: number = 5;

    constructor(
        public nome: string,
        public valor: number,
        public desconto: number = 0
    ) { }

    public descricao(): string {
        return `${this.nome}`;
    }

    public descontar(): number {
        return this.valor * (1 - this.desconto);
    }

    public get peso(): number {
        return this._peso;
    }

    public set peso(valor: number) {
        this._peso = valor;
    }
}

const Produto_01 = new Produto('Tesoura', 25, 0.2);
const Produto_02 = new Produto('Caderno', 15);

class Faca extends Produto {

    constructor(public valor: number) {
        super('Faca', valor, 0)
    }
}

const Produto_03 = new Faca(15);