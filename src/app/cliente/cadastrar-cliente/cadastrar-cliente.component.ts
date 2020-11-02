import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  cliente(form: NgForm){
    const infoCliente = {
      nome : [form.value.nomeCliente],
      cpnj : [form.value.cpfCliente],
      endereco : [form.value.enderecoCliente]};

    console.log(infoCliente); }
  // tslint:disable-next-line:typedef
  salvarBD(infoCliente){/*
INSERT INTO cliente(infoCliente)
  */}
}
