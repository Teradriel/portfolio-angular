import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.component.html',
  styleUrls: ['./sexo.component.css'],
})
export class SexoComponent implements OnInit {
  @Input() dataUser!: User;
  formSexo: FormGroup;
  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formSexo = this.formbuilder.group({
      sexo: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSexo(event: Event) {
    this.dataUser.sexo = this.formSexo.value.sexo;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
