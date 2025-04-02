export function ConverteValorTransacao(valor: string): number | null {

    const valorLimpo = valor.replace(/[^\d,]/g, "").replace(",", ".");
    const valorConvertido = parseFloat(valorLimpo);

    if (isNaN(valorConvertido)) {
        alert("Valor inserido inválido");
        return null;
    }

    console.log(valorConvertido)
    return valorConvertido;
}

export function ValidaNomeProduto(nome: string): boolean {
    if(nome.length > 35)
        throw new Error("O nome do produto não pode exceder 35 caracteres!")

    return true;
}

export function ValidaQuantidadeProduto(quantidade: number): boolean {
    if(quantidade <= 0)
        throw new Error("A quantidade não pode ser inferior ou igual a 0!")
    
    if(quantidade > 999)
        throw new Error("A quantidade do produto não pode exceder 999!")

    return true;
}