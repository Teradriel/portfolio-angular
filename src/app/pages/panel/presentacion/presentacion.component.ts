import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
})
export class PresentacionComponent implements OnInit {
  @Input() dataUser!: User;
  formIntro: FormGroup;

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder
  ) {
    this.formIntro = this.formbuilder.group({
      intro: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
  }

  onIntro(event: Event) {
    this.dataUser.intro = this.formIntro.value.intro;
    this.personaService.editarPersona(this.dataUser).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
      });
    });
  }
}
