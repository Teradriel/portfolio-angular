import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../interfaces/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private url = 'http://localhost:8080/curso/';

  constructor(private http: HttpClient) {}

  getCurso(id: string): Observable<Curso> {
    return this.http.get<Curso>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url + 'all');
  }

  agregarCurso(newCurso: Curso): Observable<Curso> {
    return this.http.post<Curso>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newCurso
    );
  }

  editarCurso(curso: Curso, id: string): Observable<Curso> {
    return this.http.put<Curso>(this.url + 'edit/' + id, curso);
  }

  eliminarCurso(id: string): Observable<Curso> {
    return this.http.delete<Curso>(this.url + 'delete/' + id);
  }
}
