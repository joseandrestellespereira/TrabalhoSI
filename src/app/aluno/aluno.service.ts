import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './models/aluno';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  save(aluno: Aluno): Observable<any>{
    aluno.idTurma = 1;
    return this.http.post(environment.urlAPI+"alunos/", aluno)
    .catch((error: any) => Observable.throw(error));
  }

  update(aluno: Aluno): Observable<any>{
    return this.http.put(environment.urlAPI+"alunos/"+aluno.id, aluno)
    .catch((error: any) => Observable.throw(error));
  }
  
  findAll(): Observable<any>{
    return this.http.get(environment.urlAPI+"alunos/")
    .catch((error: any) => Observable.throw(error));
  }

  remove(id: number): Observable<any> {
    return this.http.delete(environment.urlAPI+"alunos/"+id)
    .catch((error: any) => Observable.throw(error));
  }

  getTurmas(): Observable<any>{
    return this.http.get(environment.urlAPI+"turmas/")
    .catch((error: any) => Observable.throw(error));
  }

}
