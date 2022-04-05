import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MensajesService {
  constructor(private http: HttpClient) {}

  enviarMensaje(
    mensaje: string,
    nombre: string,
    email: string,
    telefono: string,
    web: string
  ) {
    console.log('Enviando mensaje');
    return this.http.post(
      'http://localhost:8081/new/mensaje',
      JSON.stringify({ mensaje, nombre, email, telefono, web })
    );
  }
}
