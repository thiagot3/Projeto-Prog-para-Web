import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.css']
})
export class CadastrarFornecedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  fornecedor(form: NgForm){
    const infoFornecedor = {
      nome : [form.value.nomeFunc],
      cpnj : [form.value.cpnjFornecedor],
      endereco : [form.value.enderecoFornecedor],
      produto : [form.value.produto]};

    console.log(infoFornecedor); }
  // tslint:disable-next-line:typedef
  salvarBD(infoFornecedor){/*
INSERT INTO fornecedor(infoFornecedor)
  */}
}
