import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { InteresesService } from 'src/app/services/intereses.service';
import { Intereses } from 'src/app/interfaces/intereses';

@Component({
  selector: 'app-intereses-panel',
  templateUrl: './intereses-panel.component.html',
  styleUrls: ['./intereses-panel.component.css'],
})
export class InteresesPanelComponent implements OnInit {
  formIntereses: FormGroup;
  formAddIntereses: FormGroup;
  formDeleteIntereses: FormGroup;
  @Input() dataUser!: User;

  intereses: Intereses[] = [];

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder,
    private interesesService: InteresesService
  ) {
    this.formIntereses = this.formbuilder.group({
      interes: ['', Validators.required],
    });

    this.formAddIntereses = this.formbuilder.group({
      interes: ['', Validators.required],
    });

    this.formDeleteIntereses = this.formbuilder.group({
      deleteInteres: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listaIntereses();
  }

  listaIntereses(): void {
    this.intereses = JSON.parse(
      localStorage.getItem('userData') || '{}'
    ).interes;
  }

  onInteres(event: Event, id: string) {
    this.interesesService
      .editarIntereses(this.formIntereses.value, id)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
            this.dataUser = userData;
          });
      });
    this.formAddIntereses.reset();
  }

  onAddInteres(event: Event) {
    this.interesesService
      .agregarIntereses(this.formAddIntereses.value)
      .subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
    this.formAddIntereses.reset();
  }

  onDeleteInteres(event: Event, id: string, user_id: string) {
    this.interesesService
      .eliminarIntereses(id, user_id)
      .subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
  }
}
