import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.css']
})
export class ExcluirClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  excluirCliente(form: NgForm){
    const cpfCliente = [form.value.cpfFunc];

      /*const excluir = 'DELETE FROM fornecedor WHERE cpf = ', cpfCliente */
    }
}
