import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', 'landing-page-right.component.scss', './landing-page-tablet.component.scss', './landing-page-mobile.component.scss']
})
export class LandingPageComponent {

}
