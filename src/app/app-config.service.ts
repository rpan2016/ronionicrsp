import { Injectable } from '@angular/core';
import { RufAuthConfig, AUTH_NO_INTERCEPT_HEADER } from '@ruf/idp-auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  config: { auth: RufAuthConfig };

  constructor(private http: HttpClient) {}

  load(): Promise<any> {
    // Would come from a backend's REST service in a real app
    return this.http
      .get<{ auth: RufAuthConfig }>('assets/config/config.json', {
        headers: { [AUTH_NO_INTERCEPT_HEADER]: 'yes' },
      })
      .toPromise()
      .then((cfg) => (
        this.config = cfg));
  }
}
