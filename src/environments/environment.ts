// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authConfig: {
    'issuer': 'https://login8-uat.fiscloudservices.com/idp/us_merchant', 
    'clientId': 'RonTestApp', 
    'dummyClientSecret': '996ee7bf0b6dc04882080f308ac28929859e', 
    'idpApiKey': 'iQNowMobile', 
    'redirectUri': 'http://localhost:4200/', 
    'logoutUrl': 'http://localhost:4200/',
    'responseType': 'code', 
    'requireHttps': false,
    'waitForTokenInMsec': 1000,
    'authorizationClaimProperty': 'UserAuthorizations', 
    'interceptUrls': ['http://localhost:4200/api/users'], 
    'unauthorizedRoute': ["unauthorized"], 
    'autoRefresh': false, 
    'listenToToken': 'id_token', 
    'encrypted':true
  },
  logging: {
    "logLevels": [
      {
        "loggerName": "root",
        "logLevel": "DEBUG"
      },
      {
        "loggerName": "MyApp.MyNamespace.MyLogger",
        "logLevel": "INFO"
      }
    ]
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
