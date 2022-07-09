import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-side',
  templateUrl: './intro-side.component.html',
  styleUrls: ['./intro-side.component.css'],
})
export class IntroSideComponent implements OnInit {
  nombre: String = '';
  apellido: String = '';
  email: String = '';
  telefono: String = '';
  imagen: String = '';

  constructor() {}

  ngOnInit(): void {
    this.nombre = JSON.parse(localStorage.getItem('userData') || '{}').nombre;
    this.apellido = JSON.parse(
      localStorage.getItem('userData') || '{}'
    ).apellido;
    this.email = JSON.parse(localStorage.getItem('userData') || '{}').email;
    this.telefono = JSON.parse(
      localStorage.getItem('userData') || '{}'
    ).telefono;
    this.imagen = JSON.parse(localStorage.getItem('userData') || '{}').imagen;
  }
}
