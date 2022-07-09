import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.listaSkills();
  }

  listaSkills(): void {
    this.skillsService.getAllSkills().subscribe((data) => {
      this.skills = data;
    });
  }
}
