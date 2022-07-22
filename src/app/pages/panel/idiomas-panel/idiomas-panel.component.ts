import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { IdiomasService } from 'src/app/services/idiomas.service';
import { Idioma } from 'src/app/interfaces/idioma';

@Component({
  selector: 'app-idiomas-panel',
  templateUrl: './idiomas-panel.component.html',
  styleUrls: ['./idiomas-panel.component.css'],
})
export class IdiomasPanelComponent implements OnInit {
  @Input() dataUser!: User;
  formIdiomas: FormGroup;
  formAddIdioma: FormGroup;
  formDeleteIdioma: FormGroup;

  idiomas: Idioma[] = [];

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder,
    private idiomasService: IdiomasService
  ) {
    this.formIdiomas = this.formbuilder.group({
      idioma: ['', Validators.required],
      nivel: ['', Validators.required],
    });

    this.formAddIdioma = this.formbuilder.group({
      idioma: ['', Validators.required],
      nivel: ['', Validators.required],
    });

    this.formDeleteIdioma = this.formbuilder.group({
      deleteIdioma: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listaIdiomas();
  }

  listaIdiomas(): void {
    this.idiomas = JSON.parse(localStorage.getItem('userData') || '{}').idioma;
  }

  onIdioma(event: Event, id: string) {
    this.idiomasService
      .editarIdiomas(this.formIdiomas.value, id)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
            this.dataUser = userData;
          });
      });
    this.formAddIdioma.reset();
  }

  onAddIdioma(event: Event) {
    this.idiomasService
      .agregarIdiomas(this.formAddIdioma.value)
      .subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
    this.formAddIdioma.reset();
  }

  onDeleteIdioma(event: Event, id: string, user_id: string) {
    this.idiomasService.eliminarIdiomas(id, user_id).subscribe((userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.dataUser = userData;
    });
  }
}
