import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private mensajesService: MensajesService,
    private autenticacionService: AutenticacionService
  ) {
    this.form = this.formbuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(1)]],
      telefono: ['', [Validators.minLength(1)]],
      web: ['', [Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {}

  setMensaje(mensaje: Mensaje) {
    this.form.patchValue({
      nombre: mensaje.nombre,
      email: mensaje.email,
      telefono: mensaje.telefono,
      web: mensaje.web,
      mensaje: mensaje.mensaje,
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      if (this.autenticacionService.NotLogged) {
        this.mensajesService
          .enviarMensaje(this.form.value)
          .subscribe((data) => {
            console.log('mensaje enviado');
            this.form.reset();
          });
      } else {
        this.mensajesService
          .enviarMensajeId(this.form.value, this.autenticacionService.currentId)
          .subscribe((data) => {
            console.log('mensaje enviado');
            this.form.reset();
          });
      }
    } else {
      console.log('form no valido');
    }
  }
}
