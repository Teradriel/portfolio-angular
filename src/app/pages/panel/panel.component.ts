import { Component, OnInit } from '@angular/core';
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

  estudios: Educacion[] = [];
  idiomas: Idioma[] = [];
  intereses: Intereses[] = [];
  skills: Skill[] = [];
  cursos: Curso[] = [];
  experiencias: Experiencia[] = [];
  mensajes: Mensaje[] = [];

  dataUser: User = {
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
    intro: '',
    imagen: '',
    username: '',
    password: '',
    email: '',
    estudio: {
      id: '',
      titulo: '',
      fechaFin: '',
      fechaInicio: '',
      institucion: '',
    },
    idioma: { id: '', idioma: '', nivel: '' },
    interes: { id: '', interes: '' },
    skill: { id: '', skill: '', nivel: 0 },
    curso: { id: '', titulo: '', fecha: '', lugar: '', descripcion: '' },
    exp: {
      id: '',
      titulo: '',
      fechaFin: '',
      fechaInicio: '',
      empresa: '',
      descripcion: '',
    },
    mens: { id: '', mensaje: '', web: '', nombre: '', telefono: '', email: '' },
    roles: { id: '', name: '' },
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
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      institucion: ['', Validators.required],
    });

    this.formAddEducacion = this.formbuilder.group({
      titulo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      institucion: ['', Validators.required],
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
    this.dataUser = JSON.parse(localStorage.getItem('userData') || '{}');
    this.listaEstudios();
    this.listaIdiomas();
    this.listaIntereses();
    this.listaSkills();
    this.listaCursos();
    this.listaExperiencias();
    this.listaMensajes();
  }

  listaEstudios(): void {
    this.educacionService.getAllEducacion().subscribe((data) => {
      this.estudios = data;
    });
  }

  listaExperiencias(): void {
    this.experienciasService.getAllExp().subscribe((data) => {
      this.experiencias = data;
    });
  }

  listaIdiomas(): void {
    this.idiomasService.getAllIdiomas().subscribe((data) => {
      this.idiomas = data;
    });
  }

  listaIntereses(): void {
    this.interesesService.getAllIntereses().subscribe((data) => {
      this.intereses = data;
    });
  }

  listaSkills(): void {
    this.skillsService.getAllSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  listaCursos(): void {
    this.cursosService.getAllCursos().subscribe((data) => {
      this.cursos = data;
    });
  }

  listaMensajes(): void {
    this.mensajesService.getAllMensajes().subscribe((data) => {
      this.mensajes = data;
    });
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
    this.educacionService
      .editarEducacion(this.formEducacion.value, this.formEducacion.value.id)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
          });
      });
  }

  onAddEducacion(event: Event) {
    this.educacionService
      .agregarEducacion(this.formAddEducacion.value)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
            console.log(userData);
          });
      });
  }

  onDeleteEducacion(event: Event) {
    console.log(this.dataUser.estudio.id);
    /* this.educacionService
      .eliminarEducacion(this.dataUser.estudio.id)
      .subscribe(() => {
        this.personaService
          .getPersona(this.dataUser.id)
          .subscribe((userData) => {
            localStorage.setItem('userData', JSON.stringify(userData));
          });
      }); */
  }
}
