import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  estudios: Educacion[] = [];

  constructor(private educacionService: EducacionService) {}

  ngOnInit(): void {
    this.listaEstudios();
  }

  listaEstudios(): void {
    this.educacionService.getAllEducacion().subscribe((data) => {
      this.estudios = data;
    });
  }
}
