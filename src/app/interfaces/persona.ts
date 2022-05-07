import { Curso } from './curso';
import { Educacion } from './educacion';
import { Idioma } from './idioma';
import { Intereses } from './intereses';
import { Skill } from './skill';
import { Experiencia } from './experiencia';
import { Mensaje } from './mensaje';
import { User } from './user';

export interface Persona {
  id: string;
  nombre: string;
  apellido: string;
  /*   email: string; */
  telefono: string;
  pais: string;
  ciudad: string;
  direccion: string;
  fechaNacimiento: string;
  sexo: string;
  estadoCivil: string;
  imagen: string;
  intro: string;
  user: User[];
  educacion: Educacion[];
  idiomas: Idioma[];
  intereses: Intereses[];
  skills: Skill[];
  cursos: Curso[];
  experiencias: Experiencia[];
  mensajes: Mensaje[];
}
