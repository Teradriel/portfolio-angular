import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  newform: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formbuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private ruta: Router
  ) {
    this.form = this.formbuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      pass: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
    });
    this.newform = this.formbuilder.group({
      newusuario: ['', [Validators.required, Validators.minLength(3)]],
      newpass: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
      newpass2: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ],
      ],
      newemail: ['', [Validators.required, Validators.email]],
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  ngOnInit(): void {}

  get Usuario() {
    return this.form.get('usuario');
  }

  get Pass() {
    return this.form.get('pass');
  }

  get NewUsuario() {
    return this.newform.get('newusuario');
  }

  get NewPass() {
    return this.newform.get('newpass');
  }

  get NewPass2() {
    return this.newform.get('newpass2');
  }

  get NewEmail() {
    return this.newform.get('newemail');
  }

  submitLogin(event: Event) {
    event.preventDefault();
    this.autenticacionService
      .IniciarSesion(this.form.value.usuario, this.form.value.pass)
      .subscribe(() => {
        this.ruta.navigate(['panel']);
      });
  }

  submitRegister(event: Event) {
    event.preventDefault();
    this.autenticacionService
      .CrearCuenta(
        this.newform.value.newusuario,
        this.newform.value.newpass,
        this.newform.value.newemail
      )
      .subscribe(() => {
        this.ruta.navigate(['login']);
      });
  }
}
