var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Armazenador } from "./Armazenador";
import { ValidaCompra, ValidaVenda } from "./Decorators";
import { TipoTransacao } from "./TipoTransacao";
export class Conta {
    nome;
    saldo = Armazenador.obter("saldo") || 0;
    transacoes = Armazenador.obter(("transacoes")) || [];
    constructor() { }
    getSaldo() {
        this.saldo;
    }
    getTransacoes() {
        return this.transacoes;
    }
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.COMPRA) {
            this.comprar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.VENDA) {
            this.vender(novaTransacao.valor);
        }
        this.transacoes.push(novaTransacao);
        Armazenador.salvar("transacoes", JSON.stringify(this.transacoes));
    }
    comprar(valor) {
        this.saldo -= valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }
    vender(valor) {
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo.toString());
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
