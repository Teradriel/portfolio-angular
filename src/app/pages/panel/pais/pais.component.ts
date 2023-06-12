import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent implements OnInit {
  @Input() dataUser!: User;
  formPais: FormGroup;
  
  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formPais = this.formbuilder.group({
      pais: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'),],],
    });
  }

  ngOnInit(): void {}

  onPais(event: Event) {
    this.dataUser.pais = this.formPais.value.pais;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
