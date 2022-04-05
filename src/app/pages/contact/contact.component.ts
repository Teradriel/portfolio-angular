import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private mensajesService: MensajesService
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

  get nombre() {
    return this.form.get('nombre');
  }

  get email() {
    return this.form.get('email');
  }

  get mensaje() {
    return this.form.get('mensaje');
  }

  get telefono() {
    return this.form.get('telefono');
  }

  get web() {
    return this.form.get('web');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.mensajesService
      .enviarMensaje(
        this.form.value.nombre,
        this.form.value.email,
        this.form.value.mensaje,
        this.form.value.telefono,
        this.form.value.web
      )
      .subscribe((mensaje) => {
        console.log(mensaje);
        this.form.reset();
      });
  }
}
