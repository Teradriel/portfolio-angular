import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idioma } from '../interfaces/idioma';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class IdiomasService {
  private url = 'https://radiant-hollows-94958.herokuapp.com/idioma/';
  //private url = 'http://localhost:8080/idioma/';

  constructor(private http: HttpClient) {}

  getIdiomas(id: string): Observable<Idioma> {
    return this.http.get<Idioma>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllIdiomas(): Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.url + 'all');
  }

  agregarIdiomas(newIdioma: Idioma): Observable<User> {
    return this.http.post<User>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newIdioma
    );
  }

  editarIdiomas(idioma: Idioma, id: string): Observable<Idioma> {
    return this.http.put<Idioma>(this.url + 'edit/' + id, idioma);
  }

  eliminarIdiomas(id: string, user_id: string): Observable<User> {
    return this.http.delete<User>(this.url + 'delete/' + id + '/' + user_id);
  }
}
