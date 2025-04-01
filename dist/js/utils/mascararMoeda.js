// export function mascaraReal(input: HTMLInputElement): void {
//     // Remove tudo que não for dígito
//     let valor = input.value.replace(/\D/g, '');
//     // Se o valor estiver vazio, define como 0
//     if (valor === '') {
//         valor = '0';
//     }
//     // Converte para número (em centavos)
//     const numero = parseInt(valor) / 100;
//     // Formata como moeda brasileira
//     const formatado = numero.toLocaleString('pt-BR', {
//         style: 'currency',
//         currency: 'BRL',
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2
//     });
//     // Atualiza o valor do input
//     input.value = formatado;
// }
