import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmaComponent } from './turma/turma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatSelectModule} from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    TurmaComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatTableModule, 
    FormsModule, 
    MatIconModule,
    MatSelectModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
