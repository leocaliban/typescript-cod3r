type Par<C, V> = { chave: C, valor: V };

class Mapa<C, V>{
    itens: Array<Par<C, V>> = new Array<Par<C, V>>();

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }

    inserir(par: Par<C, V>) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        } else {
            this.itens.push(par);
        }
    }

    limpar() {
        this.itens = new Array<Par<C, V>>();
    }

    imprimir() {
        console.log(this.itens);
    }
}

const mapa = new Mapa<number, string>();