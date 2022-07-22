import { Curso } from './curso';
import { Educacion } from './educacion';
import { Idioma } from './idioma';
import { Intereses } from './intereses';
import { Skill } from './skill';
import { Experiencia } from './experiencia';
import { Mensaje } from './mensaje';

export interface Persona {
  educacion: Educacion[];
  idiomas: Idioma[];
  intereses: Intereses[];
  skills: Skill[];
  cursos: Curso[];
  experiencias: Experiencia[];
  mensajes: Mensaje[];
}
