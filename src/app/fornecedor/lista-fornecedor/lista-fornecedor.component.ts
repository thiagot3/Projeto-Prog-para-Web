import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.css']
})
export class ListaFornecedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  listarFornecedor(){
    /* "Função para futuramente puxar dados do BD"
    const dadosbd = SELECT * FROM  funcionario

    const nome = nome_BD
    const cnpj = cnpj_BD
    const endereco = endereco_BD
    const produto = produto_BD

  return listar Fornecedor*/}
}
