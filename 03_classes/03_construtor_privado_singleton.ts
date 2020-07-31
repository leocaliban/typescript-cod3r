class Unica {
    private static instance: Unica = new Unica;
    private constructor() { }

    static getInstance(): Unica {
        return Unica.instance;
    }

    executar() {
        return 'Pronto';
    }
}

console.log(Unica.getInstance().executar());