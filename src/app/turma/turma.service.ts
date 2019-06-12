import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Turma } from './models/turma';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  save(turma: Turma): Observable<any>{
    return this.http.post(environment.urlAPI+"turmas/", turma)
    .catch((error: any) => Observable.throw(error));
  }

  update(turma: Turma): Observable<any>{
    return this.http.put(environment.urlAPI+"turmas/"+turma.id, turma)
    .catch((error: any) => Observable.throw(error));
  }
  
  findAll(): Observable<any>{
    return this.http.get(environment.urlAPI+"turmas/")
    .catch((error: any) => Observable.throw(error));
  }

  remove(id: number): Observable<any> {
    return this.http.delete(environment.urlAPI+"turmas/"+id)
    .catch((error: any) => Observable.throw(error));
  }

}
