export const environment = {
  production: true,
  authConfig: {
    'issuer': 'https://login8-uat.fiscloudservices.com/idp/us_merchant', 
    'clientId': 'RonTestApp', 
    'dummyClientSecret': '996ee7bf0b6dc04882080f308ac28929859e', 
    'idpApiKey': 'iQNowMobile', 
    'redirectUri': 'https://ronpanrsp.netlify.app/', 
    'logoutUrl': 'https://ronpanrsp.netlify.app/',
    'responseType': 'code', 
    'requireHttps': false,
    'waitForTokenInMsec': 1000,
    'authorizationClaimProperty': 'UserAuthorizations', 
    'interceptUrls': ['https://https://ronpanrsp.netlify.app/api/users'], 
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
