import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { ClientModule } from './app/client.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ClientModule);
