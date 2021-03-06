import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { ClientModule } from './app/client.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ClientModule);
