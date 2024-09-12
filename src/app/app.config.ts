import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core'; 
import { routes } from './app.routes';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// Funktion zur Erstellung des HttpLoaders für ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),               // Router Provider
    provideHttpClient(),                 // HTTP Client Provider
    importProvidersFrom(BrowserModule),  // BrowserModule Provider
    importProvidersFrom(BrowserAnimationsModule), // BrowserAnimationsModule Provider
    importProvidersFrom(TranslateModule.forRoot({   // TranslateModule Provider
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ],
};
