import { Armazenador } from "../types/Armazenador.js";
import conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import { formatarMoeda } from "../utils/formatters.js";
import SaldoComponent from "./saldo-component.js";

// Elemento Transação Extrato
const elemTransacaoExt: HTMLElement = document.getElementById("extrato");

renderizarExtrato();

function renderizarExtrato(): void {
    const transacoes: Transacao[] = conta.getTransacoes();
    elemTransacaoExt.innerHTML = "";

    let htmlRegistrosTransacoes: string = "";
    let total = 0;

    for (const transacao of transacoes) {
        const sinal = transacao.tipoTransacao === TipoTransacao.COMPRA ? '-' : '+';
        const classeSinal = transacao.tipoTransacao === TipoTransacao.COMPRA ? 'text-danger' : 'text-success';
        const valorTransacao = transacao.quantidade * transacao.valor;
        const multiplicador = transacao.tipoTransacao === TipoTransacao.COMPRA ? -1 : 1;
        total += multiplicador * valorTransacao;

        htmlRegistrosTransacoes += `
            <tr class="table-row">
                <th class="${classeSinal}">${sinal}</th>
                <td>${transacao.nomeProduto}</td>
                <td>${transacao.quantidade}</td>
                <td>${formatarMoeda(transacao.valor)}</td>
                <td><i class="bi bi-trash d-none d-lg-block lixeira" data-nome="${transacao.nomeProduto}"></i></td>
            </tr>
        `;
    }

    htmlRegistrosTransacoes += `
        <tr>
            <th scope="row"></th>
            <td><h5 class="txt-roxo-claro">Total</h5></td>
            <td></td>
            <td><h5 id="valor-total" class="txt-roxo-claro">${formatarMoeda(total)}</h5></td>
            <td></td>
        </tr>
    `;

    elemTransacaoExt.innerHTML = htmlRegistrosTransacoes;

    // Vincular eventos após inserir o HTML
    const lixeiras = elemTransacaoExt.querySelectorAll('.lixeira');
    lixeiras.forEach(lixeira => {
        lixeira.addEventListener('click', (event) => {
            console.log("lixeira clicada");
            const icone = event.target as HTMLElement;
            const linha = icone.closest('tr');
            const nomeProduto = icone.getAttribute('data-nome');
            if (linha) {
                linha.remove();
            }
            Armazenador.removerTransacao(nomeProduto);

            SaldoComponent.atualizar();
        });
    });
}

const ExtratoComponent = {
    atualizar(): void {
        renderizarExtrato()
    }
}

export default ExtratoComponent;