import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-excluir-func',
  templateUrl: './excluir-func.component.html',
  styleUrls: ['./excluir-func.component.css']
})
export class ExcluirFuncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

// tslint:disable-next-line:typedef
excluirFunc(form: NgForm){
  const cpfFunc = [form.value.cpfFunc];
  /*const excluir = 'DELETE FROM funcionario WHERE cpf = ', cpfFunc */
}
}
