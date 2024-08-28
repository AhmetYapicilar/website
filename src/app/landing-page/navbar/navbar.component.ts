import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './navbar-mobile.component.scss'],
})
export class NavbarComponent {

  underlineAboutme: boolean = false;
  underlineSkills: boolean = false;
  underlinePortfolio: boolean = false;

  setUnderline(section: string) {
    this.underlineAboutme = section === 'aboutme';
    this.underlineSkills = section === 'skills';
    this.underlinePortfolio = section === 'portfolio';
  }

  toggleMenu(){
    document.getElementById('overlay')?.classList.toggle('transform');
  }
}
