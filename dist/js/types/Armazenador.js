import conta from "./Conta";
export class Armazenador {
    constructor() { } //Não permite estanciar a classe forçando a utilização dos métodos estáticos
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor); // COnverte o valor para string
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
    static remover(index) {
        const transacoes = conta.getTransacoes();
        return transacoes.splice(index, 1);
    }
}
