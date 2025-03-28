export function ValidaCompra(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorCompra) {
        if (valorCompra <= 0)
            throw new Error("O valor da compra precisa ser maior do que zero!");
        if (valorCompra > this.saldo)
            throw new Error("Seu saldo é insuficiente para realizar a operação!");
        return originalMethod.apply(this, [valorCompra]); // Chama o método original
    };
}
export function ValidaVenda(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorVenda) {
        if (valorVenda <= 0)
            throw new Error("O valor da Venda precisa ser maior do que zero!");
        return originalMethod.apply(this, [valorVenda]); // Chama o método original
    };
}
// // Função auxiliar para validar uma transação
// export function validaTransacao(transacao: Transacao): boolean {
//     if (!transacao.nomeProduto || transacao.nomeProduto.trim() === "") {
//         return false; // Nome do produto ausente ou vazio
//     }
//     if (transacao.quantidade === undefined || transacao.quantidade === null || isNaN(transacao.quantidade)) {
//         return false; // Quantidade ausente ou inválida
//     }
//     if (transacao.valor === undefined || transacao.valor === null || isNaN(transacao.valor)) {
//         return false; // Valor ausente ou inválido
//     }
//     return true; // Todos os campos estão preenchidos corretamente
// }
