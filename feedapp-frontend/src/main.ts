import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';


bootstrapApplication(AppComponent, appConfig, AppModule)
  .catch((err) => console.error(err));

// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

