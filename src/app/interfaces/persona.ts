import { Curso } from './curso';
import { Educacion } from './educacion';
import { Idioma } from './idioma';
import { Intereses } from './intereses';
import { Skill } from './skill';
import { Experiencia } from './experiencia';
import { Mensaje } from './mensaje';

export interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  usuario: string;
  password: string;
  pais: string;
  ciudad: string;
  direccion: string;
  fechaNacimiento: string;
  sexo: string;
  estadoCivil: string;
  imagen: string;
  intro: string;
  educacion: Educacion[];
  idiomas: Idioma[];
  intereses: Intereses[];
  skills: Skill[];
  cursos: Curso[];
  experiencias: Experiencia[];
  mensajes: Mensaje[];
}
