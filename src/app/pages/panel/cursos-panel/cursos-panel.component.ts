import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-cursos-panel',
  templateUrl: './cursos-panel.component.html',
  styleUrls: ['./cursos-panel.component.css'],
})
export class CursosPanelComponent implements OnInit {
  @Input() dataUser!: User;
  formCursos: FormGroup;
  formAddCurso: FormGroup;
  formDeleteCurso: FormGroup;

  cursos: Curso[] = [];

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder,
    private cursosService: CursosService
  ) {
    this.formCursos = this.formbuilder.group({
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.formAddCurso = this.formbuilder.group({
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.formDeleteCurso = this.formbuilder.group({
      deleteCurso: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listaCursos();
  }

  listaCursos(): void {
    this.cursos = JSON.parse(localStorage.getItem('userData') || '{}').curso;
  }

  onCurso(event: Event, id: string) {
    this.cursosService.editarCurso(this.formCursos.value, id).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
    });
    this.formCursos.reset();
  }

  onAddCurso(event: Event) {
    this.cursosService
      .agregarCurso(this.formAddCurso.value)
      .subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
    this.formAddCurso.reset();
  }

  onDeleteCurso(event: Event, id: string, user_id: string) {
    this.cursosService.eliminarCurso(id, user_id).subscribe((userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.dataUser = userData;
    });
  }
}
