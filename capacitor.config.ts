import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cinephile.recommender',
  appName: 'Cinephile',
  webDir: 'www',            // unused, but required
  server: {
    url: 'https://cinephile-imdb-movie-recommender-309517433349.us-west1.run.app',
    cleartext: false,       // HTTPS
    androidScheme: 'https',
  },
  android: {
    backgroundColor: '#121212'
  }
};

export default config;
