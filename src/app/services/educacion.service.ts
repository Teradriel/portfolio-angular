import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../interfaces/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  private url = 'http://localhost:8080/estudio/';

  constructor(private http: HttpClient) {}

  getEducacion(id: string): Observable<Educacion> {
    return this.http.get<Educacion>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getTodoEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url + 'all');
  }

  agregarEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      educacion
    );
  }

  editarEducacion(educacion: Educacion, id: string): Observable<Educacion> {
    return this.http.put<Educacion>(this.url + 'edit/' + id, educacion);
  }

  eliminarEducacion(id: string): Observable<Educacion> {
    return this.http.delete<Educacion>(this.url + 'delete/' + id);
  }
}
