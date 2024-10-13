import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrivacyPolicyComponent } from '../shared/privacy-policy/privacy-policy.component';
import { Router, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, PrivacyPolicyComponent, TranslateModule, RouterModule ],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss', './contactform-form.component.scss', './contactform-mobile.component.scss']
})
export class ContactformComponent {
  constructor(private router: Router) {}
  isChecked: boolean = false;
  checkboxTouched: boolean = false;
  contactData = {
    name: '',
  email: '',
  message: ''
  }
  mailTest = false;
  messageSent: boolean = false;
  http = inject(HttpClient);
  public routerLinkVariable: string = '/privacy-policy';

  post = {
    endPoint: 'https://ahmet-yapicilar.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

   onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.valid && !this.mailTest) {
      this.messageSent = true;
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
          },
        });
        this.resetForm(ngForm);
       } 
   }

   resetForm(ngForm: NgForm) {
    // Setze die Formular-Daten zurück
    ngForm.resetForm();
    
    // Setze die Variablen zurück
    this.isChecked = false;
    this.checkboxTouched = false;
    setTimeout(() => {
      this.messageSent = false;
    }, 3000);
  }

  validateCheckbox() {
    this.checkboxTouched = true;
  }

  openPrivacyPolicy(event: Event){
    event.preventDefault();
    this.router.navigateByUrl('/privacy-policy/');
  }
}
