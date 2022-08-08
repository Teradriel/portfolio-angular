import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { PersonaService } from './persona.service';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private logged: BehaviorSubject<boolean>;
  private notLogged: BehaviorSubject<boolean>;
  private currentUserSubject: BehaviorSubject<any>;

  private url = 'https://radiant-hollows-94958.herokuapp.com/';
  //private url = 'http://localhost:8080/';

  public currentId = '';

  get Logged() {
    return this.logged.asObservable();
  }

  get NotLogged() {
    return this.notLogged.asObservable();
  }

  constructor(
    private http: HttpClient,
    private personaService: PersonaService
  ) {
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

  IniciarSesion(username: string, password: string): Observable<User> {
    return this.http
      .post<User>(this.url + 'api/auth/signin', {
        username,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentId = user.id;
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
    this.currentId = '';
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userData');
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
