import { Component } from '@angular/core';
import { ImpressumComponent } from '../impressum/impressum.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ImpressumComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private router: Router) {}

  openImprint(event: Event) {
    //   let imprint = new ImpressumComponent();
    event.preventDefault();
    this.router.navigateByUrl('/imprint');
  }
}
