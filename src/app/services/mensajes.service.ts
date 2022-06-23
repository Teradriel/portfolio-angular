import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root',
})
export class MensajesService {
  constructor(private http: HttpClient) {}

  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    console.log('Enviando mensaje');
    return this.http.post<Mensaje>(
      'http://localhost:8080/new/message',
      mensaje
    );
  }
}
