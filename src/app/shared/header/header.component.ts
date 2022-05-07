import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
import { GuardGuard } from '../../services/guard.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logged$: Observable<boolean> | undefined;
  constructor(
    private guard: GuardGuard,
    private autenticacionService: AutenticacionService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.logged$ = this.autenticacionService.Logged;
  }

  onLogout() {
    this.autenticacionService.logout();
    this.ruta.navigate(['/login']);
  }
}
