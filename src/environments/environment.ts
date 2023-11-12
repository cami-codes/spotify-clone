// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const SpotifyConfiguration = {
  clientId: '3c716fb72a574a72920848311b196574',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", // red current playing music
    "user-read-recently-played", // read recently played songs
    "user-read-playback-state", // read user playback state
    "user-top-read", // top user artists and songs
    "user-modify-playback-state", // change user's playback state
    "user-library-read", // read user's library
    "playlist-read-private", // read private playlists
    "playlist-read-collaborative" // read collaborative playlists
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
