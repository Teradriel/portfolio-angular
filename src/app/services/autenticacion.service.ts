import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private logged: BehaviorSubject<boolean>;
  private notLogged: BehaviorSubject<boolean>;
  private currentUserSubject: BehaviorSubject<any>;
  private url = 'http://localhost:8080/';

  get Logged() {
    return this.logged.asObservable();
  }

  get NotLogged() {
    return this.notLogged.asObservable();
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.logged = new BehaviorSubject<boolean>(
      JSON.parse(localStorage.getItem('currentUser') || '{}') !== {}
    );
    this.notLogged = new BehaviorSubject<boolean>(
      JSON.parse(localStorage.getItem('currentUser') || '{}') === {}
    );
  }

  IniciarSesion(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.url + 'api/auth/signin', {
        username,
        password,
      })
      .pipe(
        map((user) => {
          this.http
            .get<any>(this.url + 'user/' + user.id)
            .subscribe((userData) => {
              localStorage.setItem('userData', JSON.stringify(userData));
            });
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.logged.next(true);
          this.notLogged.next(false);
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
      .post<any>(this.url + 'api/auth/signup', {
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
    this.notLogged.next(true);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userData');
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
