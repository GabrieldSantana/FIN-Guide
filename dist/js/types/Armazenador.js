export class Armazenador {
    constructor() { } //Não permite estanciar a classe forçando a utilização dos métodos estáticos
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    static obter(chave) {
        const valor = localStorage.getItem(chave);
        if (valor === null)
            return null;
        return JSON.parse(valor);
    }
}
