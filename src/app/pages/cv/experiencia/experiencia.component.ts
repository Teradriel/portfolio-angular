import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private experienciasService: ExperienciasService) {}

  ngOnInit(): void {
    this.listaExperiencias();
  }

  listaExperiencias(): void {
    this.experienciasService.getAllExp().subscribe((data) => {
      this.experiencias = data;
    });
  }
}
