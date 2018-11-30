// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  domain: 'http://liferay.plexus.services',
  baseurl: {
    en:'http://liferay.plexus.services/en-US/api/jsonws',
    es:'http://liferay.plexus.services/es-ES/api/jsonws'
  },
  apiCredentials:{
    username: 'test@liferay.com',
    password: 'testPoC'
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
