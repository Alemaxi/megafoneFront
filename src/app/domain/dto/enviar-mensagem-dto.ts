import { DuracaoMensagemEnum } from "src/app/shared/enum/duracao-mensagem-enum";

export class EnviarMensagemDto{
    Assunto: string | undefined;
    Texto: string | undefined;
    urlRecurso: string | undefined;
    megafoneId: number | undefined;
    duracao: DuracaoMensagemEnum | undefined;
}