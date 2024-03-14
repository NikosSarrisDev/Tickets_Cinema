import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cinema.app',
  appName: 'Cinema_app',
  webDir: 'dist/front-end/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
