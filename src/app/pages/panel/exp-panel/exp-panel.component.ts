import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { Experiencia } from 'src/app/interfaces/experiencia';

@Component({
  selector: 'app-exp-panel',
  templateUrl: './exp-panel.component.html',
  styleUrls: ['./exp-panel.component.css'],
})
export class ExpPanelComponent implements OnInit {
  formExperiencias: FormGroup;
  formAddExperiencia: FormGroup;
  formDeleteExperiencia: FormGroup;
  @Input() dataUser!: User;

  experiencias: Experiencia[] = [];

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder,
    private experienciasService: ExperienciasService
  ) {
    this.formExperiencias = this.formbuilder.group({
      empresa: ['', Validators.required],
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.formAddExperiencia = this.formbuilder.group({
      empresa: ['', Validators.required],
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.formDeleteExperiencia = this.formbuilder.group({
      deleteExp: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listaExperiencias();
  }

  listaExperiencias(): void {
    this.experiencias = JSON.parse(
      localStorage.getItem('userData') || '{}'
    ).exp;
  }

  onAddExperiencia(event: Event): void {
    this.experienciasService
      .agregarExp(this.formAddExperiencia.value)
      .subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
    this.formAddExperiencia.reset();
  }

  onDeleteExperiencia(event: Event, id: string, user_id: string): void {
    this.experienciasService.eliminarExp(id, user_id).subscribe((userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.dataUser = userData;
    });
  }

  onExperiencia(event: Event, id: string): void {
    this.experienciasService
      .editarExp(this.formExperiencias.value, id)
      .subscribe(() => {
        this.personaService.getPersona(this.dataUser.id).subscribe((data) => {
          localStorage.setItem('userData', JSON.stringify(data));
          this.dataUser = data;
        });
      });
    this.formExperiencias.reset();
  }
}
