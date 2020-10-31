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

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ClienteComponent,
    FornecedorComponent,
    CadastroFuncionarioComponent,
    ListaFuncComponent,
    ExcluirFuncComponent
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
