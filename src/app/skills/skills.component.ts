import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NavbarComponent } from '../landing-page/navbar/navbar.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgFor, NavbarComponent,],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skill-mobile.component.scss']
})
export class SkillsComponent {

  constructor(){
  }


  paths = [
    "assets/img/skills/html-icon.png",
    "assets/img/skills/css-icon.png",
    "assets/img/skills/js-icon.png",
    "assets/img/skills/ts-icon.png",
    "assets/img/skills/angular-icon.png",
    "assets/img/skills/firebase-icon.png",
    "assets/img/skills/git-icon.png",
    "assets/img/skills/restapi-icon.png",
    "assets/img/skills/scrum-icon.png",
    "assets/img/skills/materialdesign-icon.png"
  ]

  skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Firebase", "Git", "Rest-Api", "Scrum", "Material Design"
  ]
}
