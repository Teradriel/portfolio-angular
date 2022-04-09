import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root',
})
export class MensajesService {
  constructor(private http: HttpClient) {
    console.log('Servicio de mensajes iniciado');
  }

  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    console.log('Enviando mensaje');
    return this.http.post<Mensaje>(
      'http://localhost:8081/new/message',
      mensaje
    );
  }
}
