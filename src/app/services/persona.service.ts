import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interfaces/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private url = 'http://localhost:8081/';
  constructor(private http: HttpClient) {}

  getPersona(id: string): Observable<Persona> {
    return this.http.get<Persona>(this.url + 'user/' + id);
  }

  editarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(
      this.url + 'edit/user/' + persona.id,
      persona
    );
  }
}
