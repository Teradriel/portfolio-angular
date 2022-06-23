import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { CursosService } from 'src/app/services/cursos.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { IdiomasService } from 'src/app/services/idiomas.service';
import { InteresesService } from 'src/app/services/intereses.service';
import { SkillsService } from 'src/app/services/skills.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/interfaces/educacion';
import { Idioma } from 'src/app/interfaces/idioma';
import { Intereses } from 'src/app/interfaces/intereses';
import { Skill } from 'src/app/interfaces/skill';
import { Curso } from 'src/app/interfaces/curso';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { Rol } from 'src/app/interfaces/rol';

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
  formEducacion: FormGroup;
  formAddEducacion: FormGroup;
  formDeleteEducacion: FormGroup;
  formIdiomas: FormGroup;
  formIntereses: FormGroup;
  formSkills: FormGroup;
  formCursos: FormGroup;
  formExperiencias: FormGroup;
  formMensajes: FormGroup;

  dataUser: User = {
    id: JSON.parse(localStorage.getItem('currentUser') || '{}').id,
    nombre: JSON.parse(localStorage.getItem('userData') || '{}').nombre,
    apellido: JSON.parse(localStorage.getItem('userData') || '{}').apellido,
    telefono: JSON.parse(localStorage.getItem('userData') || '{}').telefono,
    pais: JSON.parse(localStorage.getItem('userData') || '{}').pais,
    ciudad: JSON.parse(localStorage.getItem('userData') || '{}').ciudad,
    direccion: JSON.parse(localStorage.getItem('userData') || '{}').direccion,
    fechaNacimiento: JSON.parse(localStorage.getItem('userData') || '{}')
      .fechaNacimiento,
    sexo: JSON.parse(localStorage.getItem('userData') || '{}').sexo,
    estadoCivil: JSON.parse(localStorage.getItem('userData') || '{}')
      .estadoCivil,
    imagen: JSON.parse(localStorage.getItem('userData') || '{}').imagen,
    intro: JSON.parse(localStorage.getItem('userData') || '{}').intro,
    username: JSON.parse(localStorage.getItem('currentUser') || '{}').username,
    email: JSON.parse(localStorage.getItem('currentUser') || '{}').email,
    password: JSON.parse(localStorage.getItem('currentUser') || '{}').password,
  };
  educacion: Educacion = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').estudio.id,
    eduFechaInicio: JSON.parse(localStorage.getItem('userData') || '{}').estudio
      .eduFechaInicio,
    eduFechaFin: JSON.parse(localStorage.getItem('userData') || '{}').estudio
      .eduFechaFin,
    eduTitulo: JSON.parse(localStorage.getItem('userData') || '{}').estudio
      .eduTitulo,
    eduInstitucion: JSON.parse(localStorage.getItem('userData') || '{}').estudio
      .eduInstitucion,
  };
  idiomas: Idioma = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').idioma.id,
    idioma: JSON.parse(localStorage.getItem('userData') || '{}').idioma.idioma,
    nivel: JSON.parse(localStorage.getItem('userData') || '{}').idioma.nivel,
  };
  intereses: Intereses = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').interes.id,
    interes: JSON.parse(localStorage.getItem('userData') || '{}').interes
      .interes,
  };
  skills: Skill = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').skill.id,
    skill: JSON.parse(localStorage.getItem('userData') || '{}').skill.skill,
    nivel: JSON.parse(localStorage.getItem('userData') || '{}').skill.nivel,
  };
  cursos: Curso = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').curso.id,
    titulo: JSON.parse(localStorage.getItem('userData') || '{}').curso.titulo,
    fecha: JSON.parse(localStorage.getItem('userData') || '{}').curso.fecha,
    descripcion: JSON.parse(localStorage.getItem('userData') || '{}').curso
      .descripcion,
    lugar: JSON.parse(localStorage.getItem('userData') || '{}').curso.lugar,
  };
  experiencias: Experiencia = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').exp.id,
    titulo: JSON.parse(localStorage.getItem('userData') || '{}').exp.titulo,
    fechaInicio: JSON.parse(localStorage.getItem('userData') || '{}').exp
      .fechaInicio,
    fechaFin: JSON.parse(localStorage.getItem('userData') || '{}').exp.fechaFin,
    empresa: JSON.parse(localStorage.getItem('userData') || '{}').exp.empresa,
    descripcion: JSON.parse(localStorage.getItem('userData') || '{}').exp
      .descripcion,
  };
  mensajes: Mensaje = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').mens.id,
    web: JSON.parse(localStorage.getItem('userData') || '{}').mens.web,
    email: JSON.parse(localStorage.getItem('userData') || '{}').mens.email,
    telefono: JSON.parse(localStorage.getItem('userData') || '{}').mens
      .telefono,
    nombre: JSON.parse(localStorage.getItem('userData') || '{}').mens.nombre,
    mensaje: JSON.parse(localStorage.getItem('userData') || '{}').mens.mensaje,
  };
  rol: Rol = {
    id: JSON.parse(localStorage.getItem('userData') || '{}').roles.id,
    name: JSON.parse(localStorage.getItem('userData') || '{}').roles.name,
  };

  constructor(
    private personaService: PersonaService,
    private cursosService: CursosService,
    private educacionService: EducacionService,
    private experienciasService: ExperienciasService,
    private idiomasService: IdiomasService,
    private interesesService: InteresesService,
    private skillsService: SkillsService,
    private mensajesService: MensajesService,
    private formbuilder: FormBuilder
  ) {
    this.formNombre = this.formbuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
    });

    this.formApellido = this.formbuilder.group({
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
    });

    this.formTelefono = this.formbuilder.group({
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(12),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
    });

    this.formPais = this.formbuilder.group({
      pais: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
    });

    this.formCiudad = this.formbuilder.group({
      ciudad: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
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
      intro: ['', Validators.required, Validators.minLength(10)],
    });

    this.formImagen = this.formbuilder.group({
      imagen: ['', Validators.required],
    });

    this.formEducacion = this.formbuilder.group({
      eduTitulo: ['', Validators.required],
      eduFechaInicio: ['', Validators.required],
      eduFechaFin: ['', Validators.required],
      eduInstitucion: ['', Validators.required],
    });

    this.formAddEducacion = this.formbuilder.group({
      addEduTitulo: ['', Validators.required],
      addEduFechaInicio: ['', Validators.required],
      addEduFechaFin: ['', Validators.required],
      addEduInstitucion: ['', Validators.required],
    });

    this.formDeleteEducacion = this.formbuilder.group({
      deleteEduId: ['', Validators.required],
    });

    this.formIdiomas = this.formbuilder.group({
      idioma: ['', Validators.required],
      nivel: ['', Validators.required],
    });

    this.formIntereses = this.formbuilder.group({
      interes: ['', Validators.required],
    });

    this.formSkills = this.formbuilder.group({
      skill: ['', Validators.required],
      nivel: ['', Validators.required],
    });

    this.formCursos = this.formbuilder.group({
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.formExperiencias = this.formbuilder.group({
      empresa: ['', Validators.required],
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.formMensajes = this.formbuilder.group({
      mensaje: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      web: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    /* const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.personaService.getPersona(user.id).subscribe((userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
    }); */
  }

  onNombre(event: Event) {
    this.dataUser.nombre = this.formNombre.value.nombre;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onApellido(event: Event) {
    this.dataUser.apellido = this.formApellido.value.apellido;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onTelefono(event: Event) {
    this.dataUser.telefono = this.formTelefono.value.telefono;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onPais(event: Event) {
    this.dataUser.pais = this.formPais.value.pais;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onCiudad(event: Event) {
    this.dataUser.ciudad = this.formCiudad.value.ciudad;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onDireccion(event: Event) {
    this.dataUser.direccion = this.formDireccion.value.direccion;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onFechaNacimiento(event: Event) {
    this.dataUser.fechaNacimiento =
      this.formFechaNacimiento.value.fechaNacimiento;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onSexo(event: Event) {
    this.dataUser.sexo = this.formSexo.value.sexo;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onEstadoCivil(event: Event) {
    this.dataUser.estadoCivil = this.formEstadoCivil.value.estadoCivil;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onIntro(event: Event) {
    this.dataUser.intro = this.formIntro.value.intro;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onImagen(event: Event) {
    this.dataUser.imagen = this.formImagen.value.imagen;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onEducacion(event: Event) {
    this.educacion = this.formEducacion.value.educacion;
    this.educacionService
      .editarEducacion(this.educacion, this.educacion.id)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
          });
      });
  }

  onAddEducacion(event: Event) {
    this.educacion = this.formEducacion.value.educacion;
    this.educacionService.agregarEducacion(this.educacion).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }

  onDeleteEducacion(event: Event) {
    this.educacionService.eliminarEducacion(this.educacion.id).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
