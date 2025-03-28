import conta from "../types/Conta.js";
import { Transacao } from "../types/Transacao.js";
import { formatarMoeda } from "../utils/formatters.js";

// Elemento Transação Extrato
const elemTransacaoExt: HTMLElement = document.getElementById("sessao-extrato");

renderizarExtrato();

function renderizarExtrato(): void {
    const transacoes: Transacao[] = conta.getTransacoes();
    elemTransacaoExt.innerHTML = "";

    let i = 1;
    let htmlRegistrosTransacoes: string = "";

    for(let transacao of transacoes) {
        htmlRegistrosTransacoes += `
        <tr>
            <th scope="row"> ${i} </th>
            <td><h5 class="txt-roxo-claro"> ${transacao.nomeProduto} </h5></td>
            <td> ${transacao.quantidade} </td>
            <td><h5 class="txt-roxo-claro"> ${formatarMoeda(transacao.valor)} </h5></td>
            <td><button class="btn text-bg-dark"><i class="bi bi-trash3"></i></button></td>
        </tr>
        `;
        i++
    }

    // if(htmlRegistrosTransacoes == "") htmlRegistrosTransacoes = "<div>Não há transações registradas!</div>";

    // elemTransacaoExt.innerHTML = htmlRegistrosTransacoes;
}

const ExtratoComponent = {
    atualizar(): void {
        this.renderizarExtrato()
    }
}

export default ExtratoComponent;