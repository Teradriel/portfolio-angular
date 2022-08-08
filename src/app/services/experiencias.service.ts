import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../interfaces/experiencia';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class ExperienciasService {
  private url = 'https://radiant-hollows-94958.herokuapp.com/exp/';
  //private url = 'http://localhost:8080/exp/';

  constructor(private http: HttpClient) {}

  getExp(id: string): Observable<Experiencia> {
    return this.http.get<Experiencia>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllExp(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + 'all');
  }

  agregarExp(newExp: Experiencia): Observable<User> {
    return this.http.post<User>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newExp
    );
  }

  editarExp(exp: Experiencia, id: string): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.url + 'edit/' + id, exp);
  }

  eliminarExp(id: string, user_id: string): Observable<User> {
    return this.http.delete<User>(this.url + 'delete/' + id);
  }
}
