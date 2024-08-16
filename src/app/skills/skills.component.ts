import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  paths = [
    "./assets/img/skills/html-icon.png",
    "./assets/img/skills/css-icon.png",
    "./assets/img/skills/js-icon.png",
    "./assets/img/skills/ts-icon.png",
    "./assets/img/skills/angular-icon.png",
    "./assets/img/skills/firebase-icon.png",
    "./assets/img/skills/git-icon.png",
    "./assets/img/skills/restapi-icon.png",
    "./assets/img/skills/scrum-icon.png",
    "./assets/img/skills/materialdesign-icon.png"
  ]

  skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Firebase", "Git", "Rest-Api", "Scrum", "Material Design"
  ]
}
