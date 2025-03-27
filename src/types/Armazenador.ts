export class Armazenador {
    private constructor() {} //Não permite estanciar a classe forçando a utilização dos métodos estáticos

    static salvar<T>(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    static obter<T>(chave: string): T | null {
        const valor = localStorage.getItem(chave);

        if(valor === null) return null;

        return JSON.parse(valor) as T;
    }
}