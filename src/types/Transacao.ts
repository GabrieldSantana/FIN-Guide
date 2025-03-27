import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    nomeProduto: string,
    quantidade: number,
    valor: number;
}