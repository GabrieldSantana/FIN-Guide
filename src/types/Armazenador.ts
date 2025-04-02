import { ChaveArmazenador } from "./ChaveArmazenador.js";
import conta from "./Conta.js";

export class Armazenador {
    private constructor() {} //Não permite estanciar a classe forçando a utilização dos métodos estáticos

    static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor); // Converte o valor para string
        localStorage.setItem(chave, valorComoString); // Armazena no localStorage
    }

    static obter<T>(chave: string): T | null {
        const valor = localStorage.getItem(chave); // Recupera o valor do localStorage

        if(valor === null) return null;

        return JSON.parse(valor) as T;
    }

    static apagarRegistros(chave: string): void {
        localStorage.removeItem(chave)
    }

    static removerTransacao(nomeProduto: string): void {
        const transacoes = conta.getTransacoes();
        const novalistaTransacoes = transacoes.filter((transacao) => transacao.nomeProduto !== nomeProduto);
        this.apagarRegistros(ChaveArmazenador.TRANSACOES);
        this.salvar(ChaveArmazenador.TRANSACOES, novalistaTransacoes);
    }
}