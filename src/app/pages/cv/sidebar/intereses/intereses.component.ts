import { Component, OnInit } from '@angular/core';
import { Intereses } from 'src/app/interfaces/intereses';
import { InteresesService } from 'src/app/services/intereses.service';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css'],
})
export class InteresesComponent implements OnInit {
  intereses: Intereses[] = [];

  constructor(private interesesService: InteresesService) {}

  ngOnInit(): void {
    this.listaIntereses();
  }

  listaIntereses(): void {
    this.interesesService.getAllIntereses().subscribe((data) => {
      this.intereses = data;
    });
  }
}
