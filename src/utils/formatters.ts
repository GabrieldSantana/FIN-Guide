// Exportando a função que recebe um número e devolve uma string
export function formatarMoeda(valor: number) : string {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}