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
    saldo = Armazenador.obter("saldo") ?? 2000;
    transacoes = Armazenador.obter("transacoes") ?? [];
    constructor() { }
    getSaldo() {
        return this.saldo;
    }
    getTransacoes() {
        return this.transacoes;
    }
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.COMPRA) {
            this.comprar(novaTransacao.valor * novaTransacao.quantidade);
            console.log("comprado");
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.VENDA) {
            this.vender(novaTransacao.valor * novaTransacao.quantidade);
            console.log("vendido");
        }
        this.transacoes.push(novaTransacao);
        Armazenador.salvar("transacoes", this.transacoes);
    }
    comprar(valor) {
        try {
            this.saldo -= valor;
            Armazenador.salvar("saldo", this.saldo);
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
    ValidaCompra
], Conta.prototype, "comprar", null);
__decorate([
    ValidaVenda
], Conta.prototype, "vender", null);
const conta = new Conta();
export default conta;
