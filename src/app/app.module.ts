import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule, AUTH_CONFIG, AuthService, HttpTokenInterceptor } from '@ruf/idp-auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment } from '../environments/environment';
import { AppConfigService } from './app-config.service';
import { HasClaimDirective } from './security/has-claim.directive';
import { LoggingServiceModule,LoggingService } from 'ionic-logging-service';
import { ServiceWorkerModule } from '@angular/service-worker';

export const initApp = (
  config: AppConfigService,
  authService: AuthService
) => () =>
  config.load().then((cfg) => {
    // delays initialization until config gets loaded
    console.log('setup', cfg.authConfig);
    authService.setup(cfg.authConfig);
  });
  export function configureLogging(loggingService: LoggingService): () => void {
    return () => loggingService.configure(environment.logging);
  }
@NgModule({
  declarations: [AppComponent, HasClaimDirective],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule,AuthModule.forRoot(),LoggingServiceModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: AUTH_CONFIG,
      useValue: environment.authConfig
    },
     {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
     {
      deps: [LoggingService],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: configureLogging
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


