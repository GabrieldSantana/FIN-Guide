function alternarDisplay(elemento: HTMLElement, visivel?: boolean): void {
    if (visivel !== undefined) {
        elemento.classList.toggle("d-none", !visivel);
        elemento.classList.toggle("d-block", visivel);
    } else {
        elemento.classList.toggle("d-none");
        elemento.classList.toggle("d-block");
    }
}

const elementoVisualizar = document.getElementById("visualizar-adicionar") as HTMLButtonElement;
const elementoTransacao = document.getElementById("sessao-transacao") as HTMLElement;
const elementoExtrato = document.getElementById("sessao-extrato") as HTMLElement;

elementoVisualizar.addEventListener("click", function(event) {
    try {
        event.preventDefault(); // Para não recarregar a página

        // console.log("Visualizar clicado");

        // Verifica o estado atual (se transação está visível)
        const transacaoVisivel = !elementoTransacao.classList.contains("d-none");

        // Alterna as seções: mostra uma, esconde a outra
        alternarDisplay(elementoTransacao, !transacaoVisivel);
        alternarDisplay(elementoExtrato, transacaoVisivel);

    } catch (error) { alert(error.message) }
});

