import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from './models/aluno';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AlunoService } from './aluno.service';
import { Turma } from './../turma/models/turma';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  displayedColumns: string[] = ['actionsColumn','codigo', 'nome', 'idade', 'idTurma'];
  aluno: Aluno;
  teste: any;
  alunos: any;
  dataSource: any;
  edit: boolean;
  turmas: Turma[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.aluno = new Aluno();
    this.alunos = new Array<Aluno>();
    this.listAll();
    this.alunoService.getTurmas().subscribe(response => {
      this.turmas = response.content;
    })
  }

  listAll(){
    this.alunoService.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(alunos: any){
    this.dataSource = new MatTableDataSource<Aluno>(alunos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  salvar(){
    this.alunoService.save(this.aluno).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.aluno = new Aluno();
  }

  excluir(alunoId: number){
    this.alunoService.remove(alunoId).subscribe(response => {
      if (response)
        this.listAll();
    }, error => {
      console.log(error);
    });
  }

  markEdit(aluno: any){
    this.aluno = aluno;
    this.edit = true;
  }

  atualizar(){
    this.alunoService.update(this.aluno).subscribe(response => {
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.aluno = new Aluno();
      }        
    }, error => {
      console.log(error);
    });
  }

}
