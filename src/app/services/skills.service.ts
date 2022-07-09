import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../interfaces/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private url = 'http://localhost:8080/skill/';

  constructor(private http: HttpClient) {}

  getSkill(id: string): Observable<Skill> {
    return this.http.get<Skill>(
      this.url + JSON.parse(localStorage.getItem('currentUser') || '{}').id
    );
  }

  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + 'all');
  }

  agregarSkill(newSkill: Skill): Observable<Skill> {
    return this.http.post<Skill>(
      this.url +
        'new/' +
        JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      newSkill
    );
  }

  editarSkill(skill: Skill, id: string): Observable<Skill> {
    return this.http.put<Skill>(this.url + 'edit/' + id, skill);
  }

  eliminarSkill(id: string): Observable<Skill> {
    return this.http.delete<Skill>(this.url + 'delete/' + id);
  }
}
