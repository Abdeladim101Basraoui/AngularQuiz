import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//apres l'exe du index.html ==>main.ts==>qui fait un bootstrap module de "appmodule" 
// demarer un module == Appmodule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
