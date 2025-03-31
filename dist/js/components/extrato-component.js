import conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { formatarMoeda } from "../utils/formatters.js";
// Elemento Transação Extrato
const elemTransacaoExt = document.getElementById("extrato");
renderizarExtrato();
function renderizarExtrato() {
    const transacoes = conta.getTransacoes();
    elemTransacaoExt.innerHTML = "";
    console.log(transacoes);
    let htmlRegistrosTransacoes = "";
    let total = 0;
    for (const transacao of transacoes) {
        const sinal = transacao.tipoTransacao === TipoTransacao.COMPRA ? '-' : '+';
        const classeSinal = transacao.tipoTransacao === TipoTransacao.COMPRA ? 'text-danger' : 'text-success';
        // Calcula o valor total da transação (quantidade * valor unitário)
        const valorTransacao = (transacao.quantidade) * (transacao.valor);
        const multiplicador = (transacao.tipoTransacao === TipoTransacao.COMPRA ? -1 : 1);
        total += multiplicador * valorTransacao;
        htmlRegistrosTransacoes += `
            <tr class="table-row">
                <th class="${classeSinal}">${sinal}</th>
                <td>${transacao.nomeProduto}</td>
                <td>${transacao.quantidade}</td>
                <td>${formatarMoeda(transacao.valor)}</td>
                <td><button id="btn-excluir" class="btn-excluir btn text-bg-dark"><i class="bi bi-trash3"></i></button></td>
            </tr>
        `;
    }
    // Adiciona a linha de total
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
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    }
};
export default ExtratoComponent;
