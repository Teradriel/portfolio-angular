import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  formNombre: FormGroup;
  formApellido: FormGroup;
  formTelefono: FormGroup;
  formPais: FormGroup;
  formCiudad: FormGroup;
  formDireccion: FormGroup;
  formFechaNacimiento: FormGroup;
  formSexo: FormGroup;
  formEstadoCivil: FormGroup;
  formIntro: FormGroup;
  formImagen: FormGroup;

  persona: Persona = {
    id: '',
    nombre: '',
    apellido: '',
    telefono: '',
    pais: '',
    ciudad: '',
    direccion: '',
    fechaNacimiento: '',
    sexo: '',
    estadoCivil: '',
    imagen: '',
    intro: '',
    user: [
      {
        id: '',
        username: '',
        email: '',
        rol: '',
      },
    ],
    educacion: [
      { id: '', titulo: '', fechaInicio: '', fechaFin: '', institucion: '' },
    ],
    idiomas: [{ id: '', idioma: '', nivel: '' }],
    intereses: [{ id: '', interes: '' }],
    skills: [{ id: '', skill: '', nivel: 0 }],
    cursos: [{ id: '', titulo: '', fecha: '', lugar: '', descripcion: '' }],
    experiencias: [
      {
        id: '',
        empresa: '',
        titulo: '',
        fechaInicio: '',
        fechaFin: '',
        descripcion: '',
      },
    ],
    mensajes: [
      { id: '', mensaje: '', nombre: '', email: '', telefono: '', web: '' },
    ],
  };

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder,
    private autenticacionService: AutenticacionService
  ) {
    this.formNombre = this.formbuilder.group({
      nombre: ['', Validators.required],
    });

    this.formApellido = this.formbuilder.group({
      apellido: ['', Validators.required],
    });

    this.formTelefono = this.formbuilder.group({
      telefono: ['', Validators.required],
    });

    this.formPais = this.formbuilder.group({
      pais: ['', Validators.required],
    });

    this.formCiudad = this.formbuilder.group({
      ciudad: ['', Validators.required],
    });

    this.formDireccion = this.formbuilder.group({
      direccion: ['', Validators.required],
    });

    this.formFechaNacimiento = this.formbuilder.group({
      fechaNacimiento: ['', Validators.required],
    });

    this.formSexo = this.formbuilder.group({
      sexo: ['', Validators.required],
    });

    this.formEstadoCivil = this.formbuilder.group({
      estadoCivil: ['', Validators.required],
    });

    this.formIntro = this.formbuilder.group({
      intro: ['', Validators.required],
    });

    this.formImagen = this.formbuilder.group({
      imagen: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.persona.id = JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    ).id;
  }

  getPersona() {
    this.personaService
      .getPersona(JSON.parse(localStorage.getItem('currentUser') || '{}').id)
      .subscribe((persona) => {
        this.persona = persona;
        console.log(persona);
      });
  }

  onNombre(event: Event) {
    /* this.personaService
      .getPersona(JSON.parse(localStorage.getItem('currentUser') || '{}').id)
      .subscribe((persona) => {
        this.persona = persona;
        console.log(persona);
      }); */
    console.log('id ', this.persona.id);
    this.persona.nombre = this.formNombre.value.nombre;
    console.log(this.persona.nombre);
    this.personaService
      .editarPersona(this.persona)
      .subscribe((persona: Persona) => {
        console.log('Persona editada', persona.nombre);
        alert('Persona editada');
      });

    //TODO: Hacer que se actualice el nombre en la persona
  }

  onApellido(event: Event) {
    this.persona.apellido = this.formApellido.value.apellido;
  }

  /* onEmail(event: Event) {
    this.persona.email = this.formEmail.value.email;
  } */

  onTelefono(event: Event) {
    this.persona.telefono = this.formTelefono.value.telefono;
  }

  /*  onUsuario(event: Event) {
    this.persona.usuario = this.formUsuario.value.usuario;
  } */

  onPais(event: Event) {
    this.persona.pais = this.formPais.value.pais;
  }

  onCiudad(event: Event) {
    this.persona.ciudad = this.formCiudad.value.ciudad;
  }

  onDireccion(event: Event) {
    this.persona.direccion = this.formDireccion.value.direccion;
  }

  onFechaNacimiento(event: Event) {
    this.persona.fechaNacimiento =
      this.formFechaNacimiento.value.fechaNacimiento;
  }

  onSexo(event: Event) {
    this.persona.sexo = this.formSexo.value.sexo;
  }

  onEstadoCivil(event: Event) {
    this.persona.estadoCivil = this.formEstadoCivil.value.estadoCivil;
  }

  onIntro(event: Event) {
    this.persona.intro = this.formIntro.value.intro;
  }

  onImagen(event: Event) {
    this.persona.imagen = this.formImagen.value.imagen;
  }
}
