import conta from "../types/Conta.js";
import { formatarMoeda } from "../utils/formatters.js";
const elementoSaldo = document.getElementById('saldo');
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null)
        elementoSaldo.textContent = formatarMoeda(conta.getSaldo()); // Altera o html com o saldo convertido
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
