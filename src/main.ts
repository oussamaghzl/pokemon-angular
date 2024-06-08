import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importation du module principal de l'application


platformBrowserDynamic().bootstrapModule(AppModule) // Démarrage de l'application en chargeant AppModule
  .catch(err => console.error(err)); // Gestion des erreurs en cas d'échec de démarrage
