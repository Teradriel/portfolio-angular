import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idioma } from '../interfaces/idioma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdiomasService {
  private url = 'http://localhost:8080/idioma/';

  constructor(private http: HttpClient) {}

  getIdiomas(id: string): Observable<Idioma> {
    return this.http.get<Idioma>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllIdiomas(): Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.url + 'all');
  }

  agregarIdiomas(newIdioma: Idioma): Observable<Idioma> {
    return this.http.post<Idioma>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newIdioma
    );
  }

  editarIdiomas(idioma: Idioma, id: string): Observable<Idioma> {
    return this.http.put<Idioma>(this.url + 'edit/' + id, idioma);
  }

  eliminarIdiomas(id: string): Observable<Idioma> {
    return this.http.delete<Idioma>(this.url + 'delete/' + id);
  }
}
