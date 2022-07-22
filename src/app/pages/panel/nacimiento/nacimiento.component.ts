import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-nacimiento',
  templateUrl: './nacimiento.component.html',
  styleUrls: ['./nacimiento.component.css'],
})
export class NacimientoComponent implements OnInit {
  @Input() dataUser!: User;
  formFechaNacimiento: FormGroup;

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formFechaNacimiento = this.formbuilder.group({
      fechaNacimiento: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFechaNacimiento(event: Event) {
    this.dataUser.fechaNacimiento =
      this.formFechaNacimiento.value.fechaNacimiento;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
