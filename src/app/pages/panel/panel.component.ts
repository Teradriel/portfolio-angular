import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  userId = '';

  dataUser: User = {
    id: '',
    nombre: '',
    apellido: '',
    telefono: '',
    pais: '',
    ciudad: '',
    direccion: '',
    fechaNacimiento: '',
    sexo: '',
    estadoCivil: '',
    intro: '',
    imagen: '',
    username: '',
    password: '',
    email: '',
    estudio: {
      id: '',
      titulo: '',
      fechaFin: '',
      fechaInicio: '',
      institucion: '',
    },
    idioma: { id: '', idioma: '', nivel: '' },
    interes: { id: '', interes: '' },
    skill: { id: '', skill: '', nivel: 0 },
    curso: { id: '', titulo: '', fecha: '', lugar: '', descripcion: '' },
    exp: {
      id: '',
      titulo: '',
      fechaFin: '',
      fechaInicio: '',
      empresa: '',
      descripcion: '',
    },
    mens: { id: '', mensaje: '', web: '', nombre: '', telefono: '', email: '' },
    roles: { id: '', name: '' },
  };

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('currentUser') || '{}').id;
    this.personaService
      .getPersona(JSON.parse(this.userId))
      .subscribe((persona) => {
        this.dataUser = persona;
        localStorage.setItem('userData', JSON.stringify(persona));
      });
    /* this.dataUser = JSON.parse(localStorage.getItem('userData') || '{}'); */
  }

  /* getAll() {
    this.userId = JSON.parse(localStorage.getItem('currentUser') || '{}').id;
    this.personaService.getPersona(this.userId).subscribe((persona) => {
      localStorage.setItem('userData', JSON.stringify(persona));
    }); 
  }*/
}
