import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/interfaces/educacion';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  @Input() dataUser!: User;
  formEducacion: FormGroup;
  formAddEducacion: FormGroup;
  formDeleteEducacion: FormGroup;

  estudios: Educacion[] = [];

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder,
    private educacionService: EducacionService
  ) {
    this.formEducacion = this.formbuilder.group({
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      institucion: ['', Validators.required],
    });

    this.formAddEducacion = this.formbuilder.group({
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      institucion: ['', Validators.required],
    });

    this.formDeleteEducacion = this.formbuilder.group({
      deleteEdu: ['', Validators.required],
    });
  }

  listaEstudios(): void {
    this.estudios = JSON.parse(
      localStorage.getItem('userData') || '{}'
    ).estudio;
  }

  ngOnInit(): void {
    this.listaEstudios();
  }

  onEducacion(event: Event, id: string) {
    this.educacionService
      .editarEducacion(this.formEducacion.value, id)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
          });
      });
    this.formEducacion.reset();
  }

  onAddEducacion(event: Event) {
    this.educacionService
      .agregarEducacion(this.formAddEducacion.value)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
          });
      });
    this.formAddEducacion.reset();
  }

  onDeleteEducacion(event: Event, id: string, user_id: string) {
    this.educacionService
      .eliminarEducacion(id, user_id)
      .subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
  }
}
