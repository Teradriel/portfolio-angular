import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../interfaces/educacion';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  private url = 'https://radiant-hollows-94958.herokuapp.com/estudio/';

  constructor(private http: HttpClient) {}

  getEducacion(id: string): Observable<Educacion> {
    return this.http.get<Educacion>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url + 'all');
  }

  agregarEducacion(newEstudio: Educacion): Observable<User> {
    return this.http.post<User>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newEstudio
    );
  }

  editarEducacion(educacion: Educacion, id: String): Observable<Educacion> {
    return this.http.put<Educacion>(this.url + 'edit/' + id, educacion);
  }

  eliminarEducacion(id: string, user_id: string): Observable<User> {
    return this.http.delete<User>(this.url + 'delete/' + id + '/' + user_id);
  }
}
