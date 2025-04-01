import { Armazenador } from "./Armazenador.js";
import { ValidaCompra, ValidaVenda } from "./Decorators.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

export class Conta {
    protected saldo: number = Armazenador.obter<number>("saldo") ?? 2000;
    private transacoes: Transacao[] = Armazenador.obter<Transacao[]>("transacoes") ?? [];

    constructor() {}

    getSaldo(): number {
        return this.saldo;
    }

    getTransacoes(): Transacao[] {
        return this.transacoes;
    }

    registrarTransacao(novaTransacao: Transacao): void {
        if(novaTransacao.tipoTransacao == TipoTransacao.COMPRA) {
            this.comprar(novaTransacao.valor * novaTransacao.quantidade);
            console.log("comprado")
        }
        else if(novaTransacao.tipoTransacao == TipoTransacao.VENDA) {
            this.vender(novaTransacao.valor * novaTransacao.quantidade);
            console.log("vendido")
        }

        this.transacoes.push(novaTransacao);
        Armazenador.salvar("transacoes", this.transacoes);
    }

    @ValidaCompra
    comprar(valor:number): boolean {
        try {
            this.saldo -= valor;
            Armazenador.salvar("saldo", this.saldo);
        }
        catch (error) {
        alert(error.message);
    }
        return true;
    }

    @ValidaVenda
    vender(valor:number): boolean {
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo);
        return true;
    }
}

const conta = new Conta();
export default conta;