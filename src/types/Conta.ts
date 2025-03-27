import { Armazenador } from "./Armazenador";
import { ValidaCompra, ValidaVenda } from "./Decorators";
import { TipoTransacao } from "./TipoTransacao";
import { Transacao } from "./Transacao";

export class Conta {
    protected nome: string
    protected saldo: number = Armazenador.obter<number>("saldo") || 0;
    private transacoes: Transacao[] = Armazenador.obter<Transacao[]>(("transacoes")) || [];

    constructor() {}

    getSaldo() {
        this.saldo;
    }

    getTransacoes() {
        return this.transacoes;
    }

    registrarTransacao(novaTransacao: Transacao): void {
        if(novaTransacao.tipoTransacao == TipoTransacao.COMPRA) {
            this.comprar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else if(novaTransacao.tipoTransacao == TipoTransacao.VENDA) {
            this.vender(novaTransacao.valor);
        }

        this.transacoes.push(novaTransacao);
        Armazenador.salvar("transacoes", JSON.stringify(this.transacoes));
    }

    @ValidaCompra
    comprar(valor:number): void {
        this.saldo -= valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }

    @ValidaVenda
    vender(valor:number): void {
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }
}

const conta = new Conta();
export default conta;