document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('button[data-bs-target="#staticBackdrop"]');
    if (addButton) {
        addButton.addEventListener('click', function () {
            console.log("modal informações");
            const mercadoria = document.getElementById('nomeProduto').value;
            const quantidade = document.getElementById('quantidade').value || '0';
            const valor = document.getElementById('valor').value.replace(/[^\d]/g, '');
            let valorConvertido = parseFloat(valor) / 100; // DIvidindo por 100 para obter os centavos
            const valorTotal = valorConvertido * parseInt(quantidade);
            const valorFormatado = `R$ ${valorTotal.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;
            document.getElementById('ModalProduto').textContent = mercadoria || 'Não informado';
            document.getElementById('ModalQuantidade').textContent = quantidade || '0';
            document.getElementById('ModalValor').textContent = valorTotal ? valorFormatado : 'R$ 0,00';
        });
    }
});
