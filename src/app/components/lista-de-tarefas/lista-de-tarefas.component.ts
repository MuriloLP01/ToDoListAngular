import { Component, OnInit } from '@angular/core';
import { Tarefa, Prioridade } from 'src/app/models/Tarefa'

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})

export class ListaDeTarefasComponent implements OnInit {

  tarefas:Tarefa[]=[
    {
      descricao: "Estudar Angular",
      feita: false,
      prioridade: Prioridade.alta
    },
    {
      descricao: "Mexer na dissertação",
      feita: false,
      prioridade: Prioridade.alta
    },
    {
      descricao: "Caminhar",
      feita: false,
      prioridade: Prioridade.baixa
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
