import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';


const routes: Routes = [
  {path: 'funcionario', component: FuncionarioComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'fornecedor', component: FornecedorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
