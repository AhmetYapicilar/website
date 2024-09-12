import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me-tablet.component.scss', './about-me.component.scss', './about-me-mobile.component.scss']
})
export class AboutMeComponent {

}
