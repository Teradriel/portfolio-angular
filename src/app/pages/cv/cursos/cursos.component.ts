import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.listaCursos();
  }

  listaCursos(): void {
    this.cursosService.getAllCursos().subscribe((data) => {
      this.cursos = data;
    });
  }
}
