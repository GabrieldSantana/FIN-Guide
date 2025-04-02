import Conta from "../types/Conta.js";
import { ConverteValorTransacao, ValidaNomeProduto, ValidaQuantidadeProduto } from "../utils/validators.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const elementoForm = document.querySelector(".form form");
elementoForm.addEventListener("submit", function (event) {
    try {
        event.preventDefault(); // Para não recarregar a página
        console.log("Clicado");
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
        let valor = inputValor.value; // Armazenado como string para validações
        // Estanciando uma nova transação para ser usada dentro da condicional
        let novaTransacao;
        let valorConvertido = ConverteValorTransacao(valor); //Convertendo o valor em float
        // Atribuindo os valores do objeto novaTransacao caso o seu nome e sua quantidade seja válida
        if (ValidaNomeProduto(nomeProduto) && ValidaQuantidadeProduto(quantidade)) {
            novaTransacao = {
                tipoTransacao: tipoTransacao,
                nomeProduto: nomeProduto,
                quantidade: quantidade,
                valor: valorConvertido
            };
        }
        else {
            throw new Error("Valor inserido inválido!");
        }
        Conta.registrarTransacao(novaTransacao); //Registrando a nova transação na conta
        SaldoComponent.atualizar(); //Atualizando o saldo
        ExtratoComponent.atualizar(); //Atualizando o extrato
        elementoForm.reset(); // Limpando o formulário
    }
    catch (error) {
        alert(error.message);
    }
});
