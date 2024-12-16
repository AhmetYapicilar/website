import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../shared/footer/footer.component';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, TranslateModule, LandingPageComponent, PortfolioComponent, AboutMeComponent, ContactformComponent, SkillsComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomepageComponent implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const sections = this.el.nativeElement.querySelectorAll('.fade-section'); // Elemente mit .fade-section überwachen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Klasse hinzufügen, um Animation zu triggern
        }
      });
    });

    sections.forEach((section: Element) => observer.observe(section));
  }
}