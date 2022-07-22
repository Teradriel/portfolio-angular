import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PersonaService } from 'src/app/services/persona.service';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from 'src/app/interfaces/skill';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.css'],
})
export class SkillPanelComponent implements OnInit {
  @Input() dataUser!: User;
  formSkills: FormGroup;
  formAddSkill: FormGroup;
  formDeleteSkill: FormGroup;

  skills: Skill[] = [];

  constructor(
    private personaService: PersonaService,
    private formbuilder: FormBuilder,
    private skillsService: SkillsService
  ) {
    this.formSkills = this.formbuilder.group({
      skill: ['', Validators.required],
      nivel: ['', Validators.required],
    });

    this.formAddSkill = this.formbuilder.group({
      skill: ['', Validators.required],
      nivel: ['', Validators.required],
    });

    this.formDeleteSkill = this.formbuilder.group({
      deleteSkill: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listaSkills();
  }

  listaSkills(): void {
    this.skills = JSON.parse(localStorage.getItem('userData') || '{}').skill;
  }

  onSkill(event: Event, id: string) {
    this.skillsService.editarSkill(this.formSkills.value, id).subscribe(() => {
      this.personaService.getPersona(this.dataUser.id).subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
    });
    this.formAddSkill.reset();
  }

  onAddSkill(event: Event) {
    this.skillsService
      .agregarSkill(this.formAddSkill.value)
      .subscribe((userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.dataUser = userData;
      });
    this.formAddSkill.reset();
  }

  onDeleteSkill(event: Event, id: string, user_id: string) {
    this.skillsService.eliminarSkill(id, user_id).subscribe((userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.dataUser = userData;
    });
    this.formDeleteSkill.reset();
  }
}
