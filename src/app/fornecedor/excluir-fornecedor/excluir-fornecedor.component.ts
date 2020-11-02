import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-excluir-fornecedor',
  templateUrl: './excluir-fornecedor.component.html',
  styleUrls: ['./excluir-fornecedor.component.css']
})
export class ExcluirFornecedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  excluirForn(form: NgForm){
    const cpfForn = [form.value.cnpjForn];
      /*const excluir = 'DELETE FROM fornecedor WHERE cpf = ', cpfForn */
    }
}
