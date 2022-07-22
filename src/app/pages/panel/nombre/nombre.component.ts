import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css'],
})
export class NombreComponent implements OnInit {
  @Input() dataUser!: User;
  formNombre: FormGroup;

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formNombre = this.formbuilder.group({
      nombre: [
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

  onNombre(event: Event) {
    this.dataUser.nombre = this.formNombre.value.nombre;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
    this.formNombre.reset();
  }
}
