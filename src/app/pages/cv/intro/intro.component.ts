import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  intro: String = '';

  constructor() {}

  ngOnInit(): void {
    this.intro = JSON.parse(localStorage.getItem('userData') || '{}').intro;
  }
}
