import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncComponent } from './funcionario/lista-func/lista-func.component';
import { ExcluirFuncComponent } from './funcionario/excluir-func/excluir-func.component';
import { CadastrarFornecedorComponent } from './fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { CadastrarClienteComponent } from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor/lista-fornecedor.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { ExcluirClienteComponent } from './cliente/excluir-cliente/excluir-cliente.component';
import { ExcluirFornecedorComponent } from './fornecedor/excluir-fornecedor/excluir-fornecedor.component';
import { ExcluirFornecedorrComponent } from './fornecedor/excluir-fornecedorr/excluir-fornecedorr.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ClienteComponent,
    FornecedorComponent,
    CadastroFuncionarioComponent,
    ListaFuncComponent,
    ExcluirFuncComponent,
    CadastrarFornecedorComponent,
    CadastrarClienteComponent,
    ListaFornecedorComponent,
    ListaClienteComponent,
    ExcluirClienteComponent,
    ExcluirFornecedorComponent,
    ExcluirFornecedorrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
