import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/interfaces/idioma';
import { IdiomasService } from 'src/app/services/idiomas.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css'],
})
export class IdiomasComponent implements OnInit {
  idiomas: Idioma[] = [];

  constructor(private idiomasService: IdiomasService) {}

  ngOnInit(): void {
    this.listaIdiomas();
  }

  listaIdiomas(): void {
    this.idiomasService.getAllIdiomas().subscribe((data) => {
      this.idiomas = data;
    });
  }
}
