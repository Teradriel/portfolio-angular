import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
})
export class CiudadComponent implements OnInit {
  @Input() dataUser!: User;
  formCiudad: FormGroup;
  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formCiudad = this.formbuilder.group({
      ciudad: [
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

  onCiudad(event: Event) {
    this.dataUser.ciudad = this.formCiudad.value.ciudad;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
