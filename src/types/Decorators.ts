export function ValidaCompra(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(valorCompra: number) {
        if(valorCompra <= 0)
            throw new Error("O valor da compra precisa ser maior do que zero!");

        if(valorCompra > this.saldo)
            throw new Error("Seu saldo é insuficiente para realizar a operação!");

        return originalMethod.apply(this, [valorCompra]) // Chama o método original
    }
}

export function ValidaVenda(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(valorVenda: number) {
        if(valorVenda <= 0)
            throw new Error("O valor da Venda precisa ser maior do que zero!");

        return originalMethod.apply(this, [valorVenda]) // Chama o método original
    }
}

export function ValidaValorTransacao(valor: string): number | null {
    const valorLimpo = valor.replace(/[^\d,]/g, "").replace(",", ".");
    const valorConvertido = parseFloat(valorLimpo);

    if (isNaN(valorConvertido)) {
        alert("Valor inserido inválido");
        return null;
    }

    return valorConvertido;
}