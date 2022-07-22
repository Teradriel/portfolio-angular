import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class MensajesService {
  private url = 'http://localhost:8080/mensaje/';

  constructor(private http: HttpClient) {}

  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(this.url + 'new', mensaje);
  }

  enviarMensajeId(mensaje: Mensaje, id: number): Observable<User> {
    return this.http.post<User>(this.url + 'new/' + id, mensaje);
  }

  getAllMensajes(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.url + 'all');
  }
}
