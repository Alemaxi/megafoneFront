import { DuracaoMensagemEnum } from "src/app/shared/enum/duracao-mensagem-enum";

export class CriarMensagemDTO {
    assunto: string | undefined;
    texto: string | undefined;
    MegafoneId: number | undefined;
    duracao: DuracaoMensagemEnum | undefined;
}