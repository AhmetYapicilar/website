import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router'; // Importiere das RouterModule
import { routes } from './app.routes'; // Importiere deine Routen

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomepageComponent,
    CommonModule,
    RouterOutlet,
    LandingPageComponent,
    NavbarComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactformComponent,
    FooterComponent,
    TranslateModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string){
    this.translate.use(language);
  }
}
