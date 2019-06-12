import { Component, OnInit, ViewChild } from '@angular/core';
import { Turma } from './models/turma';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TurmaService } from './turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  displayedColumns: string[] = ['actionsColumn','codigo', 'curso', 'turno'];
  turma: Turma;
  teste: any;
  turmas: any;
  dataSource: any;
  edit: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private turmaService: TurmaService) { }

  ngOnInit() {
    this.turma = new Turma();
    this.turmas = new Array<Turma>();
    this.listAll();
  }

  listAll(){
    this.turmaService.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(turmas: any){
    this.dataSource = new MatTableDataSource<Turma>(turmas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  salvar(){
    this.turmaService.save(this.turma).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.turma = new Turma();
  }

  excluir(turmaId: number){
    this.turmaService.remove(turmaId).subscribe(response => {
      if (response)
        this.listAll();
    }, error => {
      console.log(error);
    });
  }

  markEdit(turma: any){
    this.turma = turma;
    this.edit = true;
  }

  atualizar(){
    this.turmaService.update(this.turma).subscribe(response => {
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.turma = new Turma();
      }        
    }, error => {
      console.log(error);
    });
  }

}
