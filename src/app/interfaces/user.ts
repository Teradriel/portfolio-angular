import { Curso } from './curso';
import { Educacion } from './educacion';
import { Idioma } from './idioma';
import { Intereses } from './intereses';
import { Skill } from './skill';
import { Experiencia } from './experiencia';
import { Mensaje } from './mensaje';
import { Rol } from './rol';

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  telefono: string;
  pais: string;
  ciudad: string;
  direccion: string;
  fechaNacimiento: string;
  sexo: string;
  estadoCivil: string;
  imagen: string;
  intro: string;
  username: string;
  email: string;
  password: string;
  /* educacion: Educacion;
  idiomas: Idioma;
  intereses: Intereses;
  skills: Skill;
  cursos: Curso;
  experiencias: Experiencia;
  mensajes: Mensaje;
  rol: Rol; */
}
