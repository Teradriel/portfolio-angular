import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css'],
})
export class DireccionComponent implements OnInit {
  @Input() dataUser!: User;
  formDireccion: FormGroup;
  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formDireccion = this.formbuilder.group({
      direccion: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onDireccion(event: Event) {
    this.dataUser.direccion = this.formDireccion.value.direccion;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
