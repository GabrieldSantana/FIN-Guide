// Exportando a função que recebe um número e devolve uma string
export function formatarMoeda(valor) {
    return (valor ?? 0).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
}
