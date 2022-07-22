import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-estado-civil',
  templateUrl: './estado-civil.component.html',
  styleUrls: ['./estado-civil.component.css'],
})
export class EstadoCivilComponent implements OnInit {
  @Input() dataUser!: User;
  formEstadoCivil: FormGroup;
  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formEstadoCivil = this.formbuilder.group({
      estadoCivil: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onEstadoCivil(event: Event) {
    this.dataUser.estadoCivil = this.formEstadoCivil.value.estadoCivil;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
