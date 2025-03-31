import { Armazenador } from "../types/Armazenador.js";
import conta from "../types/Conta.js";
import { alternarDisplay } from "../utils/trocarDisplay.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const elementoForm = document.querySelector(".form form");
elementoForm.addEventListener("submit", function (event) {
    try {
        event.preventDefault(); // Para não recarregar a página
        console.log("Clicado");
        // Validação caso passe pela validação do front
        if (!elementoForm.checkValidity()) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        const inputTipoTransacao = elementoForm.querySelector("#tipoTransacao");
        const inputNomeProduto = elementoForm.querySelector("#nomeProduto");
        const inputQuantidade = elementoForm.querySelector("#quantidade");
        const inputValor = elementoForm.querySelector("#valor");
        let tipoTransacao = inputTipoTransacao.value;
        let nomeProduto = inputNomeProduto.value;
        let quantidade = inputQuantidade.valueAsNumber;
        let valor = inputValor.valueAsNumber;
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            nomeProduto: nomeProduto,
            quantidade: quantidade,
            valor: valor
        };
        console.log(`nova transacao: ${novaTransacao.nomeProduto}`);
        conta.registrarTransacao(novaTransacao); //Registrando a nova transação na conta
        SaldoComponent.atualizar(); //Atualizando o saldo
        ExtratoComponent.atualizar(); //Atualizando o extrato
        elementoForm.reset(); // Limpando o formulário
    }
    catch (error) {
        alert(error.message);
    }
});
// Aplica a máscara ao input de valor
// const inputValor = elementoForm.querySelector("#valor") as HTMLInputElement;
// if (inputValor) {
//     inputValor.addEventListener('input', () => {
//         mascaraReal(inputValor);
//     });
//     // Formata o valor inicial (placeholder)
//     inputValor.addEventListener('focus', () => {
//         if (inputValor.value === '' || inputValor.value === 'R$ 0,00') {
//             inputValor.value = 'R$ 0,00';
//         }
//     });
// }
const elementoVisualizar = document.getElementById("visualizar");
const elementoTransacao = document.getElementById("sessao-transacao");
const elementoExtrato = document.getElementById("sessao-extrato");
elementoVisualizar.addEventListener("click", function (event) {
    try {
        event.preventDefault(); // Para não recarregar a página
        console.log("Visualizar clicado");
        // Verifica o estado atual (se transação está visível)
        const transacaoVisivel = !elementoTransacao.classList.contains("d-none");
        // Alterna as seções: mostra uma, esconde a outra
        alternarDisplay(elementoTransacao, !transacaoVisivel);
        alternarDisplay(elementoExtrato, transacaoVisivel);
        // // Ajusta o texto do botão conforme a seção visível
        // elementoVisualizar.textContent = transacaoVisivel ? "Nova Transação" : "Visualizar Extrato";
    }
    catch (error) {
        error.message;
    }
});
// const botaoExcluir = document.getElementById("btn-excluir") as HTMLButtonElement;
// Adiciona eventos aos botões de remover
document.querySelectorAll("#btn-excluir").forEach(button => {
    button.addEventListener("click", (event) => {
        const target = event.currentTarget;
        const index = target.getAttribute("data-index");
        if (index) {
            try {
                const novaListaTransacoes = Armazenador.remover(parseInt(index));
                Armazenador.apagarRegistros("transacoes"); // Limpando a lista de transações
                Armazenador.salvar("transacoes", novaListaTransacoes); // Armazenando a nova lista de transações
                ExtratoComponent.atualizar(); // Atualiza o extrato
                SaldoComponent.atualizar();
            }
            catch (error) {
                const message = error instanceof Error ? error.message : "Erro desconhecido";
                alert(message);
            }
        }
    });
});
