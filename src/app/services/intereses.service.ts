import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intereses } from '../interfaces/intereses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InteresesService {
  private url = 'http://localhost:8080/interes/';

  constructor(private http: HttpClient) {}

  getIntereses(id: string): Observable<Intereses> {
    return this.http.get<Intereses>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllIntereses(): Observable<Intereses[]> {
    return this.http.get<Intereses[]>(this.url + 'all');
  }

  agregarIntereses(newInteres: Intereses): Observable<Intereses> {
    return this.http.post<Intereses>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newInteres
    );
  }

  editarIntereses(interes: Intereses, id: string): Observable<Intereses> {
    return this.http.put<Intereses>(this.url + 'edit/' + id, interes);
  }

  eliminarIntereses(id: string): Observable<Intereses> {
    return this.http.delete<Intereses>(this.url + 'delete/' + id);
  }
}
