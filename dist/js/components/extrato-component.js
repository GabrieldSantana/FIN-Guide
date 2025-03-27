import conta from "../types/Conta";
import { formatarMoeda } from "../utils/formatters";
// Elemento Transação Extrato
const elemTransacaoExt = document.querySelector(".extrato");
renderizarExtrato();
function renderizarExtrato() {
    const transacoes = conta.getTransacoes();
    elemTransacaoExt.innerHTML = "";
    let i = 1;
    let htmlRegistrosTransacoes = "";
    for (let transacao of transacoes) {
        htmlRegistrosTransacoes += `
        <tr>
            <th scope="row"> ${i} </th>
            <td><h5 class="txt-roxo-claro"> ${transacao.nomeProduto} </h5></td>
            <td> ${transacao.quantidade} </td>
            <td><h5 class="txt-roxo-claro"> ${formatarMoeda(transacao.valor)} </h5></td>
            <td><button class="btn text-bg-dark"><i class="bi bi-trash3"></i></button></td>
        </tr>
        `;
        i++;
    }
    if (htmlRegistrosTransacoes == "")
        htmlRegistrosTransacoes = "<div>Não há transações registradas!</div>";
    elemTransacaoExt.innerHTML = htmlRegistrosTransacoes;
}
// const ExtratoComponent = {
//     atualizar(): void {
//         renderizarExtrado()
//     }
// }
// export default ExtratoComponent;
