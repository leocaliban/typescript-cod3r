const usuarioLogado = {
    nome: 'Jack Bauer',
    email: 'jk@ctu.com',
    admin: true
}

type Construtor = { new(...args: any[]): {} };

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
}

function perfilAdmin<T extends Construtor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            } else {
                console.log('Alteração realizada.');
            }
        }
    }
}

new MudancaAdministrativa();


class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
cc.sacar(5248.57)
cc.sacar(0.1)
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }
console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function (): any {
            return alvo["_" + nomePropriedade]
        },
        set: function (valor: any): void {
            if (valor < 0) {
                throw new Error('Saldo Inválido')
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}

function paramInfo(alvo: any, nomeMetodo: string,
    indiceParam: number) {
    console.log(`Alvo: ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`Índice Param: ${indiceParam}`)
}