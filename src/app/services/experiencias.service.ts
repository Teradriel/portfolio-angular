import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../interfaces/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienciasService {
  private url = 'http://localhost:8080/exp/';

  constructor(private http: HttpClient) {}

  getExp(id: string): Observable<Experiencia> {
    return this.http.get<Experiencia>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllExp(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + 'all');
  }

  agregarExp(newExp: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newExp
    );
  }

  editarExp(exp: Experiencia, id: string): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.url + 'edit/' + id, exp);
  }

  eliminarExp(id: string): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.url + 'delete/' + id);
  }
}
