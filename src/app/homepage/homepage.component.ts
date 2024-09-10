import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LandingPageComponent, PortfolioComponent, AboutMeComponent, ContactformComponent, SkillsComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
