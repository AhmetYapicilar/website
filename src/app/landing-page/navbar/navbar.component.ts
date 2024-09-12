import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './navbar-mobile.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string){
    this.translate.use(language);
  }

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

  checkUrlAndNavigate(event: Event) {
    event.preventDefault();
    
    // Aktuelle URL abrufen
    const currentUrl = this.router.url;

    // Prüfen, ob man bereits auf der Homepage ist
    if (currentUrl === '/') {
      // Zur ID "landing-page" scrollen
      document.getElementById('landing-page')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Auf die Homepage navigieren
      this.router.navigateByUrl('');
    }
  }
}
