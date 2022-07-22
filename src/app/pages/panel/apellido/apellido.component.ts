import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-apellido',
  templateUrl: './apellido.component.html',
  styleUrls: ['./apellido.component.css'],
})
export class ApellidoComponent implements OnInit {
  formApellido: FormGroup;
  @Input() dataUser!: User;
  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formApellido = this.formbuilder.group({
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onApellido(event: Event) {
    this.dataUser.apellido = this.formApellido.value.apellido;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
    this.formApellido.reset();
  }
}
