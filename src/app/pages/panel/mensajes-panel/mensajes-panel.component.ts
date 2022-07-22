import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensajes-panel',
  templateUrl: './mensajes-panel.component.html',
  styleUrls: ['./mensajes-panel.component.css'],
})
export class MensajesPanelComponent implements OnInit {
  @Input() dataUser!: User;
  formMensajes: FormGroup;

  mensajes: Mensaje[] = [];

  constructor(
    private personaService: PersonaService,
    private mensajesService: MensajesService,
    private formbuilder: FormBuilder
  ) {
    this.formMensajes = this.formbuilder.group({
      mensaje: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      web: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listaMensajes();
  }
  listaMensajes(): void {
    this.mensajes = JSON.parse(
      localStorage.getItem('userData') || '{}'
    ).mensaje;
  }
}
