import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css'],
})
export class TelefonoComponent implements OnInit {
  @Input() dataUser!: User;
  formTelefono: FormGroup;
  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formTelefono = this.formbuilder.group({
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(12),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onTelefono(event: Event) {
    this.dataUser.telefono = this.formTelefono.value.telefono;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
