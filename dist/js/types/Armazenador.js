import { ChaveArmazenador } from "./ChaveArmazenador.js";
import conta from "./Conta.js";
export class Armazenador {
    constructor() { } //Não permite estanciar a classe forçando a utilização dos métodos estáticos
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor); // Converte o valor para string
        localStorage.setItem(chave, valorComoString); // Armazena no localStorage
    }
    static obter(chave) {
        const valor = localStorage.getItem(chave); // Recupera o valor do localStorage
        if (valor === null)
            return null;
        return JSON.parse(valor);
    }
    static apagarRegistros(chave) {
        localStorage.removeItem(chave);
    }
    static removerTransacao(nomeProduto) {
        const transacoes = conta.getTransacoes();
        const novalistaTransacoes = transacoes.filter((transacao) => transacao.nomeProduto !== nomeProduto);
        this.apagarRegistros(ChaveArmazenador.TRANSACOES);
        this.salvar(ChaveArmazenador.TRANSACOES, novalistaTransacoes);
    }
}
