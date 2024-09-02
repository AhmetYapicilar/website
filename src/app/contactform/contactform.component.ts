import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss', './contactform-form.component.scss', './contactform-mobile.component.scss']
})
export class ContactformComponent {
  isChecked: boolean = false;
  checkboxTouched: boolean = false;
  contactData = {
    name: '',
  email: '',
  message: ''
  }
  mailTest = true;
  http = inject(HttpClient);

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
      console.log(ngForm);
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.valid && this.mailTest) {

      this.resetForm(ngForm);
    }
   }

   resetForm(ngForm: NgForm) {
    // Setze die Formular-Daten zurück
    ngForm.resetForm();
    
    // Setze die Variablen zurück
    this.isChecked = false;
    this.checkboxTouched = false;
  }

  validateCheckbox() {
    this.checkboxTouched = true;
  }
}
