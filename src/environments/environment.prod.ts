export const environment = {
  production: true,
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
