import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styles: [
  ]
})
export class CadastroFuncionarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  funcionarios(form: NgForm){
    const infoFuncionario = {
      nome : [form.value.nomeFunc],
      cpf : [form.value.cpfFunc],
      endereco : [form.value.enderecoFunc],
      salario : [form.value.salFunc]};

    console.log(infoFuncionario); }
// tslint:disable-next-line:typedef
salvarBD(infoFuncionario){
/* INSERT INTO funcionario (infoFuncionario)*/
}
}

