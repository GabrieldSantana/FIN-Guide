var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Armazenador } from "./Armazenador.js";
import { ValidaCompra, ValidaVenda } from "./Decorators.js";
import { TipoTransacao } from "./TipoTransacao.js";
export class Conta {
    saldo = Armazenador.obter("saldo") ?? 2000; // definindo o saldo de acordo com o que está armazenado no localStorage
    transacoes = Armazenador.obter("transacoes") ?? [];
    constructor() { }
    getSaldo() {
        return this.saldo;
    }
    getTransacoes() {
        return this.transacoes;
    }
    // Método para registrar transacao, recebendo um objeto Transacao
    registrarTransacao(novaTransacao) {
        // Verificando se o tipo da transacao é compra ou venda
        if (novaTransacao.tipoTransacao == TipoTransacao.COMPRA) {
            this.comprar(novaTransacao.valor * novaTransacao.quantidade); // Realizando a compra de acordo com a quantidade
            console.log("comprado");
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.VENDA) {
            this.vender(novaTransacao.valor * novaTransacao.quantidade);
            console.log("vendido");
        }
        this.transacoes.push(novaTransacao); // Armazenando a transacao na lista de transações
        Armazenador.salvar("transacoes", this.transacoes); // Salvando a nova transacao no localStorage
    }
    comprar(valor) {
        try {
            this.saldo -= valor; //subtraindo o valor da compra do saldo
            Armazenador.salvar("saldo", this.saldo); //Armazenando o novo saldo no localStorage
        }
        catch (error) {
            alert(error.message);
        }
        return true;
    }
    vender(valor) {
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo);
        return true;
    }
}
__decorate([
    ValidaCompra //Decorator de validacao
], Conta.prototype, "comprar", null);
__decorate([
    ValidaVenda
], Conta.prototype, "vender", null);
const conta = new Conta(); // Estanciando uma nova conta
export default conta; // Exportando a conta para utilizar seus métodos
