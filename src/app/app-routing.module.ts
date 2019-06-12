import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmaComponent } from './turma/turma.component';
import { AlunoComponent } from './aluno/aluno.component';

const routes: Routes = [
  {path: 'turma', component: TurmaComponent},
  {path: 'aluno', component: AlunoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
