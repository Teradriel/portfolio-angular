import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {
    this.dataUser = JSON.parse(localStorage.getItem('userData') || '{}');
  }
}
