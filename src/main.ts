import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // O AppComponent deve ser standalone
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Inicie a aplicação diretamente com o AppComponent
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
