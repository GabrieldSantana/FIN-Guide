import { Armazenador } from "./Armazenador.js";
import { ValidaCompra, ValidaVenda } from "./Decorators.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

export class Conta {
    protected saldo: number = Armazenador.obter<number>("saldo") ?? 2000; // definindo o saldo de acordo com o que está armazenado no localStorage
    private transacoes: Transacao[] = Armazenador.obter<Transacao[]>("transacoes") ?? [];

    constructor() {}

    getSaldo(): number {
        return this.saldo;
    }

    getTransacoes(): Transacao[] {
        return this.transacoes;
    }


    // Método para registrar transacao, recebendo um objeto Transacao
    registrarTransacao(novaTransacao: Transacao): void {

        // Verificando se o tipo da transacao é compra ou venda
        if(novaTransacao.tipoTransacao == TipoTransacao.COMPRA) {
            this.comprar(novaTransacao.valor * novaTransacao.quantidade); // Realizando a compra de acordo com a quantidade
            console.log("comprado")
        }
        else if(novaTransacao.tipoTransacao == TipoTransacao.VENDA) {
            this.vender(novaTransacao.valor * novaTransacao.quantidade);
            console.log("vendido")
        }

        this.transacoes.push(novaTransacao); // Armazenando a transacao na lista de transações
        Armazenador.salvar("transacoes", this.transacoes); // Salvando a nova transacao no localStorage
    }

    @ValidaCompra //Decorator de validacao
    comprar(valor:number): boolean {
        try {
            this.saldo -= valor; //subtraindo o valor da compra do saldo
            Armazenador.salvar("saldo", this.saldo); //Armazenando o novo saldo no localStorage
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

const conta = new Conta(); // Estanciando uma nova conta
export default conta; // Exportando a conta para utilizar seus métodos