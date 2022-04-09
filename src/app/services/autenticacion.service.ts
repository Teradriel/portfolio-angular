import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log('Servicio de autenticacion iniciado');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(usuario: string, pass: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:8081/new/usr/', { usuario, pass })
      .pipe(
        map((user) => {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
