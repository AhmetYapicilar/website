import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NavbarComponent } from '../landing-page/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgFor, NavbarComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skill-mobile.component.scss', './skill-mobile.component.scss']
})
export class SkillsComponent {

  showInfo: boolean = false;

  constructor(){
  }

  onMouseOver(){
    this.showInfo = true;
  }

  onMouseLeave(){
    this.showInfo = false;
  }


  paths = [
    "assets/img/skills/html-icon.svg",
    "assets/img/skills/css-icon.svg",
    "assets/img/skills/js-icon.svg",
    "assets/img/skills/ts-icon.svg",
    "assets/img/skills/angular-icon.svg",
    "assets/img/skills/firebase-icon.svg",
    "assets/img/skills/git-icon.svg",
    "assets/img/skills/restapi-icon.svg",
    "assets/img/skills/scrum-icon.svg",
    "assets/img/skills/materialdesign-icon.svg"
  ]

  skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Firebase", "Git", "Rest-Api", "Scrum", "Material Design"
  ]
}
