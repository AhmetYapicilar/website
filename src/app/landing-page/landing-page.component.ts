import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', 'landing-page-right.component.scss', './landing-page-mobile.component.scss', './landing-page-mobile.component.scss']
})
export class LandingPageComponent {

}
