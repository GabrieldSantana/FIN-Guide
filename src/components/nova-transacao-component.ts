import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import { alternarDisplay } from "../utils/trocarDisplay.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";

const elementoForm = document.querySelector(".form form") as HTMLFormElement;

elementoForm.addEventListener("submit", function(event) {
    try {
        event.preventDefault(); // Para não recarregar a página

        console.log("Clicado")

        if(!elementoForm.checkValidity()) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const inputTipoTransacao = elementoForm.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputNomeProduto = elementoForm.querySelector("#nomeProduto") as HTMLInputElement;
        const inputQuantidade = elementoForm.querySelector("#quantidade") as HTMLInputElement;
        const inputValor = elementoForm.querySelector("#valor") as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let nomeProduto: string = inputNomeProduto.value;
        let quantidade: number = inputQuantidade.valueAsNumber;
        let valor: number = inputValor.valueAsNumber;

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            nomeProduto: nomeProduto,
            quantidade: quantidade,
            valor: valor
        }

        // if (!validaTransacao(novaTransacao)) {
        //     throw new Error("Erro: Preencha todos os campos corretamente (nome, quantidade e valor)!");
        // }

        console.log(novaTransacao)

        Conta.registrarTransacao(novaTransacao); //Registrando a nova transação na conta
        SaldoComponent.atualizar(); //Atualizando o saldo
        ExtratoComponent.atualizar(); //Atualizando o extrato
        elementoForm.reset(); // Limpando o formulário

    } catch (error) {
        alert(error.message);
    }
});

const elementoVisualizar = document.getElementById("visualizar") as HTMLButtonElement;
const elementoTransacao = document.getElementById("sessao-transacao") as HTMLElement;
const elementoExtrato = document.getElementById("sessao-extrato") as HTMLElement;

elementoVisualizar.addEventListener("click", function(event) {
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

        alternarDisplay(elementoTransacao);
        alternarDisplay(elementoExtrato);

    } catch (error) { error.message }
});
