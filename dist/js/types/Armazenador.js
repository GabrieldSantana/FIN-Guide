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
    // static deletar<T>(chave: string, id: number, transacoes: any): T | null {
    //     const index = transacoes.findIndex((item: any) => item.id === id);
    //     if (index === -1) {
    //         throw new Error("Item não encontrado");
    //     }
    //     localStorage.removeItem(chave); // Remove o item do localStorage
    //     const novaListaTransacoes = transacoes.splice(index, 1);
    //     return novaListaTransacoes;
    // }
    static apagarRegistros(chave) {
        localStorage.removeItem(chave);
    }
    static remover(index) {
        const transacoes = conta.getTransacoes();
        return transacoes.splice(index, 1);
    }
}
