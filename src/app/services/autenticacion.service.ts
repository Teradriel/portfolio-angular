import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private logged = new BehaviorSubject<boolean>(false);
  private currentUserSubject: BehaviorSubject<any>;

  get Logged() {
    return this.logged.asObservable();
  }
  constructor(private http: HttpClient) {
    console.log('Servicio de autenticacion iniciado');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(username: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:8081/api/auth/signin', {
        username,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.logged.next(true);
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  CrearCuenta(
    newuser: string,
    newpassword: string,
    newemail: string
  ): Observable<any> {
    return this.http
      .post<any>('http://localhost:8081/api/auth/signup', {
        newuser,
        newpassword,
        newemail,
      })
      .pipe(
        map((newuser) => {
          this.currentUserSubject.next(newuser);
          return newuser;
        })
      );
  }

  logout() {
    this.logged.next(false);
    localStorage.removeItem('currentUser');
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
