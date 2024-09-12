import { Routes } from '@angular/router';
import { ImpressumComponent } from './shared/impressum/impressum.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'imprint/', component: ImpressumComponent },
    { path: 'privacy-policy/', component: PrivacyPolicyComponent }
];
