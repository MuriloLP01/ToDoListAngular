export interface Tarefa{
  descricao: string;
  feita: boolean;
  prioridade: Prioridade;
}

export enum Prioridade {
  alta = 1,
  media = 2,
  baixa = 3
}

