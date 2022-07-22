import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logged$: Observable<boolean> | undefined;
  notLogged$: Observable<boolean> | undefined;
  constructor(
    private autenticacionService: AutenticacionService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.logged$ = this.autenticacionService.Logged;
    this.notLogged$ = this.autenticacionService.NotLogged;
  }

  onLogout() {
    this.autenticacionService.logout();
    this.ruta.navigate(['/login']);
  }
}
