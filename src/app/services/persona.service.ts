import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  //private url = 'https://radiant-hollows-94958.herokuapp.com/';
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getPersona(id: string): Observable<User> {
    return this.http.get<User>(this.url + 'user/' + id);
  }

  editarPersona(user: User): Observable<User> {
    return this.http.put<User>(
      this.url +
        'user/edit/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      user
    );
  }
}
