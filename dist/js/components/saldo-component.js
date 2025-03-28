import conta from "../types/Conta.js";
import { formatarMoeda } from "../utils/formatters.js";
const elementoSaldo = document.getElementById('saldo');
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null)
        elementoSaldo.textContent = formatarMoeda(conta.getSaldo());
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
