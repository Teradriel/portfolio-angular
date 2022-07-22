import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'],
})
export class ImagenComponent implements OnInit {
  @Input() dataUser!: User;
  formImagen: FormGroup;

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formImagen = this.formbuilder.group({
      imagen: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onImagen(event: Event) {
    this.dataUser.imagen = this.formImagen.value.imagen;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
